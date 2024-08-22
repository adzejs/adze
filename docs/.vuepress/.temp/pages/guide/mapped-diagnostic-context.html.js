import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/guide/mapped-diagnostic-context.html.vue';
const data = JSON.parse(
  '{"path":"/guide/mapped-diagnostic-context.html","title":"Mapped Diagnostic Context (MDC)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"What is Mapped Diagnostic Context?","slug":"what-is-mapped-diagnostic-context","link":"#what-is-mapped-diagnostic-context","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Output","slug":"output","link":"#output","children":[]}],"git":{"updatedTime":1672257710000,"contributors":[{"name":"Andrew Stacy","email":"ajstacy@gmail.com","commits":1},{"name":"Andrew Stacy","email":"andrew@andrews.mbp.lan","commits":1}]},"filePathRelative":"guide/mapped-diagnostic-context.md"}'
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
