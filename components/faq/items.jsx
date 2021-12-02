
import { connect } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const [answerDisplays, setAnswerDisplays] = useState([]);

    const questionSectionClickHandler = useCallback((event, item, index) => {
        let _answerDisplays = [];

        for(let i = 0; i < props.items.length; i ++){
            if(i == index){
                if(answerDisplays[index]){
                    _answerDisplays.push(false);
                }
                else{
                    _answerDisplays.push(true);
                }
            }
            else{
                _answerDisplays.push(false);
            }
        }

        setAnswerDisplays(_answerDisplays);
        gaEvent.faq.clickQuestion(item);
    }, [props.items, answerDisplays]);

    const getAnswerSectionStyle = useCallback((index) => {
        if(answerDisplays[index]){
            return {
                display: "block"
            };
        }

        return {
            display: "none"
        };
    }, [answerDisplays]);

    useEffect(() => {
        let _answerDisplays = [];

        for(let i = 0; i < props.items.length; i ++){
            if(i == 0){
                _answerDisplays.push(true);
            }
            else{
                _answerDisplays.push(false);
            }
        }

        setAnswerDisplays(_answerDisplays);
    }, [props.items]);

    return (
        <>
            <div className="faq_items_section">
                <div className="background_section"></div>

                <div className="faq_items_container">
                    <div className="faq_items">
                        {
                            props.items.map((item, index) => {
                                return (
                                    <div className="faq_item" key={index}>
                                        <button className="question_section" title={item.question} onClick={(event) => questionSectionClickHandler(event, item, index)}>
                                            <h2 className="question">{item.question}</h2>

                                            {
                                                (() => {
                                                    if(answerDisplays[index]){
                                                        return (
                                                            <img className="icon" width="36" height="36" src={require("../../assets/image/faq/icon/less.svg")} alt="less" />
                                                        );
                                                    }
                                                    else{
                                                        return (
                                                            <img className="icon" width="36" height="36" src={require("../../assets/image/faq/icon/more.svg")} alt="more" />
                                                        );
                                                    }
                                                })()
                                            }
                                        </button>

                                        <h3 className="answer_section" style={getAnswerSectionStyle(index)}>{item.answer}</h3>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .faq_items_section{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        position: relative;

                        @media screen and (max-width: 414px){
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

                        .faq_items_container{
                            position: relative;
                            width: 80%;

                            @media screen and (max-width: 768px){
                                width: 90%;
                            }

                            .faq_items{
                                display: flex;
                                flex-direction: column;
                                flex-wrap: wrap;
                                justify-content: center;
                                align-items: center;
                                box-shadow: 0px 6px 30px #0000000d;
                                background-color: var(--white);
                                padding-top: 10px;
                                padding-bottom: 25px;
                                padding-left: 30px;
                                padding-right: 30px;

                                @media screen and (max-width: 768px){
                                    padding-left: 20px;
                                    padding-right: 20px;
                                }

                                .faq_item{
                                    width: 100%;
                                    border-bottom: 1px solid #e1e1e1;

                                    .question_section{
                                        display: inline-flex;
                                        position: relative;
                                        width: 100%;
                                        cursor: pointer;
                                        user-select: none;
                                        padding: 15px 0px;
                                        text-align: left;

                                        .question{
                                            line-height: 25px;
                                            padding-right: 40px;
                                        }

                                        .icon{
                                            position: absolute;
                                            top: 50%;
                                            right: 0;
                                            transform: translateY(-50%);
                                            width: 22px;
                                            height: 22px;
                                        }
                                    }

                                    .answer_section{
                                        font-size: 14px;
                                        line-height: 25px;
                                        padding-top: 5px;
                                        padding-bottom: 20px;
                                        padding-left: 15px;
                                        padding-right: 30px;
                                        color: var(--black-light);
                                        display: none;
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
    items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
