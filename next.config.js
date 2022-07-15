
/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["zh-TW", "en-US"],
        defaultLocale: "zh-TW"
    }
};

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            disable: process.env.NODE_ENV !== "production",
            dest: "public",
            sw: "service-worker.js"
        }
    }]
], nextConfig);
