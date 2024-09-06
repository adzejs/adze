import { defineClientConfig } from 'vuepress/client';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // - Register a global component
    // app.component('MyComponent', MyComponent);
    // - If you need to do non-SSR friendly stuff
    // if (!__VUEPRESS_SSR__) {
    //   const nonSsrFriendlyModule = await import('non-ssr-friendly-module')
    //   // ...
    // }
    // - If you need to use router hooks
    // router.beforeEach((to) => {
    //   console.log('before navigation')
    // })
    // router.afterEach((to) => {
    //   console.log('after navigation')
    // })
  },
  setup() {
    // The setup function of the root Vue component.
    // - get the current route location
    // const route = useRoute();
    // - get the vue-router instance
    // const router = useRouter();
    // - provide a value that can be injected by layouts, pages and other components
    // const count = ref(0);
    // provide('count', count);
    // - to use non-SSR friendly features
    // onMounted(() => {
    //   // use DOM API after mounted
    //   document.querySelector('#app')
    // })
  },
  // These can be called by the "layout" frontmatter field
  layouts: {
    Layout,
    NotFound,
  },
  // Place components into the root node of the client vue app. For global UI components.
  rootComponents: [],
});
