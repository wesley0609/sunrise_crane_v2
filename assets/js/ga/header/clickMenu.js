
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "menu",
        "label": "header",
        "value": item.title
    });
};

export default app;
