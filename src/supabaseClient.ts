import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yswoxguwrevufbuviwbl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzd294Z3V3cmV2dWZidXZpd2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2ODkxMzksImV4cCI6MjA3NDI2NTEzOX0.1denxG9V7xCTW8B35B36oYvqybLA0hw9O7tVptrc8rc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
