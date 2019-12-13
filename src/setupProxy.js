const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        '/api',
        proxy({
            target:'http://m.elong.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        })
    )
}
