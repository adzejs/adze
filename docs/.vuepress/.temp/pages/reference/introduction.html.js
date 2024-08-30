import comp from "/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/reference/introduction.html\",\"title\":\"Introduction & Lifecycle\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Lifecycle\",\"slug\":\"lifecycle\",\"link\":\"#lifecycle\",\"children\":[{\"level\":3,\"title\":\"Lifecycle Diagram\",\"slug\":\"lifecycle-diagram\",\"link\":\"#lifecycle-diagram\",\"children\":[]},{\"level\":3,\"title\":\"Explanation\",\"slug\":\"explanation\",\"link\":\"#explanation\",\"children\":[]}]}],\"git\":{\"updatedTime\":1724702918000,\"contributors\":[{\"name\":\"Andrew Stacy\",\"email\":\"astacy@stratacache.com\",\"commits\":1}]},\"filePathRelative\":\"reference/introduction.md\"}")
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
