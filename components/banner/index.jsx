
import { connect } from "react-redux";
import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import LazyLoad from "lazyload";

import Breadcrumb from "../breadcrumb/index.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

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

    useEffect(() => {
        let images = document.querySelectorAll(".banner_section .banner_img");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, []);

    return (
        <>
            <div className="banner_section">
                <div className="title">{props.banner.title}</div>
                <div className="subtitle">{props.banner.subtitle.toUpperCase()}</div>
                <div className="border"></div>
                <Breadcrumb breadcrumb={breadcrumb} color="var(--white)" />
            </div>

            <style jsx>
                {`
                    .banner_section{
                        background-image: url(${require(`../../assets/image${props.banner.href}/banner/${props.banner.src}`)});
                        background-size: cover;
                        background-position: center center;
                        height: 400px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        @media screen and (max-width: 768px){
                            height: 300px;
                        }

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
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
