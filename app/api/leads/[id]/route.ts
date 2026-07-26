import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// PATCH /api/leads/:id — Update lead status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate status value
    const validStatuses = ["New", "Contacted", "Closed"];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status. Must be one of: New, Contacted, Closed" },
        { status: 400 }
      );
    }

    const { data, error } = await getSupabase()
      .from("leads")
      .update({ status })
      .eq("id", Number(id))
      .select()
      .single();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json(
        { error: "Failed to update lead" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ lead: data });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
