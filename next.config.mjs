/** @type {import('next').NextConfig} */
const repoName = 'mcq-app';

const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : "",
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}` : "",
};

export default nextConfig;
