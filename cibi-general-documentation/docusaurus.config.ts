import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "C I B I",
  tagline: "Code Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://RusselG21.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/CIBI_General_Documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CIBI", // Usually your GitHub org/user name.
  projectName: "cibi-general-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/RusselG21/CIBI_General_Documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/RusselG21/CIBI_General_Documentation",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/CIBI-LOGO.png",
    navbar: {
      title: "Documentation",
      logo: {
        alt: "My Site Logo",
        src: "img/CIBI-LOGO.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "CodeDocSidebar",
          position: "left",
          label: "Code Docs",
        },
        {
          type: "docSidebar",
          to: "/docs/user-docs",
          sidebarId: "UserDocSidebar",
          label: "User Docs",
          position: "left",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/RusselG21/CIBI_General_Documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Code Docs",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          // title: "Community",
          // items: [
          // {
          //   label: "Stack Overflow",
          //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
          // },
          // {
          //   label: "Discord",
          //   href: "https://discordapp.com/invite/docusaurus",
          // },
          // {
          //   label: "X",
          //   href: "https://x.com/docusaurus",
          // },
          // ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CIBI Project, Inc. Built with CIBI developers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
