import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/machine-readable-logs.html.vue';
const data = JSON.parse(
  '{"path":"/getting-started/machine-readable-logs.html","title":"Machine Readable Logs","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Common Usage","slug":"common-usage","link":"#common-usage","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"getting-started/machine-readable-logs.md"}'
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
