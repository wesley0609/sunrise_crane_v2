
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <div className="information_section">
                <div className="information">
                    <div className="title">{props.information.title}</div>
                    <div className="description">{props.information.description}</div>

                    {
                        (() => {
                            if(deviceType == "pc"){
                                return (
                                    <div className="background">{props.information.subtitle.toUpperCase()}</div>
                                );
                            }
                        })()
                    }
                </div>
            </div>

            <style jsx>
                {`
                    .information_section{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;

                        @media screen and (max-width: 768px){
                            margin-top: 20px;
                        }

                        .information{
                            position: relative;
                            width: 80%;
                            height: 135px;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            align-items: flex-start;

                            @media screen and (max-width: 768px){
                                width: 90%;
                            }

                            @media screen and (max-width: 768px){
                                height: auto;
                            }

                            .title{
                                font-size: 30px;
                                line-height: 45px;
                                padding-top: 10px;
                                padding-bottom: 10px;

                                @media screen and (max-width: 414px){
                                    font-size: 28px;
                                }
                            }

                            .description{
                                font-size: 22px;
                                line-height: 30px;

                                @media screen and (max-width: 414px){
                                    font-size: 20px;
                                }

                                &:before{
                                    content: "─";
                                    margin-right: 5px;
                                }                                
                            }

                            .background{
                                position: absolute;
                                top: 0;
                                left: 120px;
                                color: var(--text-background-gray);
                                font-size: 80px;
                                z-index: -1;
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    information: PropTypes.object.isRequired
};

export default App;
