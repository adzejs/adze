import comp from "/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/addons/official-addons.html.vue"
const data = JSON.parse("{\"path\":\"/addons/official-addons.html\",\"title\":\"Official Add-on's\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"@adze/security-validator\",\"slug\":\"adze-security-validator\",\"link\":\"#adze-security-validator\",\"children\":[]},{\"level\":2,\"title\":\"@adze/transport-cloudwatch-logs\",\"slug\":\"adze-transport-cloudwatch-logs\",\"link\":\"#adze-transport-cloudwatch-logs\",\"children\":[]}],\"git\":{\"updatedTime\":1655859292000,\"contributors\":[{\"name\":\"Andrew Stacy\",\"email\":\"ajstacy@gmail.com\",\"commits\":1},{\"name\":\"Andrew Stacy\",\"email\":\"astacy@stratacache.com\",\"commits\":1}]},\"filePathRelative\":\"addons/official-addons.md\"}")
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
