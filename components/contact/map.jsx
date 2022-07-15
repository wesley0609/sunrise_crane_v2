
import { useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    const iframeHeight = useMemo(() => {
        if(deviceType != "pc"){
            return 350;
        }

        return 450;
    }, [deviceType]);

    const iframeStyle = useMemo(() => {
        return {
            display: "block",
            border: "0"
        };
    }, []);

    return (
        <>
            <div className="map_section">
                <iframe src={props.contact.fullAddress.mapEmbedUrl} width="100%" height={iframeHeight} style={iframeStyle} title="Google Maps Embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default App;
