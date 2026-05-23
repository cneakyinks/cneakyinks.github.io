/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out for GitHub Pages.
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
