
import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import Breadcrumb from "../breadcrumb/index.jsx";

const App = (props) => {    
    const breadcrumb = useMemo(() => {
        let _breadcrumb = [];

        _breadcrumb.push({
            title: sunrise.seo.other.breadcrumb,
            href: "/",
            as: "/"
        });

        _breadcrumb.push({
            title: props.banner.title,
            href: props.banner.href,
            as: props.banner.as
        });

        return _breadcrumb;
    }, [props.banner]);

    return (
        <>
            <div className="banner_section">
                <div className="background_section">
                    <Image src={`/image${props.banner.href}/banner/${props.banner.src}`} alt={props.banner.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} objectFit="cover" layout="fill" priority />
                </div>

                <div className="text_section">
                    <div className="title">{props.banner.title}</div>
                    <div className="subtitle">{props.banner.subtitle.toUpperCase()}</div>
                    <div className="border"></div>
                    <Breadcrumb breadcrumb={breadcrumb} color="var(--white)" />
                </div>
            </div>

            <style jsx>
                {`
                    .banner_section{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 400px;
                        position: relative;

                        @media screen and (max-width: 768px){
                            height: 300px;
                        }

                        .background_section{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: -1;
                        }

                        .text_section{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .title{
                                color: var(--white);
                                font-size: 22px;

                                @media screen and (max-width: 414px){
                                    font-size: 20px;
                                }
                            }

                            .subtitle{
                                color: var(--white);
                                font-size: 30px;
                                line-height: 60px;

                                @media screen and (max-width: 414px){
                                    font-size: 28px;
                                }
                            }

                            .border{
                                width: 15px;
                                height: 1px;
                                background-color: var(--white);
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired
};

export default App;
