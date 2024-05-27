import { createClient } from "@supabase/supabase-js";

const PASSWORD = "MovieTalkPass_";
const API_URL = "https://isjkeggvqilpznejbtog.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzamtlZ2d2cWlscHpuZWpidG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjc1NjYsImV4cCI6MjAyNTY0MzU2Nn0._HHFVm9MnZqfs8oxUwFQskl33rYfOpk54qPCazF7I2Q";

export const supabase = createClient(API_URL, API_KEY);
