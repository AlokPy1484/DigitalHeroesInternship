import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lead type definition
export interface Lead {
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

// Lazy-initialized Supabase client.
// This avoids build-time errors when env vars aren't set yet.
let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error(
        "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
      );
    }

    _supabase = createClient(supabaseUrl, supabaseServiceKey);
  }
  return _supabase;
}
