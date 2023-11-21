import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vqjvqrgzyhtddyesmzms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxanZxcmd6eWh0ZGR5ZXNtem1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNDM0MzQsImV4cCI6MjAxNTYxOTQzNH0.tWN-ckrNxjWrvk2QHlh3YJKG4b9PGfXqYJSfPWnVvKU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
