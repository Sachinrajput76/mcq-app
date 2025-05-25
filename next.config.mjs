import next from 'next';
const { NextConfig } = next;
let nextConfig = NextConfig;
nextConfig = {
    output: 'export',
    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
