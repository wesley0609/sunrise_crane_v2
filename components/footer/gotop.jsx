
import { useCallback } from "react";
import { useRouter } from "next/router";

import gaEvent from "../../assets/js/ga/index.js";

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
            <button className="gotop_btn" title={sunrise.seo.other.gotop} onClick={(event) => gotopBtnClickHandler(event)}>
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

export default App;
