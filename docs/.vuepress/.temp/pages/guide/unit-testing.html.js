import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/guide/unit-testing.html.vue';
const data = JSON.parse(
  '{"path":"/guide/unit-testing.html","title":"Unit Testing","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"URL Parameter Override","slug":"url-parameter-override","link":"#url-parameter-override","children":[]}],"git":{"updatedTime":1618167626000,"contributors":[{"name":"Andrew Stacy","email":"astacy@stratacache.com","commits":1}]},"filePathRelative":"guide/unit-testing.md"}'
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
