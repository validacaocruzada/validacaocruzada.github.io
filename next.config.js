/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    // Inlined at build time so server HTML and the first client render agree.
    BUILD_YEAR: String(new Date().getFullYear()),
  },
}

module.exports = nextConfig;
