module.exports = {
    title: "BeckXun's Blog",
    description: 'Stay hungry, Stay foolish',
    base: "/",
    dest: "./dist",
    head: [
        ['link', {
            rel: 'shortcut icon',
            href: '/favicon.ico',
        }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: "BeckXun's Blog",
            description: 'Stay hungry, Stay foolish',
        },
    },
    themeConfig: {
        sidebarDepth: 1,
        editLinks: true,
        editLinkText: '编辑该页面',
        lastUpdated: '最后更新时间',
        displayAllHeaders: true,
        nav: [{
                text: '博文',
                link: '/note/source'
            },
            {
                text: '随笔',
                link: '/exp/go-abroad'
            },
            {
                text: '关于我',
                link: '/about/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/JamesXun/blog',
            },
        ],
        sidebar: {
            '/note/': [{
                title: '博文',
                collapsable: false,
                children: [
                    'source',
                ],
            }],
            '/exp/': [{
                title: '随笔',
                collapsable: false,
                children: [
                    'go-abroad',
                ],
            }],
        }
    }
};
