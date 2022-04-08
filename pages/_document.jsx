
import Document, { Html, Head, Main, NextScript } from "next/document";

import head from "../assets/js/head/index.js";

import theme from "../assets/json/style/theme.json";

export default class App extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        
        return {...initialProps};
    };

    render(){
        return (
            <Html dir="ltr" prefix="og: http://ogp.me/ns#">
                <Head>
                    <meta name="theme-color" content={theme["--black"]} />
                    <meta property="fb:app_id" content="3115592912095632" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" type="image/png" size="48x48" href="/favicon.png" />
                    <link rel="icon" type="image/png" size="192x192" href="/icon/icon@192.png" />
                    <link rel="apple-touch-icon" type="image/png" size="512x512" href="/icon/icon@512.png" />
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@400;700&display=optional" />
                    <script type="text/javascript" dangerouslySetInnerHTML={head.gtm}></script>
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};
