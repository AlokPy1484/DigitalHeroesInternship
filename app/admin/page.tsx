"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Users,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  ArrowLeft,
  RefreshCw,
  Inbox,
  ChevronDown,
  Calendar,
  Mail,
  Briefcase,
  Clock,
  Wallet,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Lead {
  id: number;
  name: string;
  email: string;
  project_type: string;
  duration: number;
  complexity: string;
  timeline: string;
  budget: string;
  notes: string;
  status: "New" | "Contacted" | "Closed";
  created_at: string;
}

const STATUS_CYCLE: Record<string, string> = {
  New: "Contacted",
  Contacted: "Closed",
  Closed: "New",
};

const STATUS_STYLES: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  New: {
    bg: "bg-muted-sage/10",
    text: "text-muted-sage",
    border: "border-muted-sage/30",
    glow: "",
  },
  Contacted: {
    bg: "bg-heritage-gold/15",
    text: "text-heritage-gold",
    border: "border-heritage-gold/30",
    glow: "",
  },
  Closed: {
    bg: "bg-carbon-ink/10",
    text: "text-carbon-ink",
    border: "border-carbon-ink/30",
    glow: "",
  },
};

const FILTER_TABS = ["All", "New", "Contacted", "Closed"] as const;

function formatProjectType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatTimeline(t: string): string {
  const map: Record<string, string> = {
    oneday: "1 Day",
    oneweek: "1 Week",
    twoweeks: "2 Weeks",
    onemonth: "1 Month",
  };
  return map[t] || t;
}

