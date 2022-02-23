
const app = (state = null, action) => {
    switch(action.type){
        case "header/languagesBalloonTrigger":
            return action.value;
        default:
            return state;
    };
};

export default app;
