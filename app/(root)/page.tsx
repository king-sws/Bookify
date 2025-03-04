import { auth } from "@/auth";
import BookList from "@/components/BookList";
import Bookoverviews from "@/components/Bookoverviews";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  createdAt: Date | null;
}

export default async function Home() {
  const session = await auth();

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];


  return (
    <>
      <Bookoverviews {...latestBooks[0]} userId={session?.user?.id as string } />

      <BookList 
        title="Popular Books" 
        books={latestBooks.slice(1)} 
        containerClassName="mt-28" 
      />
    </>
  );
}
