
/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["zh-TW", "en-US"],
        defaultLocale: "zh-TW"
    },
    images: {
        minimumCacheTTL: 60 * 60 * 24
    }
};

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            disable: process.env.NODE_ENV !== "production",
            dest: "public"
        }
    }]
], nextConfig);
