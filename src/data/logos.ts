import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/fnaim.svg';
import logo2 from '../assets/images/logos/Logo_ville_de_dinard.svg.png';
import logo3 from '../assets/images/logos/logo_Oberthur.png';
import logo4 from '../assets/images/logos/MBA-logo-sans-baseline-HD.png';

// import logo5 from '../assets/images/logos/logoipsum-352.svg';
import logo5 from '../assets/images/logos/logo_web_cci-bretagne_rvb_version_bleu-770x247.png';


export interface Logo {
    src: ImageMetadata;
    alt: string;
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Logo 1',
            },
            {
                src: logo2,
                alt: 'Logo 2',
            },
            {
                src: logo3,
                alt: 'Logo 3',
            },
            {
                src: logo4,
                alt: 'Logo 4',
            },
            {
                src: logo5,
                alt: 'Logo 5',
            }
        ]
    }
};
