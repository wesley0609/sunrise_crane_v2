
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Landscape from "./landscape.jsx";
import Portrait from "./portrait.jsx";

const App = (props) => {
    const router = useRouter();

    const headerMeta = require(`../../assets/json/meta/header/${router.locale}/index.json`);

    const meta = {
        menu: headerMeta.menu
    };

    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <header className="header_section">
                <div className="header_container">
                    {
                        (() => {
                            if(deviceType == "pc"){
                                return (
                                    <Landscape menu={meta.menu} />
                                );
                            }
                            else{
                                return (
                                    <Portrait menu={meta.menu} />
                                );
                            }
                        })()
                    }
                </div>
            </header>

            <style jsx>
                {`
                    .header_section{
                        height: 80px;

                        .header_container{
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            z-index: 100;
                            background-color: var(--black);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default App;
