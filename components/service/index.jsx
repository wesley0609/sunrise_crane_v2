
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import ServiceItems from "./serviceItems.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <div className="service_section">
                <h1 className="ssr_only">{props.service.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.service.information} />
                <ServiceItems service={props.service.service} />
            </div>

            <style jsx>
                {`
                    .service_section{
                        display: block;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    service: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
