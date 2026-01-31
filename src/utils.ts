import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./constants";

export const supabase = createClient(supabaseUrl, supabaseKey);