function formatBudget(b: string): string {
  const map: Record<string, string> = {
    starter: "< $5k",
    standard: "$5k – $15k",
    premium: "$15k+",
  };
  return map[b] || b;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

import { UserButton } from "@clerk/nextjs";

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (activeFilter !== "All") params.set("status", activeFilter);

      const res = await fetch(`/api/leads?${params.toString()}`);
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setIsLoading(false);
    }
  }, [search, activeFilter]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => fetchLeads(), 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleStatusToggle = async (lead: Lead) => {
    const newStatus = STATUS_CYCLE[lead.status];
    setUpdatingId(lead.id);

    try {
      const res = await fetch(`/api/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) =>
            l.id === lead.id ? { ...l, status: newStatus as Lead["status"] } : l
          )
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Compute stats from current data (before filter, so we show total counts)
  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "New").length,
    contacted: leads.filter((l) => l.status === "Contacted").length,
    closed: leads.filter((l) => l.status === "Closed").length,
  };

  return (
    <div className="min-h-screen bg-paper-cream text-carbon-ink font-inter selection:bg-deep-forest/20">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10 rounded border border-carbon-ink/15 hover:bg-carbon-ink hover:text-paper-cream text-carbon-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-space tracking-tight text-carbon-ink">
                Lead Dashboard
              </h1>
              <p className="text-carbon-ink/60 text-sm mt-1">
                Manage and track all contact form submissions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchLeads}
              className="flex items-center gap-2 px-4 h-10 rounded bg-carbon-ink text-paper-cream text-sm font-medium transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0F1713] active:translate-y-0 active:shadow-none"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <UserButton />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Leads",
              value: stats.total,
              icon: Users,
              color: "text-carbon-ink",
              bg: "bg-paper-cream",
              borderColor: "border-carbon-ink/15",
            },
            {
              label: "New",
              value: stats.new,
              icon: Sparkles,
              color: "text-deep-forest",
              bg: "bg-paper-cream",
              borderColor: "border-carbon-ink/15",
            },
            {
              label: "Contacted",
              value: stats.contacted,
              icon: MessageCircle,
              color: "text-heritage-gold",
              bg: "bg-paper-cream",
              borderColor: "border-carbon-ink/15",
            },
            {
              label: "Closed",
              value: stats.closed,
              icon: CheckCircle2,
              color: "text-carbon-ink/60",
              bg: "bg-paper-cream",
              borderColor: "border-carbon-ink/15",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${stat.bg} ${stat.borderColor} border rounded-lg p-5 transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0F1713]`}
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-[10px] font-medium text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
                  {stat.label}
                </span>
              </div>
              <p className={`text-4xl font-bold font-space ${stat.color} tabular-nums`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-carbon-ink/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full h-11 pl-11 pr-4 rounded-lg bg-paper-cream border border-carbon-ink/20 text-carbon-ink placeholder:text-carbon-ink/40 text-sm focus:outline-none focus:border-deep-forest focus:ring-1 focus:ring-deep-forest transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-white border border-carbon-ink/15">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 h-9 rounded text-xs font-jetbrains font-semibold transition-colors ${
                  activeFilter === tab
                    ? "text-paper-cream"
                    : "text-carbon-ink/60 hover:text-carbon-ink"
                }`}
              >
                {activeFilter === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-carbon-ink rounded border border-carbon-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Leads List */}
        <div className="rounded-lg border border-carbon-ink/15 bg-white overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_120px] gap-4 px-6 py-3 border-b border-carbon-ink/15 bg-paper-cream/50">
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
              Contact
            </span>
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
              Email
            </span>
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
              Service
            </span>
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
              Budget
            </span>
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest">
              Date
            </span>
            <span className="text-[10px] font-bold text-carbon-ink/50 uppercase font-jetbrains tracking-widest text-right">
              Status
            </span>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <RefreshCw className="w-8 h-8 text-carbon-ink/40 animate-spin" />
                <p className="text-carbon-ink/60 text-sm font-inter">Loading leads...</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && leads.length === 0 && (
            <div className="flex items-center justify-center py-20 bg-paper-cream">
              <div className="flex flex-col items-center gap-4 max-w-[300px] text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-white border border-carbon-ink/15 shadow-[4px_4px_0_0_#0F1713]">
                  <Inbox className="w-8 h-8 text-carbon-ink/40" />
                </div>
                <div>
                  <p className="text-carbon-ink font-bold font-space text-lg mb-1">No leads found</p>
                  <p className="text-carbon-ink/60 text-sm font-inter">
                    {search
                      ? "Try adjusting your search or filters"
                      : "Submissions from the contact form will appear here"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lead Rows */}
          {!isLoading && (
            <AnimatePresence>
              {leads.map((lead, index) => {
                const style = STATUS_STYLES[lead.status];
                const isExpanded = expandedId === lead.id;

                return (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.03 }}
                    className={`border-b border-carbon-ink/10 last:border-b-0 transition-colors bg-white hover:bg-paper-cream`}
                  >
                    {/* Main Row */}
                    <div
                      className="grid grid-cols-[1fr_auto] lg:grid-cols-[2fr_2fr_1.5fr_1fr_1fr_120px] gap-4 px-6 py-4 items-center cursor-pointer"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : lead.id)
                      }
                    >
                      {/* Contact */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex-shrink-0 w-9 h-9 rounded bg-deep-forest/10 border border-deep-forest/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-deep-forest font-space">
                            {lead.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-carbon-ink font-inter truncate">
                            {lead.name}
                          </p>
                          <p className="text-[11px] text-carbon-ink/60 font-inter lg:hidden truncate">
                            {lead.email}
                          </p>
                        </div>
                      </div>

                      {/* Email - desktop */}
                      <p className="hidden lg:block text-sm text-carbon-ink/70 font-inter truncate">
                        {lead.email}
                      </p>

                      {/* Service - desktop */}
                      <p className="hidden lg:block text-sm text-carbon-ink/70 font-inter">
                        {formatProjectType(lead.project_type)}
                      </p>

                      {/* Budget - desktop */}
                      <p className="hidden lg:block text-sm text-carbon-ink/90 font-medium font-inter">
                        {formatBudget(lead.budget)}
                      </p>

                      {/* Date - desktop */}
                      <p className="hidden lg:block text-xs text-carbon-ink/50 font-jetbrains">
                        {timeAgo(lead.created_at)}
                      </p>

                      {/* Status Badge + Expand */}
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusToggle(lead);
                          }}
                          disabled={updatingId === lead.id}
                          className={`inline-flex items-center justify-center min-w-[80px] gap-1.5 px-3 py-1.5 rounded text-[10px] font-jetbrains uppercase tracking-wide border transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#0F1713] active:translate-y-0 active:shadow-none ${style.bg} ${style.text} ${style.border} ${style.glow} disabled:opacity-50`}
                        >
                          {updatingId === lead.id ? (
                            <RefreshCw className="w-3 h-3 animate-spin" />
                          ) : null}
                          {lead.status}
                        </button>
                        <ChevronDown
                          className={`w-4 h-4 text-carbon-ink/40 transition-transform lg:hidden ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4 rounded-lg bg-paper-cream border border-carbon-ink/15">
                              <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest">
                                  <Mail className="w-3 h-3" /> Email
                                </span>
                                <span className="text-sm text-carbon-ink/80 font-inter break-all">
                                  {lead.email}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest">
                                  <Briefcase className="w-3 h-3" /> Service
                                </span>
                                <span className="text-sm text-carbon-ink/80 font-inter">
                                  {formatProjectType(lead.project_type)}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest">
                                  <Clock className="w-3 h-3" /> Timeline
                                </span>
                                <span className="text-sm text-carbon-ink/80 font-inter">
                                  {formatTimeline(lead.timeline)}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest">
                                  <Wallet className="w-3 h-3" /> Budget
                                </span>
                                <span className="text-sm text-carbon-ink/80 font-inter">
                                  {formatBudget(lead.budget)}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest">
                                  <Calendar className="w-3 h-3" /> Submitted
                                </span>
                                <span className="text-sm text-carbon-ink/80 font-inter">
                                  {new Date(lead.created_at).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* Notes */}
                            {lead.notes && (
                              <div className="mt-3 p-4 rounded-lg bg-paper-cream border border-carbon-ink/15">
                                <span className="text-[10px] font-bold text-carbon-ink/40 font-jetbrains uppercase tracking-widest block mb-2">
                                  Notes
                                </span>
                                <p className="text-sm text-carbon-ink/70 font-inter leading-relaxed">
                                  {lead.notes}
                                </p>
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 text-[10px] text-carbon-ink/40 font-jetbrains uppercase">
          <p>
            Showing {leads.length} lead{leads.length !== 1 ? "s" : ""}
          </p>
          <p>Click a status badge to cycle: New → Contacted → Closed</p>
        </div>
      </div>
    </div>
  );
}
