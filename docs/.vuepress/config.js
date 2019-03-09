module.exports = {
  title: "BeckXun's Blog",
  description: 'Stay hungry, Stay foolish',
  base: "/",
  dest: "./dist",
  head: [
    ['link', {
      rel: 'shortcut icon',
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
        text: '笔记',
        link: '/note/'
      },
      {
        text: '心得',
        link: '/exp/'
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/JamesXun/blog'
      },
    ],
    // sidebar: {
    //   '/about/': [
    //     '',
    //     'one',
    //     'two'
    //   ],
    // }
  }
};