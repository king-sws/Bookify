'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import book from '@/actions/book'

interface Props {
    userId: string
    bookId: string
    borrorwingEligility: {
        isEligible: boolean
        message: string
    }
}
const BorrowBook = ({userId, bookId, borrorwingEligility: { isEligible, message }}: Props) => {
    const router = useRouter();
    const [borrowing, setBorrowing] = useState(false);
  
    const handleBorrowBook = async () => {
      if (!isEligible) {
        toast("Error",{
          description: message,
        });
      }
  
      setBorrowing(true);
  
      try {
        const result = await book({ bookId, userId });
  
        if (result.success) {
          toast("Success",{
            description: "Book borrowed successfully",
          });
  
          router.push("/my-profile");
        } else {
          toast("Error",{
            description: result.error,

          });
        }
      } catch (error) {
        toast("Error",{

          description: "An error occurred while borrowing the book",
        });
      } finally {
        setBorrowing(false);
      }
    };
  return (
    <Button className="book-overview_btn" onClick={handleBorrowBook} disabled={borrowing} >
          <Image src="/icons/book.svg" alt="download" width={22} height={22} />
          <p className="font-bebas-neue text-xl text-dark-100">
              {borrowing ? "Borrowing ..." : "Borrow Book"}
          </p>
        </Button>
  )
}

export default BorrowBook