
import { connect } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import LazyLoad from "lazyload";

const mapStateToProps = (state) => {
    return {
        deviceType: state.deviceType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    useEffect(() => {
        let images = document.querySelectorAll(".poster_section .poster");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, [props.deviceType]);

    return (
        <>
            <div className="second_section">
                <div className="left_section">
                    <div className="left_container">
                        {
                            (() => {
                                if(props.deviceType == "mobile" || props.deviceType == "pad"){
                                    return (
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <img className="poster" width="770" height="960" data-src={require("../../assets/image/about/second/index.png")} src={require("../../assets/image/poster/default.png")} alt={props.about.second.title} />
                                        </div>
                                    );
                                }
                            })()
                        }
                        
                        <div className="title_section">
                            <h2 className="title">{props.about.second.title}</h2>
                            <h3 className="subtitle">{props.about.second.subtitle}</h3>
                        </div>

                        <div className="content_section">
                            {
                                props.about.second.content.map((item, index) => {
                                    return (
                                        <h4 className="content_list" key={index}>{item}</h4>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                {
                    (() => {
                        if(props.deviceType == "pc"){
                            return (
                                <div className="right_section">
                                    <div className="right_container">
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <img className="poster" width="770" height="960" data-src={require("../../assets/image/about/second/index.png")} src={require("../../assets/image/poster/default.png")} alt={props.about.second.title} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })()
                }                
            </div>

            <style jsx>
                {`
                    .second_section{
                        position: relative;
                        background-color: var(--background-gray);
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 100px;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        .left_section{
                            width: 50%;
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                width: 100%;
                                justify-content: center;
                            }

                            .left_container{
                                position: relative;
                                width: 90%;

                                @media screen and (max-width: 768px){
                                    top: -80px;
                                }

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 124.67%;
                                    }

                                    .poster{
                                        display: block;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
                                    }
                                }

                                .title_section{
                                    @media screen and (max-width: 768px){
                                        margin-top: 30px;
                                    }

                                    .title{
                                        font-size: 30px;
                                        line-height: 50px;

                                        @media screen and (max-width: 411px){
                                            font-size: 28px;
                                        }
                                    }

                                    .subtitle{
                                        font-size: 22px;
                                        line-height: 40px;

                                        @media screen and (max-width: 411px){
                                            font-size: 20px;
                                        }

                                        &:before{
                                            content: "─";
                                            margin-right: 5px;
                                        }
                                    }
                                }

                                .content_section{
                                    margin-top: 20px;

                                    .content_list{
                                        line-height: 30px;
                                    }
                                }
                            }
                        }

                        .right_section{
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            top: -75px;
                            
                            .right_container{
                                width: 60%;

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 124.67%;
                                    }

                                    .poster{
                                        display: block;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
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
    about: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
