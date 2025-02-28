import { auth } from "@/auth";
import Header from "@/components/Header";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { after } from "next/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  if (!session) redirect('/sign-in')

  after(async () => {
    if(!session?.user?.id) return
    const user = await db
    .select()
    .from(users)
    .where(eq(users.id, session?.user?.id))
    .limit(1)

    if(user[0].lastActiveDate === new Date().toISOString().slice(0, 10) ) return

    await db.update(users).set({ lastActiveDate: new Date().toISOString().slice(0, 10) }).where(eq(users.id, session?.user?.id))
    
  })

  return (
    <main className="root-container">
        <div className="mx-auth max-w-7xl">
            <Header session={session} />
            <div className="mt-20 pb-20">{children}</div>
        </div>
    </main>
  );
}
