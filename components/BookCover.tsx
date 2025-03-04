'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import BookCoverSvg from './BookCoverSvg'
import { IKImage } from 'imagekitio-next'

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide"

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
  };

interface props {
    coverUrl: string,
    className?: string,
    coverColor: string
    variant?: BookCoverVariant
}

const BookCover = ({   
    className,
    variant = "regular",
    coverColor = "#012B48",
    coverUrl = "https://placehold.co/400x600.png"} : props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg covercolor={coverColor} />

      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <IKImage
          path={coverUrl}
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
    </div>
  )
}

export default BookCover