import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/.vuepress/addons/creating-addons.html.vue';
const data = JSON.parse(
  '{"path":"/.vuepress/addons/creating-addons.html","title":"Creating Add-on\'s","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Best Practices","slug":"best-practices","link":"#best-practices","children":[]},{"level":2,"title":"Add-on Example","slug":"add-on-example","link":"#add-on-example","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":".vuepress/addons/creating-addons.md"}'
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
