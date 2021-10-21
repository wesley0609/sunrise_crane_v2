
import theme from "../json/style/theme.json";

const App = () => {
    return (
        <>
            <style jsx global>
                {`
                    :root{
                        --primary: ${theme["--primary"]};
                        --primary-light: ${theme["--primary-light"]};
                        --black: ${theme["--black"]};
                        --white: ${theme["--white"]};
                        --gray: ${theme["--gray"]};
                        --text-background-gray: ${theme["--text-background-gray"]};
                        --background-gray: ${theme["--background-gray"]};
                        --content-font-size: 16px;

                        @media screen and (max-width: 414px){
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
                        color: var(--black);
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
