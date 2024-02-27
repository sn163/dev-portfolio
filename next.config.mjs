/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
