
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import Items from "./items.jsx";

const App = (props) => {
    return (
        <>
            <main className="faq_section">
                <h1 className="ssr_only">{props.faq.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.faq.information} />
                <Items items={props.faq.content} />
            </main>

            <style jsx>
                {`
                    .faq_section{
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    faq: PropTypes.object.isRequired
};

export default App;
