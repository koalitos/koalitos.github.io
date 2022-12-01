// gitprofile.config.js

const config = {
  github: {
    username: 'koalitos', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false,
      projects: ['teste', 'teste-next', 'koalitos'],
    },
  },
  social: {
    linkedin: 'lucas-amaral-a99737162',
    twitter: '',
    facebook: '',
    instagram: 'imcoala_',
    dribbble: '',
    behance: '',
    stackoverflow: '', // format: userid/username
    website: 'https://koalitos.github.io',
    phone: '+55 (11) 96921-2667',
    email: 'lamaral.pro@gmail.com',
  },
  resume: {
    fileUrl: 'Profile.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDb',
    'Git',
    'Docker',
    'CSS',
    'Sass',
    'Tailwind',
    'ApiRest',
    'Angular',
    'Gulp',
    'AWS',
    'Firebase',
    'Trello',
    'Azure',
  ],
  experiences: [
    {
      company: 'XP Investimentos',
      position: 'Software engineer III front-end',
      from: 'Out 2021',
      to: 'Nov 2022',
      companyLink: 'https://corretora.clear.com.br/',
    },
    {
      company: 'Braavo E-commerce',
      position: 'Desenvolvedor de software Pleno',
      from: 'Mai 2018',
      to: 'Out 2021',
      companyLink: 'https://www.braavo.com.br/',
    },
  ],
  education: [
    {
      institution: 'Alura',
      degree: 'Docker: Criando containers sem dor de cabeça',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'Alura',
      degree: 'MongoDb: Uma alternativa aos bancos relacionais tradicionais',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'Alura',
      degree: 'PHP: Introdução à Orientação a Objetos parte 1',
      from: '2019',
      to: '2019',
    },
    {
      institution: 'Alura',
      degree: 'PHP: Introdução à Orientação a Objetos parte 2',
      from: '2019',
      to: '2019',
    },
    {
      institution: 'Udemy',
      degree: 'Desenvolvimento Web Completo 2021',
      from: '2021',
      to: '2021',
    },
  ],
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-0F1ZGQBBTD', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3272304',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
