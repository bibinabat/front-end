/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "backend-bibinabat.iran.liara.run",
                port: "",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
