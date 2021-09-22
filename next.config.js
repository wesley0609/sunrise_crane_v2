
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withPWA = require("next-pwa");

const nextConfig = {
    // https://nextjs.org/docs/basic-features/image-optimization#disable-static-imports
    images: {
        disableStaticImages: true
    }
};

module.exports = withPlugins([
    [withOptimizedImages, {
        optimizeImagesInDev: true
    }],
    [withFonts, {
        // use default setting
    }],
    [withPWA, {
        pwa: {
            disable: process.env.NODE_ENV !== "production",
            dest: "public",
            sw: "service-worker.js"
        }
    }]
], nextConfig);
