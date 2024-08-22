import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/.vuepress/addons/official-addons.html.vue';
const data = JSON.parse(
  '{"path":"/.vuepress/addons/official-addons.html","title":"Official Add-on\'s","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"@adze/security-validator","slug":"adze-security-validator","link":"#adze-security-validator","children":[]},{"level":2,"title":"@adze/transport-cloudwatch-logs","slug":"adze-transport-cloudwatch-logs","link":"#adze-transport-cloudwatch-logs","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":".vuepress/addons/official-addons.md"}'
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
