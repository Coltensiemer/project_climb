const { createClient } = require('@supabase/supabase-js')


 export const supabase = createClient({
  apiKey: 'cz5uhoH9maY0ARI6',
  url: process.env.DATABASE_URL
})

