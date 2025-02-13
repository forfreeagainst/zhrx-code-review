﻿import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'zhrx',
      description: 'zhrx前端开发手册',
    },
  },
  base: '/zhrx-code-review/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: 'NPM包',
        items: [{ text: 'eslint-plugin', link: '/npm/eslint-plugin.md' }]
      },
      {
        //导航栏和侧边栏的字段属性不一样
        text: '脚手架',
        items: [{ text: 'zhrx脚手架', link: '/cli/zhrx-cli.md' }]
      }
    ],
    sidebar: [
      {
        title: 'NPM包',
        children: [{ title: 'eslint-plugin', path: '/npm/eslint-plugin.md' }]
      },
      {
        title: '脚手架',
        children: [{ title: 'zhrx脚手架', path: '/cli/zhrx-cli.md' }]
      }
    ],
    logo: '/img/logo.png',
    repo: 'forfreeagainst/zhrx-code-review',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2024,
      copyrightInfo:
        'zhrx-code-review | <a href="https://github.com/forfreeagainst/zhrx-code-review" target="_blank">github</a>',
    },
    extendFrontmatter: {
      author: {
        name: 'durant',
        link: 'https://github.com/forfreeagainst/zhrx-code-review',
      },
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'zhrx前端开发手册',
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});
