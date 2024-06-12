
module.exports = {

  
  title: 'Databanken 1',
  description: 'Curus voor Graduaat studenten programmeren VIVES Kortrijk',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?familiy=Material+Icons' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', async: true }]
  ],
  themeConfig: {
    logo: 'https://www.vives.be/sites/default/files/uploads/huisstijl/Logo VIVES Hogeschool - Smile.png',
    nav: [
      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Company', link: 'https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/programmeren' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    /*sidebar: [
      {
        title: 'Hoofdstuk 1: Inleiding',   // required
        path: '/hoofdstuk1-inleiding/',     //  optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1    // optional, defaults to 1
      },
      {
        title: 'ESP32 GPIO',
        children: [
         
          '/c-esp32/01-digout/README.md',
          '/c-esp32/02-digin/README.md',
        ]
      },
    ],*/
    sidebar: [
      {
        title: 'Hoofdstuk 1: Inleiding',   // required
        path: '/hoofdstuk1-inleiding/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        /*children: [
          '/hoofdstuk1-inleiding/'
        ]*/
      },
      {
        title: 'Hoofdstuk 2: Installatie en configuratie',
        children: [ 
          '/hoofdstuk3-installatie/1-Installatie/',
          '/hoofdstuk3-installatie/2-Configuratie/'
         ],
        collapsable: true,
        sidebarDepth: 2,
        //initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      }
    ],
   // displayAllHeaders: true,
    //sidebarDepth: 2,
    repo: 'https://github.com/VivesCursus/Databanken1',
    docsDir: 'docs',
    docsBranch: 'master',
  },

  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }]
  ],
}
