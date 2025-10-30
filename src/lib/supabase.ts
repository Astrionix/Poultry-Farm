import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cachedPublicClient: SupabaseClient | null = null;
let cachedServiceClient: SupabaseClient | null = null;

function ensureEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getSupabaseClient(): SupabaseClient {
  if (!cachedPublicClient) {
    cachedPublicClient = createClient(
      ensureEnv(SUPABASE_URL, "SUPABASE_URL"),
      ensureEnv(SUPABASE_ANON_KEY, "SUPABASE_ANON_KEY"),
    );
  }
  return cachedPublicClient;
}

export function getServiceSupabaseClient(): SupabaseClient {
  if (!cachedServiceClient) {
    cachedServiceClient = createClient(
      ensureEnv(SUPABASE_URL, "SUPABASE_URL"),
      ensureEnv(SUPABASE_SERVICE_ROLE_KEY, "SUPABASE_SERVICE_ROLE_KEY"),
    );
  }
  return cachedServiceClient;
}
