import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml, Speech, University, MailQuestion } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Speech,
                title: 'Conférence',
                description: "Nous intervenons régulièrement au sein d’organisations, entreprises, écoles d’ingénieurs pour des conférences de sensibilisation à l’intelligence artificielle"
            },
            {
                icon: University,
                title: "Formation à l'IA générative",
                description: "Notre cœur de métier chez BackProp est de former et d’accompagner les entreprises à gagner en productivité et en créativité, par l’utilisation d’outils tels que ChatGPT, Midjourney, DALL.E v3"
            },
            {
                icon: MailQuestion,
                title: 'Conseil',
                description: "Vous souhaitez les conseils d’un expert en IA avant de démarrer un projet au sein de vos services. Que ce projet soit très technique ou non, nous pouvons vous aider"
            },
            {
                icon: Smile,
                title: 'Développement',
                description: "Vous souhaitez développer un projet IA au sein de votre entreprise, mais vous ne savez pas par où commencer. Nous pouvons vous aider à définir le projet et à le réaliser"
            }
            
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
