const PROXY_CONFIG = [
    {
        context:[
            '/api',
        ],
        target: "https://localhost:7180/api",
        secure: false,
        changeOrigin: true,
        pathRewrite:{
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG;