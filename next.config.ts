import withBundleAnalyzer from "@next/bundle-analyzer";
import dotenv from "dotenv";
import { NextConfig } from "next";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.pdf": {
          loaders: [
            {
              loader: "file", // Use the "file" loader to handle static files
              options: {
                filename: "static/media/[name].[hash][ext]", // Specify the output structure
              },
            },
          ],
        },
      },
    },
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
