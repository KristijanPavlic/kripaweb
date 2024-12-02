/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rdbh1o39u7awif7j.public.blob.vercel-storage.com',
            },
        ],
    },
};

export default nextConfig;
