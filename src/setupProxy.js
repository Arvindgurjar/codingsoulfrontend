import {createProxyMiddleware} from "http-proxy-middleware"

export default function(app){
    app.use(
        '/*',
        createProxyMiddleware({
            target:"https://codingsoulbackend.onrender.com",
            changeOrigin: true,
        })
    );
};