
const app = (state = "pc", action) => {
    switch(action.type){
        case "deviceType":
            return action.value;
        default:
            return state;
    };
};

export default app;
