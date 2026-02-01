import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./constants";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 11);
};
