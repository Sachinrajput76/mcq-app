/** @type {import('next').NextConfig} */
const repoName = 'mcq-app';

const nextConfig = {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
