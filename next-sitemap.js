
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
    }
};
