
import { connect } from "react-redux";
import { useMemo } from "react";
import NextNprogress from "nextjs-progressbar";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const setting = useMemo(() => {
        return {
            color: "#ff6700",
            height: 2,
            options: {
                showSpinner: false
            }
        };
    }, []);

    return (
        <NextNprogress color={setting.color} height={setting.height} options={setting.options} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
