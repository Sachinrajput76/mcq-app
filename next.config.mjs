{ import('next').NextConfig }
let nextConfig = NextConfig();
nextConfig = {
    output: 'export',
    basePath: '/mcq-app',
    assetPrefix: '/mcq-app/',
};

export default nextConfig;
