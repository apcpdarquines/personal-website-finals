import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://atxbepqzqlqszbwtcuwk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eGJlcHF6cWxxc3pid3RjdXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNDU5OTMsImV4cCI6MjA1NjcyMTk5M30.aVxr39IHJT_vdNYl8pq-lZ8itEQWggA1ls0ZkpetBfg')