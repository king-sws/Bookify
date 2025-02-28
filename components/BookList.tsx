import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import BookCard from './BookCard'

interface BookListProps {
    title: string
    books: any[]
    containerClassName?: string
}

const BookList = ({title, books, containerClassName }: BookListProps) => {
  return (
    <section className={cn("book-list", containerClassName)}>
        <h2 className='font-bebas-neue text-4xl text-light-100' >{title}</h2>

        <ul  className='book-list'>
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </ul>
    </section>
  )
}

export default BookList