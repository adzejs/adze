import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/.vuepress/faqs/index.html.vue';
const data = JSON.parse(
  '{"path":"/.vuepress/faqs/","title":"Frequently Asked Questions","lang":"en-US","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"SvelteKit Error","slug":"sveltekit-error","link":"#sveltekit-error","children":[{"level":3,"title":"Question","slug":"question","link":"#question","children":[]},{"level":3,"title":"Solution","slug":"solution","link":"#solution","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":".vuepress/faqs/README.md"}'
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
