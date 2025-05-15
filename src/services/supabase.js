import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ablyeulmqdtzdaqhmxqi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFibHlldWxtcWR0emRhcWhteHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzk2MDMsImV4cCI6MjA2MjcxNTYwM30.7dA6kS_TtArzcuBfJGO9H4Erbk_iQqojRaSBLLIalkc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
