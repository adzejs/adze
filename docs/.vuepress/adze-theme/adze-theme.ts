import { getDirname, path } from 'vuepress/utils';
import { createPage } from 'vuepress/core';

const __dirname = getDirname(import.meta.url);

const adzeTheme = (options) =>
  // returns a theme object
  ({
    name: 'vuepress-theme-adze',

    // path to the client config of your theme
    clientConfigFile: path.resolve(__dirname, 'client.js'),

    // set custom dev / build template
    // if the template is not specified, the default template
    templateBuild: path.resolve(__dirname, 'templates/build.html'),
    templateDev: path.resolve(__dirname, 'templates/dev.html'),

    // use plugins
    plugins: [
      // ...
    ],
    // all pages have been loaded after initialization
    async onInitialized(app) {
      // if the homepage does not exist
      if (app.pages.every((page) => page.path !== '/')) {
        // create a homepage
        const homepage = await createPage(app, {
          path: '/',
          // set frontmatter
          frontmatter: {
            layout: 'Layout',
          },
          // set markdown content
          content: `\
# Welcome to ${app.options.title}

This is the default homepage
`,
        });
        // add it to `app.pages`
        app.pages.push(homepage);
      }
    },
  });
export default adzeTheme;
