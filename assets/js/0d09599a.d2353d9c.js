(self.webpackChunksite=self.webpackChunksite||[]).push([[8998],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),k=r,m=d["".concat(o,".").concat(k)]||d[k]||s[k]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8731:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l={title:"\u5fae\u524d\u7aef icestark",order:3},p={unversionedId:"guide/advanced/icestark",id:"guide/advanced/icestark",isDocsHomePage:!1,title:"\u5fae\u524d\u7aef icestark",description:"\u6846\u67b6\u5e94\u7528",source:"@site/docs/guide/advanced/icestark.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/icestark",permalink:"/docs/guide/advanced/icestark",editUrl:"https://github.com/ice-lab/site/edit/master/website/docs/guide/advanced/icestark.md",version:"current",frontMatter:{title:"\u5fae\u524d\u7aef icestark",order:3},sidebar:"docs",previous:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",permalink:"/docs/guide/advanced/ssr"},next:{title:"\u524d\u540e\u7aef\u4e00\u4f53\u5316 Serverless",permalink:"/docs/guide/advanced/faas"}},o=[{value:"\u6846\u67b6\u5e94\u7528",id:"\u6846\u67b6\u5e94\u7528",children:[{value:"\u6dfb\u52a0\u63d2\u4ef6 build-plugin-icestark",id:"\u6dfb\u52a0\u63d2\u4ef6-build-plugin-icestark",children:[]},{value:"\u5e94\u7528\u5165\u53e3\u6539\u9020",id:"\u5e94\u7528\u5165\u53e3\u6539\u9020",children:[]}]},{value:"\u5fae\u5e94\u7528",id:"\u5fae\u5e94\u7528",children:[{value:"\u6dfb\u52a0\u63d2\u4ef6 build-plugin-icestark",id:"\u6dfb\u52a0\u63d2\u4ef6-build-plugin-icestark-1",children:[]},{value:"\u5e94\u7528\u5165\u53e3\u6539\u9020",id:"\u5e94\u7528\u5165\u53e3\u6539\u9020-1",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u5982\u4f55\u76d1\u542c\u5fae\u5e94\u7528\u5207\u6362",id:"\u5982\u4f55\u76d1\u542c\u5fae\u5e94\u7528\u5207\u6362",children:[]},{value:"\u52a8\u6001\u4fee\u6539\u5fae\u5e94\u7528\u5217\u8868",id:"\u52a8\u6001\u4fee\u6539\u5fae\u5e94\u7528\u5217\u8868",children:[]},{value:"UMD \u89c4\u8303\u5fae\u5e94\u7528",id:"umd-\u89c4\u8303\u5fae\u5e94\u7528",children:[]}]}],c={toc:o};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6846\u67b6\u5e94\u7528"},"\u6846\u67b6\u5e94\u7528"),(0,i.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u5fae\u524d\u7aef\u7684\u6846\u67b6\u5e94\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init ice icestark-framework @icedesign/stark-layout-scaffold\n$ cd icestark-framework\n$ npm install\n$ npm start\n")),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u662f\u901a\u8fc7\u6a21\u677f\u521b\u5efa\uff0c\u5219\u9700\u8981\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u8fdb\u884c\u6539\u9020\uff1a"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u63d2\u4ef6-build-plugin-icestark"},"\u6dfb\u52a0\u63d2\u4ef6 build-plugin-icestark"),(0,i.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save-dev build-plugin-icestark\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"build.json")," \u91cc\u5f15\u5165\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    ["build-plugin-icestark", {\n      // \u9632\u6b62\u4e0e\u5fae\u5e94\u7528\u7684 webpackJSONP \u51b2\u7a81\n      "uniqueName": "frameworkJsonp"\n    }],\n    ["build-plugin-fusion", {\n      "themeConfig": {\n        // \u9632\u6b62\u4e0e\u5fae\u5e94\u7528\u91cc\u7684\u57fa\u7840\u7ec4\u4ef6 css prefix \u51b2\u7a81\n        "css-prefix": "next-icestark-"\n      }\n    }],\n  }\n}\n')),(0,i.kt)("h3",{id:"\u5e94\u7528\u5165\u53e3\u6539\u9020"},"\u5e94\u7528\u5165\u53e3\u6539\u9020"),(0,i.kt)("p",null,"\u5e94\u7528\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u914d\u7f6e\u6846\u67b6\u5e94\u7528\u7684\u4e00\u4e9b\u8fd0\u884c\u65f6\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp } from 'ice'\n+import { ConfigProvider } from '@alifd/next';\n+import NotFound from '@/components/NotFound';\n+import BasicLayout from '@/layouts/BasicLayout';\n\nconst appConfig = {\n  app: {\n    rootId: 'ice-container',\n+    addProvider: ({ children }) => (\n+      <ConfigProvider prefix=\"next-icestark-\">{children}</ConfigProvider>\n+    ),\n  },\n  router: {\n+    type: 'browser',\n  },\n  icestark: {\n+    type: 'framework',\n+    Layout: BasicLayout,\n+    getApps: async () => {\n+      const apps = [{\n+        path: '/seller',\n+        title: '\u5546\u5bb6\u5e73\u53f0',\n+        url: [\n+          '//ice.alicdn.com/icestark/child-seller-react/index.js',\n+          '//ice.alicdn.com/icestark/child-seller-react/index.css',\n+        ],\n+      }];\n+      return apps;\n+    },\n+    appRouter: {\n+      NotFoundComponent: NotFound,\n+    },\n  },\n};\n\nrunApp(appConfig);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.icestark")," \u5b8c\u6574\u7684\u914d\u7f6e\u9879\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string, framework|child"),(0,i.kt)("li",{parentName:"ul"},"Layout: Component, \u7cfb\u7edf\u5bf9\u5e94\u7684\u5e03\u5c40\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"getApps: function\uff0c\u83b7\u53d6\u6240\u6709\u5fae\u5e94\u7528\u6570\u636e\uff0c\u5355\u4e2a\u5fae\u5e94\u7528\u7684\u5b8c\u6574\u914d\u7f6e\u5b57\u6bb5\u8bf7\u53c2\u8003 icestark \u6587\u6863"),(0,i.kt)("li",{parentName:"ul"},"appRouter:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NotFoundComponent: 404 \u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"LoadingComponent: \u5e94\u7528\u5207\u6362\u65f6\u7684 Loading \u7ec4\u4ef6")))),(0,i.kt)("h2",{id:"\u5fae\u5e94\u7528"},"\u5fae\u5e94\u7528"),(0,i.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u5fae\u5e94\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5fae\u5e94\u7528\n$ npm init ice icestark-child @icedesign/stark-child-scaffold\n$ cd icestark-child\n$ npm install\n$ npm start\n")),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u662f\u901a\u8fc7\u6a21\u677f\u521b\u5efa\uff0c\u5219\u9700\u8981\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u8fdb\u884c\u6539\u9020\uff1a"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u63d2\u4ef6-build-plugin-icestark-1"},"\u6dfb\u52a0\u63d2\u4ef6 build-plugin-icestark"),(0,i.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save-dev build-plugin-icestark\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"build.json")," \u91cc\u5f15\u5165\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    ["build-plugin-icestark", {\n      "umd": true\n    }]\n  }\n}\n')),(0,i.kt)("h3",{id:"\u5e94\u7528\u5165\u53e3\u6539\u9020-1"},"\u5e94\u7528\u5165\u53e3\u6539\u9020"),(0,i.kt)("p",null,"\u5728\u5e94\u7528\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u914d\u7f6e\u5fae\u5e94\u7528\u76f8\u5173\u7684\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp } from 'ice'\n\nconst appConfig = {\n  app: {\n    rootId: 'ice-container',\n  },\n  router: {\n+    type: 'browser',\n  },\n  icestark: {\n+    type: 'child',\n  },\n};\n\nrunApp(appConfig)\n")),(0,i.kt)("p",null,"\u53ea\u9700\u8981\u8fd9\u4e48\u7b80\u5355\uff0c\u4f60\u7684 SPA \u5e94\u7528\u5c31\u53ef\u4ee5\u53d8\u6210\u5fae\u5e94\u7528\u4e86\u3002"),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"\u5982\u4f55\u76d1\u542c\u5fae\u5e94\u7528\u5207\u6362"},"\u5982\u4f55\u76d1\u542c\u5fae\u5e94\u7528\u5207\u6362"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"icestark")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"onRouteChange"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onAppEnter")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"onAppLeave")," \u6765\u76d1\u542c\u5fae\u5e94\u7528\u95f4\u7684\u5207\u6362\uff0c\u5728 icejs \u7814\u53d1\u6846\u67b6\u4e0b\u53ef\u4ee5\u901a\u8fc7\u5728\u5bf9\u5e94\u7684 Layout \u4e2d\u5b9e\u73b0\u76f8\u5173\u94a9\u5b50\u7684\u76d1\u542c\u3002Layout \u4e2d\u63a5\u6536 props \u5c5e\u6027\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pathname\uff1a\u5fae\u5e94\u7528\u8def\u7531\u5207\u6362\u4fe1\u606f\uff0c\u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"li"},"onRouteChange")),(0,i.kt)("li",{parentName:"ul"},"appEnter\uff1a\u6e32\u67d3\u5fae\u5e94\u7528\u7684\u4fe1\u606f\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"onAppEnter")),(0,i.kt)("li",{parentName:"ul"},"appLeave\uff1a\u5378\u8f7d\u5fae\u5e94\u7528\u7684\u4fe1\u606f\uff0c\u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"li"},"onAppLeave"))),(0,i.kt)("p",null,"\u5728 Layout \u4f7f\u7528\u76f8\u5173\u5c5e\u6027\u65f6\uff0c\u7ed3\u5408\u5bf9\u5e94\u5c5e\u6027\u662f\u5426\u53d1\u751f\u53d8\u66f4\u6765\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nconst BasicLayout = ({ pathname, appLeave, appEnter, children }) => {\n  useEffect(() => {\n    console.log(`\u5fae\u5e94\u7528\u8def\u7531\u53d1\u751f\u53d8\u5316\uff1a${pathname}`);\n  }, [pathname]);\n\n  useEffect(() => {\n    console.log(`\u5378\u8f7d\u5fae\u5e94\u7528\uff1a${appLeave.path}`);\n  }, [appLeave]);\n\n  useEffect(() => {\n    console.log(`\u6e32\u67d3\u5fae\u5e94\u7528\uff1a${appEnter.path}`);\n  }, [appEnter]);\n\n  return (\n    <div>\n      {children}\n    </div>\n  );\n};\n")),(0,i.kt)("h3",{id:"\u52a8\u6001\u4fee\u6539\u5fae\u5e94\u7528\u5217\u8868"},"\u52a8\u6001\u4fee\u6539\u5fae\u5e94\u7528\u5217\u8868"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u5fae\u5e94\u7528\u5217\u8868\u53ef\u4ee5\u5982\u4e0a\u6587\u4ecb\u7ecd\u5728\u5e94\u7528\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"getApps")," \u5c5e\u6027\u5373\u53ef\uff0c\u5982\u679c\u9700\u8981\u52a8\u6001\u4fee\u6539\u5fae\u5e94\u7528\u5217\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7 Layout \u63a5\u6536\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"updateApps")," \u5c5e\u6027\u8fdb\u884c\u4fee\u6539\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const BasicLayout = ({ updateApps, children }) => {\n  useEffect(() => {\n    updateApps([{\n      path: '/seller',\n      title: '\u5546\u5bb6\u5e73\u53f0',\n      url: [\n        '//ice.alicdn.com/icestark/child-seller-react/index.js',\n        '//ice.alicdn.com/icestark/child-seller-react/index.css',\n      ],\n    }]);\n  }, []);\n\n  return (\n    <div>\n      {children}\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"umd-\u89c4\u8303\u5fae\u5e94\u7528"},"UMD \u89c4\u8303\u5fae\u5e94\u7528"),(0,i.kt)("p",null,"icestark \u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"1.6.0")," \u5f00\u59cb\u652f\u6301\u5e76\u63a8\u8350\u4f7f\u7528 UMD \u89c4\u8303\u7684\u5fae\u5e94\u7528\uff0c\u5728\u5fae\u5e94\u7528\u5c42\u9762\u53ef\u4ee5\u66f4\u5c11\u7684\u964d\u4f4e\u8ddf\u4e3b\u5e94\u7528\u7684\u8026\u5408\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5fae\u5e94\u7528\u4f9d\u8d56\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"build-plugin-icestark")," \u7248\u672c\u9700\u8981\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"2.0.0")," \u624d\u80fd\u652f\u6301\u6784\u5efa\u51fa UMD \u89c4\u8303\u7684\u5fae\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528\u4f9d\u8d56\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"@ice/stark")," \u7248\u672c\u9700\u8981\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"1.6.0")," \u624d\u80fd\u652f\u6301\u6e32\u67d3 UMD \u89c4\u8303\u7684\u5fae\u5e94\u7528")),(0,i.kt)("h4",{id:"\u5fae\u5e94\u7528\u5bfc\u51fa-umd-\u89c4\u8303\u7684\u4ea7\u7269"},"\u5fae\u5e94\u7528\u5bfc\u51fa UMD \u89c4\u8303\u7684\u4ea7\u7269"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u914d\u7f6e umd \u5c5e\u6027\u5373\u53ef\u5bfc\u51fa\u6807\u51c6 UMD \u89c4\u8303\u7684\u5fae\u5e94\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    ["build-plugin-icestark", {\n      "umd": true\n    }]\n  ]\n}\n')))}u.isMDXComponent=!0}}]);