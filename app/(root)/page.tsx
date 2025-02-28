import BookList from "@/components/BookList";
import Bookoverviews from "@/components/Bookoverviews";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <Bookoverviews {...sampleBooks[0]} />

      <BookList title="Popular Books" books={sampleBooks} containerClassName="mt-28" />
    </>
  );
}
