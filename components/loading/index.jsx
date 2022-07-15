
import { useMemo } from "react";
import NextNprogress from "nextjs-progressbar";

import theme from "../../assets/json/style/theme.json";

const App = (props) => {
    const setting = useMemo(() => {
        return {
            color: theme["--primary"],
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

export default App;
