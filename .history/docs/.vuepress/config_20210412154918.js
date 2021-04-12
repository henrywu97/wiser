module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      },
      // "vuepress-plugin-auto-sidebar": {}
  },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'GitHUb', link: 'https://github.com/henrywu97/wiser' },
      ],
      sidebar: [
        {
          title: '第一章 量化选股',   // 必要的
          path: '/QuantStrategy&Technology/Chapter1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
      ]
    }
}