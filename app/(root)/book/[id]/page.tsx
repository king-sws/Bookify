import { auth } from '@/auth'
import Bookoverviews from '@/components/Bookoverviews'
import BookVideo from '@/components/BookVideo'
import { db } from '@/database/drizzle'
import { books } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = params
  const session = await auth()
  const userId = session?.user?.id || ''
  
  // Fetch book data
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1)
    
  // Use Next.js's notFound() instead of redirect for missing resources
  if (!bookDetails) {
    return notFound()
  }
  
  // Split the summary paragraphs once and store in a variable
  const summaryParagraphs = bookDetails.summary.split('\n')
  
  return (
    <>
      <Bookoverviews {...bookDetails} userId={userId} />
      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>
            <Suspense fallback={<div>Loading video...</div>}>
              <BookVideo videoUrl={bookDetails.videoUrl} />
            </Suspense>
          </section>
          
          <section className="mt-5 space-y-5 text-xl text-light-100">
            {summaryParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}