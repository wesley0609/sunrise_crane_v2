
const app = (element) => {
    let computedStyle = getComputedStyle(element);
    let overflowY = computedStyle["overflow-y"];
    let overflowX = computedStyle["overflow-x"];
    let vertical = false;
    let horizontal = false;

    if(overflowY == "scroll" || overflowY == "auto"){
        if(element.scrollHeight > element.clientHeight){
            vertical = true;
        }
    }

    if(overflowX == "scroll" || overflowX == "auto"){
        if(element.scrollWidth > element.clientWidth){
            horizontal = true;
        }
    }
    
    return {
        vertical: vertical,
        horizontal: horizontal
    };
};

export default app;
