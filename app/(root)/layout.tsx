import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  if (!session) redirect('/sign-in')

  return (
    <main className="root-container">
        <div className="mx-auth max-w-7xl">
            <Header session={session} />
            <div className="mt-20 pb-20">{children}</div>
        </div>
    </main>
  );
}
