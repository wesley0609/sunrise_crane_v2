
const App = () => {
    return (
        <>
            <style jsx global>
                {`
                    :root{
                        --primary: #ff6700;
                        --primary-light: #ff9a55;
                        --black: #121212;
                        --white: #ffffff;
                        --gray: #767676;
                        --text-background-gray: #f9f9fa;
                        --background-gray: #f7f7f7;
                        --content-font-size: 16px;

                        @media screen and (max-width: 411px){
                            --content-font-size: 15px;
                        }
                    }

                    *{
                        box-sizing: border-box;
                    }

                    html{
                        font-family: "Noto Sans TC", Arial, sans-serif;
                    }

                    body{
                        color: var(--black);
                        letter-spacing: .6px;
                        -webkit-text-size-adjust: none;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        font-size: var(--content-font-size);
                    }

                    button{
                        background-color: transparent;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        padding: 0;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    }

                    h1, h2, h3, h4, h5, h6, p{
                        margin: 0;
                        padding: 0;
                        font-size: var(--content-font-size);
                        font-weight: normal;
                        font-style: normal;
                    }

                    a{
                        color: var(--black);
                        font-size: var(--content-font-size);
                        text-decoration: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    }

                    ul{
                        margin: 0;
                        padding: 0;
                    }

                    .ssr_only{
                        display: none;
                    }

                    .lg-components{
                        margin-bottom: constant(safe-area-inset-bottom);
                        margin-bottom: env(safe-area-inset-bottom);
                    }
                `}
            </style>
        </>
    );
};

export default App;
