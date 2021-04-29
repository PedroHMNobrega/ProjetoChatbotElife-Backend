module.exports = {
    app: {
        port : process.env.PORT,
        node_env: process.env.NODE_ENV
    },
    db : {
        production: process.env.DB_URL_PROD,
        develop: process.env.DB_URL_DEV,
    },
}
