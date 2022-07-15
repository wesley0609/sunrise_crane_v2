
import React, { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import gaEvent from "../../assets/js/ga/index.js";

const App = (props) => {
    const router = useRouter();

    const color = useMemo(() => {
        if(props.color){
            return props.color;
        }

        return "var(--black)";
    }, [props.color]);

    const linkClickHandler = useCallback((event, item) => {
        gaEvent.breadcrumb.clickLink(router, item);
    }, [router]);

    return (
        <>
            <div className="breadcrumb_section">
                {
                    props.breadcrumb.map((item, index) => {
                        if(index < props.breadcrumb.length - 1){
                            return (
                                <React.Fragment key={index}>
                                    <Link href={item.href} as={item.as}>
                                        <a className="link" title={item.title} target="_self" onClick={(event) => linkClickHandler(event, item)}>{item.title}</a>
                                    </Link>

                                    <span className="arrow">{">"}</span>
                                </React.Fragment>
                            );
                        }
                        else{
                            return (
                                <span className="link" key={index}>{item.title}</span>
                            );
                        }
                    })
                }
            </div>

            <style jsx>
                {`
                    .breadcrumb_section{
                        margin-top: 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        @media screen and (min-width: 769px){
                            a:hover{
                                color: var(--primary);
                            }
                        }

                        .link{
                            font-size: 13px;
                            color: ${color};
                            line-height: 30px;
                        }

                        .arrow{
                            font-size: 13px;
                            color: ${color};
                            margin-left: 8px;
                            margin-right: 8px;
                            line-height: 30px;
                        }
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    breadcrumb: PropTypes.array.isRequired,
    color: PropTypes.string
};

export default App;
