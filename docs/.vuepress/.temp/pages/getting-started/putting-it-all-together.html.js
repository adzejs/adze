import comp from "/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/putting-it-all-together.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started/putting-it-all-together.html\",\"title\":\"Putting It All Together\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Production Example\",\"slug\":\"production-example\",\"link\":\"#production-example\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"getting-started/putting-it-all-together.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
