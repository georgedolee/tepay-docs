// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TePay .NET SDK',
  tagline: 'A .NET library designed for seamless integration with the  TBC Bank Payment API',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://GeorgeDoLee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TePayDocs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeorgeDoLee', // Usually your GitHub org/user name.
  projectName: 'TePayDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'TePay',
        logo: {
          alt: 'TePay Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'docs/Contributing',
            label: 'Contributing',
            position: 'left',
          },
          {
            to: 'docs/License',
            label: 'License',
            position: 'left',
          },
          {
            href: 'https://github.com/GeorgeDoLee/TePay',
            label: 'GitHub',
            position: 'right',
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'TePay Documentation',
                to: '/docs/Tutorial/Introduction',
              },
              {
                label: 'TBC Payment API Documentation',
                href: 'https://developers.tbcbank.ge/docs/checkout-api-overview',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributing Guide',
                to: '/docs/Contributing',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/GeorgeDoLee/TePay/issues',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/GeorgeDoLee/TePay/discussions',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                to: '/docs/License',
              }
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GeorgeDoLee/TePay',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/giorgi-dolidze-05428b278/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TePay. Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
