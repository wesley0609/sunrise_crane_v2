
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import Content from "./content.jsx";
import Map from "./map.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <main className="contact_section">
                <h1 className="ssr_only">{props.contact.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.contact.information} />
                <Content contact={props.contact.contact} />
                <Map contact={props.contact.contact} />
            </main>

            <style jsx>
                {`
                    .contact_section{
                        display: block;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
