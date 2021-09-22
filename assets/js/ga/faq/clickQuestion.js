
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "question",
        "label": "faq",
        "value": item.question
    });
};

export default app;
