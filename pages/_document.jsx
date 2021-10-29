
import Document, { Html, Head, Main, NextScript } from "next/document";

import head from "../assets/js/head/index.js";
import body from "../assets/js/body/index.js";

import pkg from "../package.json";
import theme from "../assets/json/style/theme.json";

export default class App extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        
        return {...initialProps};
    };

    render(){
        return (
            <Html dir="ltr" lang="zh-Hant-TW" prefix="og: http://ogp.me/ns#">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                    <meta name="author" content={pkg.author} />
                    <meta name="keywords" content={pkg.keywords.join(",")} />
                    <meta name="theme-color" content={theme["--black"]} />
                    <meta property="fb:app_id" content="3115592912095632" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content={pkg.siteName} />
                    <meta property="og:image" content={`${pkg.siteUrl}/share.jpg`} />
                    <meta property="og:image:width" content="1080" />
                    <meta property="og:image:height" content="566" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" type="image/png" size="48x48" href="/favicon.png" />
                    <link rel="icon" type="image/png" size="192x192" href="/icon/icon@192.png" />
                    <link rel="apple-touch-icon" type="image/png" size="512x512" href="/icon/icon@512.png" />
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@400;700&display=optional" />
                    <script type="text/javascript" dangerouslySetInnerHTML={head.gtm}></script>
                    <script type="text/javascript" dangerouslySetInnerHTML={head.alexa}></script>
                </Head>
                
                <body>
                    <noscript dangerouslySetInnerHTML={body.gtm}></noscript>
                    <noscript dangerouslySetInnerHTML={body.alexa}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};
