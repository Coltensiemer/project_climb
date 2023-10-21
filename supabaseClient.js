import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'


// const DATABASE_SUPABASE_URL= process.env.DATABASE_SUPABASE_URL
// const DATABASE_SUPABASE_ANON_KEY = process.env.DATABASE_SUPABASE_ANON_KEY
// const DATABASE_URL = process.env.DATABASE_URL

const DATABASE_SUPABASE_URL='https://zaedmhdsfypksviqybsm.supabase.co' 
const DATABASE_SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZWRtaGRzZnlwa3N2aXF5YnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Nzg5MDEsImV4cCI6MjAxMDA1NDkwMX0.p_vcRgkhMjxR5F_00YW_MZ13PoCvTdJywAZ2nySAzTU'

export const supabaseclient = createClient(DATABASE_SUPABASE_URL, DATABASE_SUPABASE_ANON_KEY)

