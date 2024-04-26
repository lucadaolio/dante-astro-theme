export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Susy Bombana',
    subtitle: 'Scrittrice, parrucchiera e amante della natura',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Libri',
            href: '/projects'
        },
        {
            text: 'Pensieri',
            href: '/blog'
        },
        {
            text: 'Dove trovi i miei libri?',
            href: '/dove-trovi-i-miei-libri'
        },
        {
            text: 'Chi sono',
            href: '/chi-sono'
        }
    ],
    footerNavLinks: [
        {
            text: 'Conoscimi meglio',
            href: '/chi-sono'
        },
        {
            text: 'Contattami',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'Facebook',
            href: 'https://facebook.com/'
        }
    ],
    hero: {
        title: 'Benvenuti a tutti nel mio piccolo angolo di web!',
        text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Mettiti in contatto con me',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Iscriviti alla Newsletter di Susy',
        text: 'Riceverai una sola email al mese per segnalarti il mio pensiero più bello.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
