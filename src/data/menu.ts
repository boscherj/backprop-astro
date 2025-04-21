// src/data/menu.ts

export const headerMenu = [
    { name: 'Theme Info', link: '/theme-info' },
    { name: 'Équipe', link: '/team' },
    // { name: 'Blog', link: '/blog' },
    { name: 'Expertise', link: '/style-guide', showArrow: false,
        children: [
            { name: 'ChatGPT', link: '/style-guide#typography' },
            { name: 'Claude 3, Gemini', link: '/style-guide#colors' },
            { name: 'Mistral, LLama, DeepSeek', link: '/style-guide#links' },
            { name: 'MS Copilot', link: '/style-guide#buttons' },
            { name: 'MidJourney, DALL.E', link: '/style-guide#forms' },
            { name: 'TensorFlow, Langchain', link: '/style-guide#lists' },
        ]   
    }
];

export const footerMenu = [
    { name: 'Expertise', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Confidentialité', link: '/legal/terms-of-service' }
];

