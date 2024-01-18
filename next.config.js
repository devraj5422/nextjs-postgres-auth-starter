/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "fastly.picsum.photos",
      ],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
      return config;
    },
  };
  
  module.exports = nextConfig;