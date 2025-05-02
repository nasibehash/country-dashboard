import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['flagcdn.com'],
    },
    reactStrictMode: true,
    swcMinify: true,
};
export default nextConfig;

