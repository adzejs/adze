import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/configuration.html.vue';
const data = JSON.parse(
  '{"path":"/getting-started/configuration.html","title":"Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Set the Active Log Level","slug":"set-the-active-log-level","link":"#set-the-active-log-level","children":[]},{"level":2,"title":"Set the Output Format","slug":"set-the-output-format","link":"#set-the-output-format","children":[]},{"level":2,"title":"Create a Custom Log Level","slug":"create-a-custom-log-level","link":"#create-a-custom-log-level","children":[]}],"git":{"updatedTime":1724360151000,"contributors":[{"name":"Andrew Stacy","email":"astacy@stratacache.com","commits":1}]},"filePathRelative":"getting-started/configuration.md"}'
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
