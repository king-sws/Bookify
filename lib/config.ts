export const config = {
    env: {
        imagekit: {
            publicket: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
            imagekitUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL,
            privatekey: process.env.IMAGEKIT_PRIVATE_KEY
        },
        databaseUrl: process.env.DATABASE_URL
    }
}
