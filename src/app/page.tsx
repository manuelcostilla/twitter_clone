import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: Publicaciones } = await supabase.from('Publicaciones').select()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Buenas noches america
      <pre>
        {
        JSON.stringify(Publicaciones, null, 2)
        }
      </pre>
    </main>
  )
}
