export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Vos formations sont-elles en Intra entreprise ?",
                answer: "Oui, nous proposons des formations intra-entreprise. Nous pouvons également adapter nos formations à vos besoins spécifiques."
            },
            {
                question: "Hormis ChatGPT, quelles sont les autres IA que vous utilisez ?",
                answer: "Nous utilisons une variété d'IA, y compris des modèles de traitement du langage naturel, des systèmes de recommandation et des outils d'analyse de données. Nous nous tenons à jour avec les dernières avancées dans le domaine de l'IA."
            },
            {
                question: "Pouvez-vous nous aider à intégrer l'IA dans nos processus métier ?",
                answer: "Oui, nous proposons des services de conseil pour aider les entreprises à intégrer l'IA dans leurs processus métier. Nous travaillons avec vous pour identifier les opportunités d'automatisation et d'optimisation."
            },
            {
                question: "Etes vous certifiés Qualiopi ?",
                answer: "Non, mais nous collaborons avec des partenaires Qualiopi ce qui nous permet de vous proposer des formations éligibles à la prise en charge par les OPCO."
            },
            {
                question: "Utilisez-vous des LLM Open Source ?",
                answer: "Oui, nous utilisons aussi des modèles de langage open source tels que DeepSeek, Phi, Qwen pour nos projets. Nous croyons en l'importance de la transparence et de l'accessibilité dans le domaine de l'IA."
            }
        ]
    }
};
