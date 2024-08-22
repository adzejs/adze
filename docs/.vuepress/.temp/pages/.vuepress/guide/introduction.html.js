import comp from '/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/.vuepress/guide/introduction.html.vue';
const data = JSON.parse(
  '{"path":"/.vuepress/guide/introduction.html","title":"Introduction","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Why is this named Adze?","slug":"why-is-this-named-adze","link":"#why-is-this-named-adze","children":[]},{"level":2,"title":"Adze Demo","slug":"adze-demo","link":"#adze-demo","children":[]},{"level":2,"title":"Why should I use Adze?","slug":"why-should-i-use-adze","link":"#why-should-i-use-adze","children":[{"level":3,"title":"Here is a simple preview","slug":"here-is-a-simple-preview","link":"#here-is-a-simple-preview","children":[]}]},{"level":2,"title":"What does the API look like?","slug":"what-does-the-api-look-like","link":"#what-does-the-api-look-like","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":".vuepress/guide/introduction.md"}'
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
