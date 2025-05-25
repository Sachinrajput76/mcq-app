/** @type {import('next').NextConfig} */
const repoName = 'mcqs-app';

const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
