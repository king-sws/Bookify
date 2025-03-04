export const config = {
    env: {
      imagekit: {
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '',
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY || ''
      },
      databaseUrl: process.env.DATABASE_URL || '',
      prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT || ''
    }
  }