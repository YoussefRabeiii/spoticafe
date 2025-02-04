/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				// port: '',
				// pathname: '/image/upload/**',
			},
			{
				protocol: "https",
				hostname: "static.independent.co.uk",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
	},
};

module.exports = nextConfig;
