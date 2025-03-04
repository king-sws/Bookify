import { createHmac, randomBytes } from 'crypto';

interface ImageKitAuthParams {
  token: string;
  signature: string;
  expire: number;
  publicKey: string;
}

export function getImageKitAuthParams(): ImageKitAuthParams {
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  
  if (!publicKey || !privateKey) {
    throw new Error('ImageKit credentials are not properly configured');
  }

  // Generate random token (32-character hex string)
  const token = randomBytes(16).toString('hex');
  // Expiration timestamp (30 minutes from now)
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;

  // Compute signature using token + expire
  const signature = createHmac('sha1', privateKey)
    .update(token + expire.toString())
    .digest('hex');

  return {
    token,
    signature,
    expire,
    publicKey
  };
}