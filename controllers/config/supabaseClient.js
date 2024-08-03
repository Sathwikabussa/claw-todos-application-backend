const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://iqnqhlmfshwervetflai.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbnFobG1mc2h3ZXJ2ZXRmbGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTM5NTIsImV4cCI6MjAzODE4OTk1Mn0.DSEVJ8lDuuzHWBusl0-cQrM28C3InFTaUjD7h-Ek-YQ"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
