import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rsxakrmmfqdztmohztvr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeGFrcm1tZnFkenRtb2h6dHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MTY0NzcsImV4cCI6MjAxMzk5MjQ3N30.WGBiIZs47gKDNg6HNtDP3fniWScxdvo28DWIZYaSIG8";
export const supabase = createClient(supabaseUrl, supabaseKey);
