import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/annotation.html.vue';
const data = JSON.parse(
  '{"path":"/getting-started/annotation.html","title":"Annotating Logs","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Using Namespaces","slug":"using-namespaces","link":"#using-namespaces","children":[]},{"level":2,"title":"Using Labels","slug":"using-labels","link":"#using-labels","children":[]}],"git":{"updatedTime":1724360151000,"contributors":[{"name":"Andrew Stacy","email":"astacy@stratacache.com","commits":1}]},"filePathRelative":"getting-started/annotation.md"}'
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
