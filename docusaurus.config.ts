import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BeringinHub Reading Space',
  tagline: 'Empowering Builders Through Knowledge',
  favicon: 'img/logo.png',

  // Update with your custom domain
  url: 'https://oasis.beringinhub.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'BeringinHub',
  projectName: 'reading-list',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/BeringinHub/reading-list/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/docs/resources/**'],
          filename: 'sitemap.xml',
        },
        // Add SEO plugin configuration
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics tracking ID
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'og:title', content: 'BeringinHub Reading Space - Empowering Builders Through Knowledge'},
      {name: 'og:description', content: 'Kumpulan buku berkualitas untuk membantu Anda mengembangkan diri dalam produktivitas dan membangun usaha.'},
      {name: 'og:image', content: 'img/logo.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'BeringinHub Reading Space'},
      {name: 'twitter:description', content: 'Kumpulan buku berkualitas untuk membantu Anda mengembangkan diri dalam produktivitas dan membangun usaha.'},
      {name: 'keywords', content: 'buku produktivitas, buku bisnis, artificial intelligence, marketing intelligence, pengembangan diri, startup, ukm'},
      {name: 'description', content: 'Kumpulan buku berkualitas untuk membantu Anda mengembangkan diri dalam produktivitas dan membangun usaha. Pelajari AI, marketing, bisnis, dan lebih banyak lagi.'},
    ],
    image: 'img/logo.png',
    navbar: {
      title: 'BeringinHub Reading Space',
      logo: {
        alt: 'BeringinHub Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/',
          label: 'Beranda',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Daftar Buku',
        },
        {
          to: '/newsletters',
          label: 'Newsletters',
          position: 'left',
        },
        {
          href: 'https://apps.beringinhub.com',
          label: 'Platform',
          position: 'right',
        },
        {
          href: 'https://blog.beringinhub.com',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/BeringinHub/reading-list',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Daftar Buku',
              to: '/docs/intro',
            },
            {
              label: 'Newsletters',
              to: '/newsletters',
            },
          ],
        },
        {
          title: 'BeringinHub',
          items: [
            {
              label: 'Platform',
              href: 'https://apps.beringinhub.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.beringinhub.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/BeringinHub/reading-list',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reading List, BeringinHub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Mobile configuration
    mobile: {
      autoCollapseCategories: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config; 