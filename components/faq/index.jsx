
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import FaqItems from "./faqItems.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <main className="faq_section">
                <h1 className="ssr_only">{props.faq.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.faq.information} />
                <FaqItems faq={props.faq.faq} />
            </main>

            <style jsx>
                {`
                    .faq_section{
                        display: block;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
