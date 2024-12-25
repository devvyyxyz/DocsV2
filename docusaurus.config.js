// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devvyyxyz docs',
  tagline: 'Creating, Innovation & Expert Learning',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'assets/Banners/FAQ.png',
      navbar: {
        title: 'Devvyyxyz | DOCS',
        logo: {
          alt: 'Devvyyxyz Logo',
          src: 'assets/Logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://devvyy.xyz',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/devvyyxyz/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.devvyy.xyz/terms-and-conditions',
            label: 'Terms & Conditions',
            position: 'right',
          },
          {
            href: 'https://www.devvyy.xyz/privacy-policy',
            label: 'Privacy policy',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'About Us',
                href: 'https://devvyy.xyz/about-us',
              },
              {
                label: 'Contact Us',
                href: 'https://devvyy.xyz/contact-us',
              },
              {
                label: 'Videos',
                href: 'https://devvyy.xyz/videos',
              },
              {
                label: 'Gallery',
                href: 'https://devvyy.xyz/gallery',
              },
              {
                label: 'Blogs',
                href: 'https://devvyy.xyz/blogs',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: 'https://devvyy.xyz/privacy-policy',
              },
              {
                label: 'Terms & Conditions',
                to: 'https://www.devvyy.xyz/terms-and-conditions',
              },
              {
                label: 'Cookie Policy',
                to: 'https://www.devvyy.xyz/cookie-policy',
              },
              {
                label: 'EULA',
                to: 'https://www.devvyy.xyz/eula',
              },
              {
                label: 'Acceptable Use Policy',
                to: 'https://www.devvyy.xyz/acceptable-use-policy',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Devvyyxyz',
                to: 'https://docs.devvyy.xyz',
              },
              {
                label: 'Dev0',
                to: 'https://dev0.devvyy.xyz',
              },
              {
                label: 'Knowlegebase',
                to: 'https://www.devvyy.xyz/knowlegebase',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devvyyxyz, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
