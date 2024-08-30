import comp from "/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/faqs/index.html.vue"
const data = JSON.parse("{\"path\":\"/faqs/\",\"title\":\"Frequently Asked Questions\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"SvelteKit Error\",\"slug\":\"sveltekit-error\",\"link\":\"#sveltekit-error\",\"children\":[{\"level\":3,\"title\":\"Question\",\"slug\":\"question\",\"link\":\"#question\",\"children\":[]},{\"level\":3,\"title\":\"Solution\",\"slug\":\"solution\",\"link\":\"#solution\",\"children\":[]}]}],\"git\":{\"updatedTime\":1632406414000,\"contributors\":[{\"name\":\"Andrew Stacy\",\"email\":\"astacy@stratacache.com\",\"commits\":2}]},\"filePathRelative\":\"faqs/README.md\"}")
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
