// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kzrjtxiuvuvazdnbxwrx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cmp0eGl1dnV2YXpkbmJ4d3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyODgyMDEsImV4cCI6MjA2MDg2NDIwMX0.wK3J_QlALpOwXzlFWKpgiD9Dlemc_P3wJM4ARXm_CoA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);