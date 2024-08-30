import comp from "/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/addons/creating-addons.html.vue"
const data = JSON.parse("{\"path\":\"/addons/creating-addons.html\",\"title\":\"Creating Add-on's\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Best Practices\",\"slug\":\"best-practices\",\"link\":\"#best-practices\",\"children\":[]},{\"level\":2,\"title\":\"Add-on Example\",\"slug\":\"add-on-example\",\"link\":\"#add-on-example\",\"children\":[]}],\"git\":{\"updatedTime\":1719584554000,\"contributors\":[{\"name\":\"Andrew Stacy\",\"email\":\"ajstacy@gmail.com\",\"commits\":2},{\"name\":\"Andrew Stacy\",\"email\":\"astacy@stratacache.com\",\"commits\":1}]},\"filePathRelative\":\"addons/creating-addons.md\"}")
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
