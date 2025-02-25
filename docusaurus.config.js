import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devvyyxyz Docs',
  tagline: 'Creating, Innovation & Expert Learning',
  favicon: '/Ico/Favicon.ico',
  url: 'https://docs.devvyy.xyz',
  baseUrl: '/',
  organizationName: 'devvyyxyz', // Usually your GitHub org/user name.
  projectName: 'docsV2', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: ['public', 'static'],

  i18n: {
    defaultLocale: 'en',
    locales: [
    "en",
    "es",
    "ru",
  ],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Spanish',
      },
      zhcn: {
        label: 'Mandarin',
      },
      hi: {
        label: 'Hindi',
      },
      ar: {
        label: 'Arabic',
      },
      bn: {
        label: 'Bengali',
      },
      pt: {
        label: 'Portuguese',
      },
      ru: {
        label: 'Russian',
      },
      ja: {
        label: 'Japanese',
      },
      pa: {
        label: 'Punjabi',
      },
      de: {
        label: 'German',
      },
      ko: {
        label: 'Korean',
      },
      fr: {
        label: 'French',
      },
        vi: {
        label: 'Vietnamese',
      },
      tr: {
        label: 'Turkish',
      },
      it: {
        label: 'Italian',
      },
      sw: {
        label: 'Swahili',
      },
      ta: {
        label: 'Tamil',
      },
      fa: {
        label: 'Persian (Farsi)',
      },
      ur: {
        label: 'Urdu',
      },
      ms: {
        label: 'Malay/Indonesian',
      },
      te: {
        label: 'Telugu',
      },
      mr: {
        label: 'Marathi',
      },
      th: {
        label: 'Thai',
      },
      pl: {
        label: 'Polish',
      },
      sv: {
        label: 'Swedish',
      },
      da: {
        label: 'Danish',
      },
      nl: {
        label: 'Dutch',
      },
      cs: {
        label: 'Czech',
      },
      el: {
        label: 'Greek',
      },
      hu: {
        label: 'Hungarian',
      },
    },
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
            'https://github.com/devvyyxyz/docsv2/tree/main',
        },
        blog: null,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],
  headTags: [
    // Declare a <link> preconnect tag
    {tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://devvyy.xyz',
      },
    },
    // Declare some json-ld structured data
    {tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Meta Open Source',
        url: 'https://opensource.fb.com/',
        logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
      }),
    },
  ],




  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'Banners/FAQ.png',
      navbar: {
        title: 'Devvyyxyz | DOCS',
        logo: {
          alt: 'Devvyyxyz Logo',
          src: '/Png/Logo.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'main',
            label: 'Home',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'dev0',
            label: 'Dev0',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'bmd',
            label: 'BMD',
          },
          {
            type: 'dropdown',
            label: 'Socials',
            position: 'right',
            items: [  
                {
                  href: 'https://devvyy.xyz',
                  label: 'Facebook',
                },
                {
                  href: 'https://github.com/devvyyxyz',
                  label: 'GitHub',
                },
                {
                  href: 'https://twitter.com/devvyyxyz',
                  label: 'Twitter',
                },
                {
                  href: 'https://linkedin.com/in/devvyyxyz',
                  label: 'LinkedIn',
                },
                {
                  href: 'https://dev.to/devvyyxyz',
                  label: 'Dev.to',
                },
                {
                  href: 'https://www.instagram.com/devvyyxyz',
                  label: 'Instagram',
                },
                {
                  href: 'https://www.twitch.tv/devvyyxyz',
                  label: 'Twitch',
                },
                {
                  href: 'https://www.youtube.com/@devvyyxyz',
                  label: 'YouTube',
                },
                {
                  href: 'https://www.reddit.com/u/devvyyxyz',
                  label: 'Reddit',
                },
                {
                  href: 'https://stackoverflow.com/users/devvyyxyz',
                  label: 'Stack Overflow',
                },
                {
                  href: 'https://gitlab.com/devvyyxyz',
                  label: 'GitLab',
                },
                {
                  href: 'https://bitbucket.org/devvyyxyz',
                  label: 'Bitbucket',
                },
                {
                  href: 'https://codepen.io/devvyyxyz',
                  label: 'CodePen',
                },
                {
                  href: 'https://www.hackerrank.com/devvyyxyz',
                  label: 'HackerRank',
                },
                {
                  href: 'https://leetcode.com/devvyyxyz',
                  label: 'LeetCode',
                },
                {
                  href: 'https://medium.com/@devvyyxyz',
                  label: 'Medium',
                },
                {
                  href: 'https://hashnode.com/@devvyyxyz',
                  label: 'Hashnode',
                },
                {
                  href: 'https://discord.com/invite/devvyyxyz',
                  label: 'Discord',
                },
                {
                  href: 'https://t.me/devvyyxyz',
                  label: 'Telegram',
                },
                {
                  href: 'https://www.reddit.com/r/devvyyxyz',
                  label: 'Reddit (Subreddit)',
                },
                {
                  href: 'https://mastodon.social/@devvyyxyz',
                  label: 'Mastodon',
                },
                {
                  href: 'https://www.joinclubhouse.com/@devvyyxyz',
                  label: 'Clubhouse',
                },
                {
                  href: 'https://dribbble.com/devvyyxyz',
                  label: 'Dribbble',
                },
                {
                  href: 'https://www.behance.net/devvyyxyz',
                  label: 'Behance',
                }
            ]
          },
          {
            type: 'dropdown',
            label: 'Legal',
            position: 'right',
            items: [
              {
                href: 'https://github.com/devvyyxyz/docs',
                label: 'GitHub',
              },
              {
                href: 'https://www.devvyy.xyz/terms-and-conditions',
                label: 'Terms & Conditions',
              },
              {
                href: 'https://www.devvyy.xyz/privacy-policy',
                label: 'Privacy policy',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'other',
            position: 'right',
            items: [  
              {
                href: 'https://devvyy.xyz',
                label: 'Website',
              }
            ],
          },
          {
            type: 'localeDropdown',
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
      metadata: [
        {name: 'keywords', content: 'cooking, blog'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
    }),
};

export default config;