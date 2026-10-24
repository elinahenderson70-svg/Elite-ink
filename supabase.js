// Elite Ink — Supabase connection
// Replace the two placeholders with your actual project details.

const SUPABASE_URL = "https://nywvzauhxzegbwwipdqi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Wech5BynoPAXAl90h0XjXw_dudU5jpC";

const supabaseClient = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_PUBLISHABLE_KEY
);