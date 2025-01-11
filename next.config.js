module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Autorise tous les domaines
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
