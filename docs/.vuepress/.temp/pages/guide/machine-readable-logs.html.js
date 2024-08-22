import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/guide/machine-readable-logs.html.vue';
const data = JSON.parse(
  '{"path":"/guide/machine-readable-logs.html","title":"Machine Readable Logs","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Common Usage","slug":"common-usage","link":"#common-usage","children":[]}],"git":{"updatedTime":1719584554000,"contributors":[{"name":"Andrew Stacy","email":"ajstacy@gmail.com","commits":2}]},"filePathRelative":"guide/machine-readable-logs.md"}'
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
