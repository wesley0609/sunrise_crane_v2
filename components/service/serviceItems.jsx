
import { connect } from "react-redux";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import LazyLoad from "lazyload";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const serviceItemClickHandler = useCallback((event, item) => {
        gaEvent.service.clickService(item);
    }, []);

    useEffect(() => {
        let images = document.querySelectorAll(".service_items_section .poster_section");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, []);

    return (
        <>
            <div className="service_items_section">
                <div className="background_section"></div>

                <div className="secvice_items_container">
                    <div className="service_items">
                        {
                            props.service.map((item, index) => {
                                return (
                                    <div className="service_item" onClick={(event) => serviceItemClickHandler(event, item)} key={index}>
                                        <img className="poster_section" width="380" height="250" data-src={require(`../../assets/image/service/${item.src}`)} src={require("../../assets/image/poster/default.png")} alt={item.title} />

                                        <div className="content_section">
                                            <h2 className="title">{item.title}</h2>
                                            <h3 className="description">{item.description}</h3>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .service_items_section{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        position: relative;

                        @media screen and (max-width: 411px){
                            padding-top: 20px;
                            padding-bottom: 20px;
                        }

                        .background_section{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 120px;
                            bottom: 0;
                            left: 0;
                            background-color: var(--background-gray);
                        }

                        .secvice_items_container{
                            position: relative;
                            width: 82%;

                            @media screen and (max-width: 768px){
                                width: 92%;
                            }

                            .service_items{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                align-items: stretch;

                                &:after{
                                    content: "";
                                    flex: auto;
                                }

                                .service_item{
                                    width: 31.33%;
                                    margin-top: 10px;
                                    margin-bottom: 10px;
                                    margin-left: 1%;
                                    margin-right: 1%;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    border: 1px solid #efefef;
                                    background-color: var(--white);
                                    text-align: center;
                                    cursor: pointer;

                                    @media screen and (min-width: 769px){
                                        &:hover{
                                            box-shadow: 3px 3px 10px #0000001a;
                                        }
                                    }

                                    @media screen and (max-width: 768px){
                                        width: 48%;
                                    }

                                    @media screen and (max-width: 411px){
                                        width: 98%;
                                    }

                                    .poster_section{
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }

                                    .content_section{
                                        margin-top: 20px;

                                        .title{
                                            font-weight: bold;
                                            line-height: 25px;
                                        }

                                        .description{
                                            font-size: 14px;
                                            line-height: 25px;
                                            margin-top: 25px;
                                            margin-bottom: 25px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    service: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
