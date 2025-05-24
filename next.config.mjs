/** @type {import('next').NextConfig} */
const repoName = 'mcq-app';

const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    basePath: process.env.NODE_ENV === 'production' ? '/mcq-app' : '',
};

export default nextConfig;
