module.exports = {
  title: "BeckXun's Blog",
  description: 'Stay hungry, Stay foolish',
  base: "/",
  dest: "./dist",
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "BeckXun's Blog",
      description: 'Stay hungry, Stay foolish'
    }
  },
  themeConfig: {
    nav: [{
        text: 'Note',
        link: '/note/'
      },
      {
        text: 'Experience',
        link: '/exp/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/JamesXun/blog'
      },
    ]
  }
};