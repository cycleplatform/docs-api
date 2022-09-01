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
  // themes: ["@docusaurus/theme-search-algolia"],
  themeConfig: {
    // defaultMode: "dark",
    // respectPrefersColorScheme: false,
    // hideableSidebar: true,
    algolia: {
      apiKey: "e3d876b635908b0ab9c420076449e467",
      indexName: "api-docs",
      appId: "3IWTY7DLF6",
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
        },
        {
          label: "Internal REST API Documentation",
          position: "left",
          href: "/internal-api",
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
            spec: `${__dirname}/api/public-api.yml`,
            route: "/api/",
          },
          {
            spec: `${__dirname}/internal-api/internal-api.yml`,
            route: "/internal-api/",
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
