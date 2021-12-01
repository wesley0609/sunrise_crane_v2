
import { connect } from "react-redux";
import { useMemo } from "react";
import PropTypes from "prop-types";

const mapStateToProps = (state) => {
    return {
        deviceType: state.deviceType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
const App = (props) => {
    const iframeHeight = useMemo(() => {
        if(props.deviceType != "pc"){
            return 350;
        }

        return 450;
    }, [props.deviceType]);

    const iframeStyle = useMemo(() => {
        return {
            display: "block",
            border: "0"
        };
    }, []);

    return (
        <>
            <div className="map_section">
                <iframe src={props.contact.fullAddress.mapEmbedUrl} width="100%" height={iframeHeight} style={iframeStyle} title="Google Maps Embed" loading="lazy"></iframe>
            </div>

            <style jsx>
                {`
                    .map_section{
                        margin-top: 40px;
                        position: relative;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    contact: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
