import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/get-started.html.vue';
const data = JSON.parse(
  '{"path":"/get-started.html","title":"","lang":"en-US","frontmatter":{"layout":"Home","home":true,"heroImage":"/logo.svg","heroText":"A Library for Shaping Your Logs","tagline":"Open the dev console for a demo","actionText":"Quick Start →","actionLink":"/guide/","features":[{"title":"Chainable API","image":"/chainsaw.svg","imageId":"chainsaw","details":"Write your logs as a chain of methods."},{"title":"Fully Configurable","image":"/lumberjack-bust.svg","imageId":"lumberjack-bust","details":"Every aspect of Adze is under your control."},{"title":"Log Listeners","image":"/logs-small.svg","imageId":"logs-small","details":"Log listeners give you control of your data."}]},"headers":[{"level":2,"title":"First Class TypeScript Support","slug":"first-class-typescript-support","link":"#first-class-typescript-support","children":[]},{"level":2,"title":"A Fluent, Chainable API","slug":"a-fluent-chainable-api","link":"#a-fluent-chainable-api","children":[]},{"level":2,"title":"Everything is Configurable","slug":"everything-is-configurable","link":"#everything-is-configurable","children":[]},{"level":2,"title":"Supports Browser and Node Environments","slug":"supports-browser-and-node-environments","link":"#supports-browser-and-node-environments","children":[]},{"level":2,"title":"Global Store and Overrides","slug":"global-store-and-overrides","link":"#global-store-and-overrides","children":[]},{"level":2,"title":"And much more...","slug":"and-much-more","link":"#and-much-more","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"get-started.md"}'
);
export { comp, data };

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
