
const pkg = require("./package.json");

module.exports = {
    siteUrl: pkg.siteUrl,
    changefreq: "monthly",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/"
            }
        ]
    },
    alternateRefs: [
        {
            href: pkg.siteUrl,
            hreflang: "zh-TW"
        },
        {
            href: `${pkg.siteUrl}/en-US`,
            hreflang: "en-US"
        }
    ]
};
