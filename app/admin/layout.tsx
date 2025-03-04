import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import '@/styles/admin.css'
import Sidebar from '@/components/admin/Sidebar'
import Header from '@/components/admin/Header'
import { db } from '@/database/drizzle'
import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'

const layout = async ({children}: {children: React.ReactNode}) => {

    const session = await auth()

    if (!session?.user?.id) redirect('/sign-in')

    const isAdmin = await db
      .select({isAdmin: users.role})
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1)
      .then((res) => res[0]?.isAdmin === 'ADMIN')

    if (!isAdmin) redirect('/')


  return (
    <main className="flex main-h-screen w-full flex-row">
        <Sidebar session={session} />

        <div className="admin-container">
            <Header session={session} />
            {children}
        </div>

    </main>
  )
}

export default layout