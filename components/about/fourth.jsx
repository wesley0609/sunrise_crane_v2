
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
        let images = document.querySelectorAll(".fourth_section .poster");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, [props.deviceType]);

    return (
        <>
            <div className="fourth_section">
                {
                    (() => {
                        if(props.deviceType == "pc"){
                            return (
                                <div className="left_section">
                                    <div className="padding_box"></div>
                                    <img className="poster" width="864" height="592" data-src={require("../../assets/image/about/fourth/index.jpg")} src={require("../../assets/image/poster/default.png")} alt={props.about.fourth.title} />
                                </div>
                            );
                        }
                    })()
                }

                <div className="right_section">
                    <div className="right_container">
                        <h2 className="title">{props.about.fourth.title}</h2>
                        <h3 className="content">{props.about.fourth.content}</h3>
                    </div>

                    {
                        (() => {
                            if(props.deviceType == "mobile" || props.deviceType == "pad"){
                                return (
                                    <img className="poster" width="864" height="592" data-src={require("../../assets/image/about/fourth/index.jpg")} src={require("../../assets/image/poster/default.png")} alt={props.about.fourth.title} />
                                );
                            }
                        })()
                    }
                </div>
            </div>

            <style jsx>
                {`
                    .fourth_section{
                        display: flex;
                        flex-direction: row;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        .left_section{
                            position: relative;
                            width: 40%;

                            .padding_box{
                                padding-bottom: 65.82%;
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

                        .right_section{
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding-top: 45px;
                            padding-bottom: 45px;

                            @media screen and (max-width: 768px){
                                flex-direction: column;
                                padding-bottom: 0;
                            }

                            @media screen and (max-width: 414px){
                                padding-top: 30px;
                            }

                            .right_container{
                                width: 90%;

                                .title{
                                    font-size: 30px;
                                    line-height: 50px;

                                    @media screen and (max-width: 414px){
                                        font-size: 28px;
                                    }
                                }

                                .content{
                                    line-height: 30px;
                                    margin-top: 20px;
                                    color: var(--black-light);
                                }
                            }

                            .poster{
                                display: block;
                                width: 100%;
                                height: 100%;
                                margin-top: 30px;
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
