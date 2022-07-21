
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import gaEvent from "../../assets/js/ga/index.js";

const linkClickHandler = (event, item) => {
    gaEvent.header.clickLanguage(item);
};

const App = (props) => {
    const router = useRouter();

    const languagesBalloonSectionMouseOverHandler = (event) => {
        props.setLanguagesBalloonDisplay(true);
    };

    const languagesBalloonSectionMouseOutHandler = (event) => {
        props.setLanguagesBalloonDisplay(false);
    };

    const getLinkFocusClass = (item) => {
        if(item == router.locale){
            return "focus";
        }

        return "";
    };

    return (
        <>
            <div className="languages_balloon_section" onMouseOver={(event) => languagesBalloonSectionMouseOverHandler(event)} onMouseOut={(event) => languagesBalloonSectionMouseOutHandler(event)}>
                <div className="content_container">
                    <Link href={router.route} as={router.route} locale="zh-TW">
                        <a className={`link ${getLinkFocusClass("zh-TW")}`} title="中文" target="_self" onClick={(event) => linkClickHandler(event, "zh-TW")}>中文</a>
                    </Link>

                    <Link href={router.route} as={router.route} locale="en-US">
                        <a className={`link ${getLinkFocusClass("en-US")}`} title="English" target="_self" onClick={(event) => linkClickHandler(event, "en-US")}>English</a>
                    </Link>
                </div>
            </div>

            <style jsx>
                {`
                    .languages_balloon_section{
                        padding-top: 15px;

                        .content_container{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background-color: var(--white);
                            box-shadow: 0px 5px 15px #0000001a;

                            .link{
                                font-size: 15px;
                                line-height: 30px;
                                padding: 10px 15px;
                                width: 100%;
                                text-align: center;
                                border-bottom: 1px solid #e3e3e3;

                                &:last-child{
                                    border-bottom: none;
                                }

                                &:hover{
                                    background-color: var(--primary);
                                    color: var(--white);
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
    setLanguagesBalloonDisplay: PropTypes.func.isRequired
};

export default App;
