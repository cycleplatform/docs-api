const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Cycle API Docs",
  tagline: "Cycle.io API Documentation",
  url: "https://api.docs.cycle.io",
  // url: "localhost",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "imgs/cycle/logo/logo-gear.svg",
  organizationName: "cycleplatform", // Usually your GitHub org/user name.
  projectName: "docs-portal", // Usually your repo name.
  // themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig: {
    // defaultMode: "dark",
    // respectPrefersColorScheme: false,
    // hideableSidebar: true,
    algolia: {
      apiKey: "244e0078287a09c076d180a1ce1ae05a",
      indexName: "prod_portal",
      appId: "DV41ALWI3Z",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: "Cycle Logo",
        src: "imgs/cycle/logo/logo-white.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Websocket API Documentation",
        },
        {
          label: "REST API Documentation",
          position: "left",
          href: "/api",
          // items: [
          //   {
          //     href: "/api/",
          //     label: "Public API Docs Reference",
          //   },
          // {
          //   href: "https://docs.cycle.io/internal-api/introduction",
          //   label: "Internal API Docs",
          // },
          // ],
        },
        {
          label: "Portal Documentation",
          position: "left",
          href: "https://docs.cycle.io",
        },
        {
          href: "https://portal.cycle.io",
          label: "Portal Login",
          position: "right",
        },
        // {
        //   href: 'https://github.com/cycleplatform/docs-portal/',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Websocket API",
              to: "/docs/intro",
            },
            {
              label: "REST API",
              href: "https://docs.cycle.io/api/introduction",
            },
            // {
            //   label: "Internal API",
            //   href: "https://docs.cycle.io/internal-api/introduction",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://slack.cycle.io/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/cycleplatform",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/cycle-platform",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/cycleplatform",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              href: "https://cycle.io",
            },
            {
              label: "Portal Login",
              href: "https://portal.cycle.io",
            },
            // {
            //   label: "GitHub",
            //   href: "https://github.com/cycleplatform/docs-portal/tree/main",
            // },
            {
              label: "Status",
              href: "https://status.cycle.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Petrichor Holdings, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/cycleplatform/api-docs/tree/main",
        },

        theme: {
          customCss: [require.resolve("./src/css/fa-styles/all.css"), require.resolve("./src/css/base.css"), require.resolve("./src/css/lists.css"), require.resolve("./src/css/code.css"), require.resolve("./src/css/fonts.css")],
        },
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: `${__dirname}/api/out.yml`,
            route: "/api/",
            url: `https://static.cycle.io/apidocs/out.yml`,
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],
};

// // @ts-check
// // Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: "My Site",
//   tagline: "Dinosaurs are cool",
//   url: "https://your-docusaurus-test-site.com",
//   baseUrl: "/",
//   onBrokenLinks: "throw",
//   onBrokenMarkdownLinks: "warn",
//   favicon: "img/favicon.ico",

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: "facebook", // Usually your GitHub org/user name.
//   projectName: "docusaurus", // Usually your repo name.

//   // Even if you don't use internalization, you can use this field to set useful
//   // metadata like html lang. For example, if your site is Chinese, you may want
//   // to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: "en",
//     locales: ["en"],
//   },

//   presets: [
//     [
//       "classic",
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: require.resolve("./sidebars.js"),
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
//         },
//         blog: {
//           showReadingTime: true,
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
//         },

//         theme: {
//           customCss: require.resolve("./src/css/custom.css"),
//         },
//       }),
//     ],
//     [
//       "redocusaurus",
//       {
//         // Plugin Options for loading OpenAPI files
//         specs: [
//           {
//             spec: `${__dirname}/api/out.yml`,
//             route: "/api/",
//           },
//         ],
//         // Theme Options for modifying how redoc renders them
//         theme: {
//           // Change with your site colors
//           primaryColor: "#1890ff",
//         },
//       },
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       navbar: {
//         title: "My Site",
//         logo: {
//           alt: "My Site Logo",
//           src: "img/logo.svg",
//         },
//         items: [
//           {
//             type: "doc",
//             docId: "intro",
//             position: "left",
//             label: "Tutorial",
//           },
//           { to: "/blog", label: "Blog", position: "left" },
//           {
//             href: "https://github.com/facebook/docusaurus",
//             label: "GitHub",
//             position: "right",
//           },
//         ],
//       },
//       footer: {
//         style: "dark",
//         links: [
//           {
//             title: "Docs",
//             items: [
//               {
//                 label: "Tutorial",
//                 to: "/docs/intro",
//               },
//             ],
//           },
//           {
//             title: "Community",
//             items: [
//               {
//                 label: "Stack Overflow",
//                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
//               },
//               {
//                 label: "Discord",
//                 href: "https://discordapp.com/invite/docusaurus",
//               },
//               {
//                 label: "Twitter",
//                 href: "https://twitter.com/docusaurus",
//               },
//             ],
//           },
//           {
//             title: "More",
//             items: [
//               {
//                 label: "Blog",
//                 to: "/blog",
//               },
//               {
//                 label: "GitHub",
//                 href: "https://github.com/facebook/docusaurus",
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: lightCodeTheme,
//         darkTheme: darkCodeTheme,
//       },
//     }),
// };

// module.exports = config;
