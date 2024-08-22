import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/advanced.html.vue';
const data = JSON.parse(
  '{"path":"/getting-started/advanced.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"getting-started/advanced.md"}'
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
