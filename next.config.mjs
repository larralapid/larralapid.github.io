const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath — you're at root
  trailingSlash: true,
};

export default nextConfig;
