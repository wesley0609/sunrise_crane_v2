
import NextNprogress from "nextjs-progressbar";

import theme from "../../assets/json/style/theme.json";

const setting = {
    color: theme["--primary"],
    height: 2,
    options: {
        showSpinner: false
    }
};

const App = (props) => {
    return (
        <NextNprogress color={setting.color} height={setting.height} options={setting.options} />
    );
};

export default App;
