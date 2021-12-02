
const app = (faq) => {
    let items = faq.content;

    let obj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };
    
    for(let i = 0; i < items.length; i ++){
        let item = items[i];

        obj.mainEntity.push({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        });
    }

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
