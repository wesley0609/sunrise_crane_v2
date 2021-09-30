
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class App extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        
        return {...initialProps};
    };

    render(){
        return (
            <Html dir="ltr" lang="zh-Hant-TW" prefix="og: http://ogp.me/ns#">
                <Head>
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@400;700&display=optional" />
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};
