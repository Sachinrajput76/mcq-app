import { NextConfig } from "next";

const NextConfig = {
    /* config options here */
    output: 'export',
    distDir: 'out',
    basePath: process.env.NODE_ENV === 'production' ? '/mcq-app' : '',
    assetPrefix: '',
};

export default NextConfig;