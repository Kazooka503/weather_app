const { hostname } = require("os");

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "openweathermap.org",
            }
        ]
    }
}