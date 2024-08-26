import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/tools.html.vue';
const data = JSON.parse(
  '{"path":"/getting-started/tools.html","title":"Tools","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Browser Tools","slug":"browser-tools","link":"#browser-tools","children":[]},{"level":2,"title":"Terminal Tools","slug":"terminal-tools","link":"#terminal-tools","children":[]}],"git":{"updatedTime":1724360151000,"contributors":[{"name":"Andrew Stacy","email":"astacy@stratacache.com","commits":1}]},"filePathRelative":"getting-started/tools.md"}'
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
