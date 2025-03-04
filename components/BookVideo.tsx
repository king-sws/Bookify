"use client"
import { IKVideo, ImageKitProvider } from 'imagekitio-next'
import React from 'react'

const BookVideo = ({videoUrl}: {videoUrl : string}) => {
  return (
    <ImageKitProvider 
        publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!}
        urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
    >
        <IKVideo path={videoUrl} controls={true} className="w-full rounded-xl" />
    </ImageKitProvider>
  )
}

export default BookVideo