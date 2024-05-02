/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ['img.phimapi.com'],
      formats: ['image/webp'],
      minimumCacheTTL: 60
   },
   swcMinify: false
}

export default nextConfig
