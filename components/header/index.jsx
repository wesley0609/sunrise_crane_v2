
import { connect } from "react-redux";
import { useMemo } from "react";
import { useRouter } from "next/router";

import Landscape from "./landscape.jsx";
import Portrait from "./portrait.jsx";

const mapStateToProps = (state) => {
    return {
        deviceType: state.deviceType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const router = useRouter();

    const headerMeta = useMemo(() => {
        return require(`../../assets/json/meta/header/${router.locale}/index.json`);
    }, [router]);

    const meta = useMemo(() => {
        return {
            menu: headerMeta.menu
        };
    }, [headerMeta]);

    return (
        <>
            <header className="header_section">
                <div className="header_container">
                    {
                        (() => {
                            if(props.deviceType == "pc"){
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
