export const siteData = JSON.parse(
  '{"base":"/","lang":"en-US","title":"Adze - Isomorphic Logging for JavaScript","description":"A modern, isomorphic, and extendable logging library for JavaScript and TypeScript.","head":[["meta",{"property":"og:title","content":"Adze - Better JavaScript Logging"}],["meta",{"property":"og:description","content":"A TypeScript enabled library with a beautiful API that simplifies JavaScript logging."}],["meta",{"property":"og:image","content":"https://adzejs.com/assets/img/demo.ce24f23e.png"}],["meta",{"property":"og:url","content":"https://www.adzejs.com/"}],["meta",{"property":"twitter:title","content":"Adze - Better JavaScript Logging"}],["meta",{"property":"twitter:description","content":"A TypeScript enabled library with a beautiful API that simplifies JavaScript logging."}],["meta",{"property":"twitter:image","content":"https://adzejs.com/assets/img/demo.ce24f23e.png"}],["meta",{"property":"twitter:card","content":"summary_large_image"}],["script",{"async":true,"defer":true,"data-domain":"adzejs.com","src":"https://plausible.io/js/plausible.js"}],["script",{"src":"https://cdn.jsdelivr.net/npm/adze/dist/adze.min.js"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com"}],["link",{"href":"https://fonts.googleapis.com/css2?family=Share&display=swap","rel":"stylesheet"}],["meta",{"name":"theme-color","content":"#3eaf7c"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["link",{"rel":"icon","type":"image/png","sizes":"64x64","href":"/favicon.png"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}]],"locales":{}}'
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  });
}
