function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a2 as o,a3 as p,a4 as u,a5 as l,a6 as c,C as f,a7 as d,a8 as m,a9 as h,aa as A,ab as g,ac as P,x as _,e as v,J as C,k as R,ad as w,ae as y,af as E,z as b}from"./chunks/framework.C7vVICs1.js";import{R as T}from"./chunks/theme.B9hunA3y.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return C(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),y(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(S)}function L(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
