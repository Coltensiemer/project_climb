import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'


const DATABASE_SUPABASE_URL= process.env.DATABASE_SUPABASE_URL
const  DATABASE_SUPABASE_ANON_KEY = process.env.DATABASE_SUPABASE_ANON_KEY
const DATABASE_SUPABASE_LOCAL_URL = process.env.DATABASE_SUPABASE_LOCAL_URL

//@ts-expect-error
export const supabase = createClient(DATABASE_SUPABASE_URL, DATABASE_SUPABASE_ANON_KEY )
//@ts-expect-error
export const supabaseLocal = createClient(DATABASE_SUPABASE_LOCAL_URL, DATABASE_SUPABASE_ANON_KEY)