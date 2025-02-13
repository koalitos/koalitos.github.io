// gitprofile.config.js

const config = {
  github: {
    username: 'koalitos', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false,
      projects: ['teste', 'teste-next', 'koalitos', 'Money-front', 'koalitos.github.io'],
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
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: 'Profile.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Vue.Js',
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
      company: 'Porto Seguro',
      position: 'Tech lead',
      from: 'Jul 2023',
      to: 'Current',
      companyLink: 'https://www.portoseguro.com.br/',
    },
    {
      company: 'Porto Seguro',
      position: 'Software engineer front-end Sênior',
      from: 'Dez 2022',
      to: 'Jul 2023',
      companyLink: 'https://www.portoseguro.com.br/',
    },
    {
      company: 'XP Investimentos',
      position: 'Software engineer III front-end',
      from: 'Out 2021',
      to: 'Nov 2022',
      companyLink: 'https://corretora.clear.com.br/',
    },
    {
      company: 'Braavo E-commerce',
      position: 'Software engineer I/II front-end',
      from: 'Mai 2018',
      to: 'Out 2021',
      companyLink: 'https://www.braavo.com.br/',
    },
  ],
  education: [
    {
      institution: 'Dio',
      degree: 'Integrando o ChatGPT com Node e React',
      from: '2023',
      to: '2023',
    },
    {
      institution: 'Udemy',
      degree: 'React: Do Zero a Maestria (c/ hooks, router, API, Projetos)',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Udemy',
      degree: 'Desenvolvimento Web Completo 2021',
      from: '2021',
      to: '2021',
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
      //'cupcake',
      //'bumblebee',
      //'emerald',
      //'corporate',
      //'synthwave',
      'retro',
      //'cyberpunk',
      //'valentine',
      //'halloween',
      //'garden',
      'forest',
      //'aqua',
      //'lofi',
      //'pastel',
      //'fantasy',
      //'wireframe',
      'black',
      //'luxury',
      //'dracula',
      //'cmyk',
      //'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
      'coffee',
      //'winter',
      //'procyon',
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
