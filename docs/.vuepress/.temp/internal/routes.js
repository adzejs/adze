export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":""} }],
  ["/addons/creating-addons.html", { loader: () => import(/* webpackChunkName: "addons_creating-addons.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/addons/creating-addons.html.js"), meta: {"title":"Creating Add-on's"} }],
  ["/addons/official-addons.html", { loader: () => import(/* webpackChunkName: "addons_official-addons.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/addons/official-addons.html.js"), meta: {"title":"Official Add-on's"} }],
  ["/getting-started/annotation.html", { loader: () => import(/* webpackChunkName: "getting-started_annotation.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/annotation.html.js"), meta: {"title":"Annotating Logs"} }],
  ["/getting-started/capture-data.html", { loader: () => import(/* webpackChunkName: "getting-started_capture-data.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/capture-data.html.js"), meta: {"title":"Capturing Log Data"} }],
  ["/getting-started/concepts.html", { loader: () => import(/* webpackChunkName: "getting-started_concepts.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/concepts.html.js"), meta: {"title":"Concepts"} }],
  ["/getting-started/configuration.html", { loader: () => import(/* webpackChunkName: "getting-started_configuration.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/configuration.html.js"), meta: {"title":"Configuration"} }],
  ["/getting-started/filtering.html", { loader: () => import(/* webpackChunkName: "getting-started_filtering.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/filtering.html.js"), meta: {"title":"Filtering Logs"} }],
  ["/getting-started/global-store.html", { loader: () => import(/* webpackChunkName: "getting-started_global-store.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/global-store.html.js"), meta: {"title":"Global Store"} }],
  ["/getting-started/installation.html", { loader: () => import(/* webpackChunkName: "getting-started_installation.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/installation.html.js"), meta: {"title":"Installing Adze"} }],
  ["/getting-started/introduction.html", { loader: () => import(/* webpackChunkName: "getting-started_introduction.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/getting-started/log-class.html", { loader: () => import(/* webpackChunkName: "getting-started_log-class.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/log-class.html.js"), meta: {"title":"Adze Class"} }],
  ["/getting-started/putting-it-all-together.html", { loader: () => import(/* webpackChunkName: "getting-started_putting-it-all-together.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/putting-it-all-together.html.js"), meta: {"title":"Putting It All Together"} }],
  ["/getting-started/setup.html", { loader: () => import(/* webpackChunkName: "getting-started_setup.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/setup.html.js"), meta: {"title":"Setting Up Adze"} }],
  ["/getting-started/threading.html", { loader: () => import(/* webpackChunkName: "getting-started_threading.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/threading.html.js"), meta: {"title":"Log Threading (MDC)"} }],
  ["/getting-started/tools.html", { loader: () => import(/* webpackChunkName: "getting-started_tools.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/getting-started/tools.html.js"), meta: {"title":"Tools"} }],
  ["/reference/configuration.html", { loader: () => import(/* webpackChunkName: "reference_configuration.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/configuration.html.js"), meta: {"title":"Configuration"} }],
  ["/reference/data.html", { loader: () => import(/* webpackChunkName: "reference_data.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/data.html.js"), meta: {"title":"Data"} }],
  ["/reference/filtering-and-utility-functions.html", { loader: () => import(/* webpackChunkName: "reference_filtering-and-utility-functions.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/filtering-and-utility-functions.html.js"), meta: {"title":"Filtering & Utility Functions"} }],
  ["/reference/formatters.html", { loader: () => import(/* webpackChunkName: "reference_formatters.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/formatters.html.js"), meta: {"title":"Formatters"} }],
  ["/reference/getters-and-setters.html", { loader: () => import(/* webpackChunkName: "reference_getters-and-setters.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/getters-and-setters.html.js"), meta: {"title":"Getters and Setters"} }],
  ["/reference/global-store.html", { loader: () => import(/* webpackChunkName: "reference_global-store.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/global-store.html.js"), meta: {"title":"Global Store"} }],
  ["/reference/globalstore-concepts.html", { loader: () => import(/* webpackChunkName: "reference_globalstore-concepts.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/globalstore-concepts.html.js"), meta: {"title":"GlobalStore Concepts"} }],
  ["/reference/introduction.html", { loader: () => import(/* webpackChunkName: "reference_introduction.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/introduction.html.js"), meta: {"title":"Introduction & Lifecycle"} }],
  ["/reference/log-class.html", { loader: () => import(/* webpackChunkName: "reference_log-class.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/log-class.html.js"), meta: {"title":"Log Class"} }],
  ["/reference/machine-readable-logs.html", { loader: () => import(/* webpackChunkName: "reference_machine-readable-logs.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/machine-readable-logs.html.js"), meta: {"title":"Machine Readable Logs"} }],
  ["/reference/mapped-diagnostic-context.html", { loader: () => import(/* webpackChunkName: "reference_mapped-diagnostic-context.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/mapped-diagnostic-context.html.js"), meta: {"title":"Mapped Diagnostic Context (MDC)"} }],
  ["/reference/micro-frontends.html", { loader: () => import(/* webpackChunkName: "reference_micro-frontends.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/micro-frontends.html.js"), meta: {"title":"Micro-Frontends"} }],
  ["/reference/middleware.html", { loader: () => import(/* webpackChunkName: "reference_middleware.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/middleware.html.js"), meta: {"title":"Middleware"} }],
  ["/reference/modifiers.html", { loader: () => import(/* webpackChunkName: "reference_modifiers.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/modifiers.html.js"), meta: {"title":"Modifiers"} }],
  ["/reference/other-terminators.html", { loader: () => import(/* webpackChunkName: "reference_other-terminators.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/other-terminators.html.js"), meta: {"title":"Other Terminators"} }],
  ["/reference/shed-concepts.html", { loader: () => import(/* webpackChunkName: "reference_shed-concepts.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/shed-concepts.html.js"), meta: {"title":"GlobalStore Concepts"} }],
  ["/reference/terminators.html", { loader: () => import(/* webpackChunkName: "reference_terminators.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/terminators.html.js"), meta: {"title":"Terminators"} }],
  ["/reference/tools.html", { loader: () => import(/* webpackChunkName: "reference_tools.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/tools.html.js"), meta: {"title":"Tools"} }],
  ["/reference/unit-testing.html", { loader: () => import(/* webpackChunkName: "reference_unit-testing.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/unit-testing.html.js"), meta: {"title":"Unit Testing"} }],
  ["/reference/using-globalstore.html", { loader: () => import(/* webpackChunkName: "reference_using-globalstore.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/reference/using-globalstore.html.js"), meta: {"title":"Using GlobalStore"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/andrewstacy/Projects/personal/adze/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
