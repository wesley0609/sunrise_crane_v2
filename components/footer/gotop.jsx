
import { connect } from "react-redux";
import { useCallback } from "react";
import { useRouter } from "next/router";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const router = useRouter();

    const gotopBtnClickHandler = useCallback((event) => {
        scroll({
            top: 0,
            left: 0
        });

        gaEvent.footer.clickGotop(router);
    }, [router]);

    return (
        <>
            <button className="gotop_btn" title={sunrise.seo.other.gotopTitle} onClick={(event) => gotopBtnClickHandler(event)}>
                <div className="text">GO TOP</div>
                <div className="icon"></div>
            </button>

            <style jsx>
                {`
                    .gotop_btn{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-top: 30px;

                        .text{
                            font-size: 12px;
                            color: var(--primary);
                            line-height: 30px;
                        }

                        .icon{
                            height: 60px;
                            width: 1px;
                            background-color: var(--gray);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
