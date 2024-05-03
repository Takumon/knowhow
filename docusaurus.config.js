// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Takumon',
  tagline: ``,
  favicon: 'img/favicon.ico',
  trailingSlash:false,

  // Set the production url of your site here
  url: 'https://takumon.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/knowhow',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Takumon', // Usually your GitHub org/user name.
  projectName: 'knowhow', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'training',
  //       path: 'training',
  //       routeBasePath: 'training',
  //       breadcrumbs: true,
  //       sidebarPath: require.resolve('./sidebars.js'),
  //       showLastUpdateTime: true,
  //     },
  //   ],
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'knowledge',
  //       path: 'knowledge',
  //       routeBasePath: 'knowledge',
  //       breadcrumbs: true,
  //       sidebarPath: require.resolve('./sidebars.js'),
  //       showLastUpdateTime: true,
  //     },
  //   ],
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'blag',
  //       path: 'blag',
  //       routeBasePath: 'blag',
  //       breadcrumbs: true,
  //       sidebarPath: require.resolve('./sidebars.js'),
  //       showLastUpdateTime: true,
  //     },
  //   ],
  // ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Takumon',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'training',
            position: 'left',
            label: '学習課題',
          },
          {
            type: 'docSidebar',
            sidebarId: 'knowledge',
            position: 'left',
            label: 'ナレッジ',
          },
          {
            type: 'docSidebar',
            sidebarId: 'blog',
            position: 'left',
            label: 'ブログ',
          },
          {
            href: 'https://github.com/Takumon/knowhow',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '学習課題',
                to: '/training',
              },
              {
                label: 'ナレッジ',
                to: '/knowledge',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Takumon, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
