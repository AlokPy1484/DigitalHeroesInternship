"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Check, ShoppingBag, Layout, Wrench, Smartphone, Activity, Timer, Film, Calendar, Wallet, Leaf, Rocket, Gem, ClipboardList, User, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import webDesignAnimation from "../../public/Web_Design.json";

export default function ContactCard() {
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState("shopify_development");
    const [timeline, setTimeline] = useState("oneweek");
    const [budget, setBudget] = useState("standard");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    project_type: projectType,
                    timeline,
                    budget,
                    notes,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Something went wrong");
            }

            setIsSubmitting(false);
            setIsSuccess(true);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000);
        } catch (err: unknown) {
            setIsSubmitting(false);
            setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
            setTimeout(() => setErrorMsg(""), 5000);
        }
    };

    const getProjectTypeLabel = (type: string) => {
        switch (type) {
            case "shopify_development": return "Shopify Development";
            case "landing_page_design": return "Landing Page Design";
            case "website_maintenance": return "Website Maintenance";
            default: return "Selected Service";
        }
    };

    const getTimelineLabel = (time: string) => {
        switch (time) {
            case "oneday": return "One Day";
            case "oneweek": return "One Week";
            case "twoweeks": return "Two Weeks";
            case "onemonth": return "One Month";
            default: return "Target Timeline";
        }
    };

    if (isSuccess) {
        return (
            <>
                <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl items-center justify-center p-8 text-center"
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-50"
                            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                            <CheckCircle className="h-10 w-10 text-green-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Email sent successfully</h2>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-[320px] mx-auto mt-2">
                                We have emailed you the quotation for the project.
                            </p>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex items-center gap-3 rounded-lg border border-green-500/30 bg-[#0d1117]/95 px-5 py-4 shadow-[0_10px_40px_rgba(34,197,94,0.3)] backdrop-blur-md"
                        >
                            <CheckCircle className="h-6 w-6 text-green-500" />
                            <p className="text-sm font-semibold tracking-wide text-white">Email Sent Successfully!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    }

    if (step === 1) {
        return (
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-neutral-100/10 border-2 "
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                }}>

                {/* Header Section */}
                <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 1 of 5</span>
                            <span className="text-[10px] font-bold text-neutral-100">20% Completed</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#9DD3A7] rounded-full transition-all duration-500 ease-out" style={{ width: "20%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative z-10 flex-1 px-6 flex flex-col justify-center items-center text-center">
                    <div className="w-full aspect-video rounded-lg mb-4 overflow-hidden bg-[#1a0f0f] border border-white/5 relative group flex items-center justify-center">
                        <Lottie animationData={webDesignAnimation} loop={true} className="w-full h-full" />
                    </div>
                    <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-2">
                        Find out how much your next website will cost
                    </h1>
                    <p className="text-neutral-400 text-xs md:text-sm font-normal leading-relaxed max-w-[90%] md:max-w-[85%]">
                        Get an instant, professional estimate for your website development project in just a few clicks.
                    </p>
                </div>

                {/* Action Section */}
                <div className="relative z-10 p-6 mt-auto flex flex-col items-center gap-2">
                    <button
                        onClick={() => setStep(2)}
                        className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-[#234F3A] text-white text-base font-bold transition-all hover:bg-[#234F3A]/80 cursor-pointer transition-colors duration-300">
                        <span className="relative z-10 truncate ">Start Now</span>
                        <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-neutral-400 text-[10px] font-medium uppercase tracking-widest opacity-60">Takes less than 2 minutes</p>
                </div>
            </div>
        );
    }

    if (step === 2) {
        return (
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                {/* Background Glow Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                </div>

                {/* Header Section */}
                <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 2 of 4</span>
                            <span className="text-[10px] font-bold text-neutral-400">50% Completed</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#9DD3A7] rounded-full transition-all duration-500 ease-out" style={{ width: "50%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                    {/* Page Heading */}
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Select Service Type</h1>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            Choose the service that best fits your project needs.
                        </p>
                    </div>

                    {/* Options List */}
                    <div className="flex flex-col gap-3 pb-4">
                        {/* Option 1: Shopify Development */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "shopify_development" ? "border-neutral-500 bg-neutral-700/30" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={projectType === "shopify_development"} onChange={() => setProjectType("shopify_development")} className="peer sr-only" name="project_type" type="radio" value="shopify_development" />
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "shopify_development" ? "bg-neutral-600 text-white" : "bg-white/10 text-neutral-400 group-hover:bg-neutral-600 group-hover:text-white"}`}>
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col text-left flex-1">
                                <span className="text-sm font-bold text-white">Shopify Development</span>
                                <span className="text-[11px] text-neutral-400 mt-0.5 leading-tight">Custom Shopify store setup, themes, and integrations.</span>
                            </div>
                            {projectType === "shopify_development" ? (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-neutral-400 bg-neutral-500 flex items-center justify-center">
                                    <Check className="text-white w-3 h-3" strokeWidth={3} />
                                </div>
                            ) : (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                            )}
                        </label>

                        {/* Option 2: Landing Page Design */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "landing_page_design" ? "border-neutral-500 bg-neutral-700/30" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={projectType === "landing_page_design"} onChange={() => setProjectType("landing_page_design")} className="peer sr-only" name="project_type" type="radio" value="landing_page_design" />
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "landing_page_design" ? "bg-neutral-600 text-white" : "bg-white/10 text-neutral-400 group-hover:bg-neutral-600 group-hover:text-white"}`}>
                                <Layout className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col text-left flex-1">
                                <span className="text-sm font-bold text-white">Landing Page Design</span>
                                <span className="text-[11px] text-neutral-400 mt-0.5 leading-tight">High-converting landing pages tailored to your brand.</span>
                            </div>
                            {projectType === "landing_page_design" ? (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-neutral-400 bg-neutral-500 flex items-center justify-center">
                                    <Check className="text-white w-3 h-3" strokeWidth={3} />
                                </div>
                            ) : (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                            )}
                        </label>

                        {/* Option 3: Website Maintenance */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "website_maintenance" ? "border-neutral-500 bg-neutral-700/30" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={projectType === "website_maintenance"} onChange={() => setProjectType("website_maintenance")} className="peer sr-only" name="project_type" type="radio" value="website_maintenance" />
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "website_maintenance" ? "bg-neutral-600 text-white" : "bg-white/10 text-neutral-400 group-hover:bg-neutral-600 group-hover:text-white"}`}>
                                <Wrench className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col text-left flex-1">
                                <span className="text-sm font-bold text-white">Website Maintenance</span>
                                <span className="text-[11px] text-neutral-400 mt-0.5 leading-tight">Ongoing updates, fixes, and performance optimization.</span>
                            </div>
                            {projectType === "website_maintenance" ? (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-neutral-400 bg-neutral-500 flex items-center justify-center">
                                    <Check className="text-white w-3 h-3" strokeWidth={3} />
                                </div>
                            ) : (
                                <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                            )}
                        </label>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(1)} className="flex items-center justify-center h-10 px-4 rounded-lg text-neutral-400 hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                            Back
                        </button>
                        <button onClick={() => setStep(4)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#3F6B54] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(63,107,84,0.3)] hover:shadow-[0_0_25px_rgba(63,107,84,0.5)]">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }


    if (step === 4) {
        return (
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                {/* Background Glow Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                </div>

                {/* Header Section */}
                <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 3 of 4</span>
                            <span className="text-[10px] font-bold text-neutral-400">75% Completed</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#9DD3A7] rounded-full transition-all duration-500 ease-out" style={{ width: "75%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar space-y-6">
                    {/* Page Heading */}
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Timeline & Budget</h1>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            Help us understand your constraints so we can build the perfect plan for your project.
                        </p>
                    </div>

                    {/* Timeline Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Calendar className="text-[#3F6B54] w-4 h-4" />
                            Target Timeline
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl border border-white/10 bg-black/20">
                            {/* One Day */}
                            <label className="relative cursor-pointer group">
                                <input checked={timeline === "oneday"} onChange={() => setTimeline("oneday")} className="peer sr-only" name="timeline" type="radio" value="oneday" />
                                <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "oneday" ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                                    One Day
                                </div>
                                <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-neutral-400/50"></div>
                            </label>
                            {/* One Week */}
                            <label className="relative cursor-pointer group">
                                <input checked={timeline === "oneweek"} onChange={() => setTimeline("oneweek")} className="peer sr-only" name="timeline" type="radio" value="oneweek" />
                                <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "oneweek" ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                                    One Week
                                </div>
                                <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-neutral-400/50"></div>
                            </label>
                            {/* Two Weeks */}
                            <label className="relative cursor-pointer group">
                                <input checked={timeline === "twoweeks"} onChange={() => setTimeline("twoweeks")} className="peer sr-only" name="timeline" type="radio" value="twoweeks" />
                                <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "twoweeks" ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                                    2 Weeks
                                </div>
                                <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-neutral-400/50"></div>
                            </label>
                            {/* One Month */}
                            <label className="relative cursor-pointer group">
                                <input checked={timeline === "onemonth"} onChange={() => setTimeline("onemonth")} className="peer sr-only" name="timeline" type="radio" value="onemonth" />
                                <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "onemonth" ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                                    1 Month
                                </div>
                                <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-neutral-400/50"></div>
                            </label>
                        </div>
                    </div>

                    {/* Budget Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Wallet className="text-[#3F6B54] w-4 h-4" />
                            Estimated Budget
                        </h3>
                        <div className="flex flex-col gap-2">
                            {/* Starter */}
                            <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "starter" ? "border-emerald-500 bg-emerald-500/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                                <input checked={budget === "starter"} onChange={() => setBudget("starter")} className="peer sr-only" name="budget" type="radio" value="starter" />
                                <div className="flex items-center gap-4 w-full">
                                    <div className={`rounded-lg p-2 transition-colors ${budget === "starter" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-neutral-400"}`}>
                                        <Leaf className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-bold transition-colors ${budget === "starter" ? "text-emerald-400" : "text-white group-hover:text-emerald-400"}`}>Starter</p>
                                        <p className="text-[11px] text-neutral-400 leading-tight">&lt; $5k</p>
                                    </div>
                                    <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "starter" ? "border-emerald-500 bg-emerald-500" : "border-white/20"}`}>
                                        {budget === "starter" && <div className="size-2 rounded-full bg-white"></div>}
                                    </div>
                                </div>
                            </label>

                            {/* Standard */}
                            <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "standard" ? "border-neutral-500 bg-neutral-700/30" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                                <input checked={budget === "standard"} onChange={() => setBudget("standard")} className="peer sr-only" name="budget" type="radio" value="standard" />
                                <div className="flex items-center gap-4 w-full">
                                    <div className={`rounded-lg p-2 transition-colors ${budget === "standard" ? "bg-neutral-600/30 text-neutral-300" : "bg-white/5 text-neutral-400"}`}>
                                        <Rocket className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-bold transition-colors ${budget === "standard" ? "text-neutral-200" : "text-white group-hover:text-neutral-300"}`}>Standard</p>
                                        <p className="text-[11px] text-neutral-400 leading-tight">$5k - $15k</p>
                                    </div>
                                    <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "standard" ? "border-neutral-400 bg-neutral-500" : "border-white/20"}`}>
                                        {budget === "standard" && <div className="size-2 rounded-full bg-white"></div>}
                                    </div>
                                </div>
                            </label>

                            {/* Premium */}
                            <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "premium" ? "border-purple-500 bg-purple-500/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                                <input checked={budget === "premium"} onChange={() => setBudget("premium")} className="peer sr-only" name="budget" type="radio" value="premium" />
                                <div className="flex items-center gap-4 w-full">
                                    <div className={`rounded-lg p-2 transition-colors ${budget === "premium" ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-neutral-400"}`}>
                                        <Gem className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-bold transition-colors ${budget === "premium" ? "text-purple-400" : "text-white group-hover:text-purple-400"}`}>Premium</p>
                                        <p className="text-[11px] text-neutral-400 leading-tight">$15k+</p>
                                    </div>
                                    <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "premium" ? "border-purple-500 bg-purple-500" : "border-white/20"}`}>
                                        {budget === "premium" && <div className="size-2 rounded-full bg-white"></div>}
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(2)} className="flex items-center justify-center h-10 px-4 rounded-lg text-neutral-400 hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                            Back
                        </button>
                        <button onClick={() => setStep(5)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#3F6B54] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(63,107,84,0.3)] hover:shadow-[0_0_25px_rgba(63,107,84,0.5)]">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)" }}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 4 of 4</span>
                        <span className="text-[10px] font-bold text-[#3F6B54]">100% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#3F6B54] rounded-full transition-all duration-500 ease-out" style={{ width: "100%" }}></div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                <div className="flex flex-col gap-6">
                    {/* Page Heading */}
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Final Step: Your Details</h1>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            Where should we send your custom estimate?
                        </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <ClipboardList className="text-[#3F6B54] w-5 h-5" />
                            <h3 className="text-xs font-bold text-white uppercase tracking-wide">Estimate Summary</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Service</span>
                                <span className="font-bold text-white">{getProjectTypeLabel(projectType)}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-2 sm:pt-0">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Timeline</span>
                                <span className="font-bold text-white">{getTimelineLabel(timeline)}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-2 sm:pt-0">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Budget</span>
                                <span className="font-bold text-white capitalize">{budget}</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="flex flex-col gap-4">
                        {/* Full Name */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Full Name</span>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#3F6B54] focus:border-[#3F6B54] h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all"
                                    placeholder="Jane Doe"
                                    type="text"
                                />
                            </div>
                        </label>
                        {/* Email */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Business Email</span>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#3F6B54] focus:border-[#3F6B54] h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all"
                                    placeholder="jane@company.com"
                                    type="email"
                                />
                            </div>
                        </label>
                        {/* Additional Notes */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Anything else we should know?</span>
                            <textarea
                                value={notes} onChange={(e) => setNotes(e.target.value)}
                                className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#3F6B54] focus:border-[#3F6B54] min-h-[100px] p-3 text-sm placeholder:text-white/20 resize-none transition-all custom-scrollbar"
                                placeholder="Tell us a bit more about your project goals or specific style references..."
                            ></textarea>
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                {errorMsg && (
                    <p className="text-red-400 text-xs text-center mb-3 font-medium">{errorMsg}</p>
                )}
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setStep(4)} className="flex items-center justify-center h-10 px-4 rounded-lg text-neutral-400 hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                        Back
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex min-w-[160px] items-center justify-center h-10 px-4 rounded-lg bg-[#3F6B54] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(63,107,84,0.3)] hover:shadow-[0_0_25px_rgba(63,107,84,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                Sending...
                                <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                            </>
                        ) : (
                            <>
                                Get Estimate
                                <Send className="ml-2 w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
