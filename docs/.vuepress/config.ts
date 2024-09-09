import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import { markdownContainerPlugin } from '@vuepress/plugin-markdown-container';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
const { description } = require('../../package');

export default defineUserConfig({
  lang: 'en-US',
  title: 'Universal Logging for JavaScript',
  description,
  plugins: [
    searchProPlugin({}),
    markdownContainerPlugin({
      type: 'template',
    }),
    prismjsPlugin({
      themes: {
        light: 'duotone-light',
        dark: 'lucario',
      },
    }),
  ],
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // Facebook Link Meta
    [
      'meta',
      {
        property: 'og:title',
        content: 'Adze - Better JavaScript Logging',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A TypeScript enabled library with a beautiful API that simplifies JavaScript logging.',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://adzejs.com/assets/img/demo.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://www.adzejs.com/',
      },
    ],
    // Twitter Link Meta
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'Adze - Better JavaScript Logging',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content:
          'A TypeScript enabled library with a beautiful API that simplifies JavaScript logging.',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://adzejs.com/assets/img/demo.png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    // --- Others
    [
      'script',
      {
        async: true,
        defer: true,
        'data-domain': 'adzejs.com',
        src: 'https://plausible.io/js/plausible.js',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/adze/dist/adze.min.js',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Share&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: '/favicon.png',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  theme: defaultTheme({
    logo: '/images/icon.svg',
    logoDark: '/images/icon-borderless.svg',
    repo: 'https://github.com/adzejs/adze',
    navbar: [
      { text: 'Getting Started', link: '/getting-started/introduction' },
      { text: 'Reference Manual', link: '/reference/introduction' },
      { text: 'Plugins', link: '/plugins' },
      { text: 'v1.x', link: 'https://adzejs.com/v1/' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          link: '/getting-started/introduction',
          collapsible: false,
          children: [
            { text: 'Introduction', link: '/getting-started/introduction' },
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Migrating from v1', link: '/getting-started/migrating' },
            { text: 'Concepts', link: '/getting-started/concepts' },
            { text: 'Setup', link: '/getting-started/setup' },
            { text: 'Configuration', link: '/getting-started/configuration' },
            { text: 'Log Annotation', link: '/getting-started/annotation' },
            { text: 'Global Store', link: '/getting-started/global-store' },
            { text: 'Capturing Log Data', link: '/getting-started/capture-data' },
            { text: 'Log Threading (MDC)', link: '/getting-started/threading' },
            { text: 'Filtering Logs', link: '/getting-started/filtering' },
            { text: 'Tools', link: '/getting-started/tools' },
            { text: 'Putting It All Together', link: '/getting-started/putting-it-all-together' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference Manual',
          link: '/reference/introduction',
          collapsible: false,
          children: [
            { text: 'Introduction & Lifecycle', link: '/reference/introduction' },
            { text: 'Log Class', link: '/reference/log-class' },
            { text: 'Data Getters', link: '/reference/getters' },
            { text: 'Modifiers', link: '/reference/modifiers' },
            { text: 'Terminators', link: '/reference/terminators' },
            { text: 'Global Store', link: '/reference/global-store' },
            { text: 'Tools', link: '/reference/tools' },
            { text: 'Configuration', link: '/reference/configuration' },
            { text: 'Middleware', link: '/reference/middleware' },
            { text: 'Formatters', link: '/reference/formatters' },
            { text: 'Unit Testing', link: '/reference/unit-testing' },
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
