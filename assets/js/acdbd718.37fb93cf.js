(self.webpackChunksite=self.webpackChunksite||[]).push([[8676],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4867:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),p={title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",order:1},l={unversionedId:"plugin/develop/start",id:"plugin/develop/start",isDocsHomePage:!1,title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",description:"icejs \u57fa\u4e8e\u5de5\u7a0b\u6784\u5efa\u5de5\u5177 build-scripts \u5c01\u88c5\uff0c\u56e0\u6b64\u5728\u63d2\u4ef6\u80fd\u529b\u4e0a\u4e5f\u5b8c\u6574\u7ee7\u627f\u4e86 build-scripts\u3002\u9664\u4e86\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b\u4ee5\u5916\uff0cicejs \u8fd8\u4e3a\u63d2\u4ef6\u6269\u5c55\u4e86\u8fd0\u884c\u65f6\u5b9a\u5236\u7684\u80fd\u529b\uff0c\u8fd9\u8ba9\u63d2\u4ef6\u62e5\u6709\u66f4\u591a\u7684\u60f3\u8c61\u7a7a\u95f4\u3002\u63d2\u4ef6\u673a\u5236\u662f icejs \u7684\u6838\u5fc3\u4e4b\u4e00\uff0c\u5f53\u524d icejs \u7684\u57fa\u7840\u80fd\u529b\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u3002\u63d2\u4ef6\u673a\u5236\u4e0d\u4f46\u53ef\u4ee5\u4fdd\u8bc1\u6846\u67b6\u6838\u5fc3\u8db3\u591f\u7cbe\u7b80\u548c\u7a33\u5b9a\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5bf9\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6\u7684\u80fd\u529b\u8fdb\u884c\u5c01\u88c5\u590d\u7528\uff0c\u6700\u7ec8\u6253\u9020\u4e00\u4e2a\u5b8c\u6574\u7684\u751f\u6001\u3002",source:"@site/docs/plugin/develop/start.md",sourceDirName:"plugin/develop",slug:"/plugin/develop/start",permalink:"/docs/plugin/develop/start",editUrl:"https://github.com/ice-lab/site/edit/master/website/docs/plugin/develop/start.md",version:"current",frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",order:1},sidebar:"plugin",previous:{title:"dynamic-load-assets",permalink:"/docs/plugin/list/load-assets"},next:{title:"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b",permalink:"/docs/plugin/develop/build"}},o=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"\u63d2\u4ef6\u76ee\u5f55",id:"\u63d2\u4ef6\u76ee\u5f55",children:[]},{value:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236",id:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236",children:[]},{value:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236",id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236",children:[]},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",children:[]},{value:"\u63d2\u4ef6\u5f00\u53d1\u793a\u4f8b",id:"\u63d2\u4ef6\u5f00\u53d1\u793a\u4f8b",children:[{value:"\u7c7b\u578b\u548c\u6269\u5c55",id:"\u7c7b\u578b\u548c\u6269\u5c55",children:[]},{value:"\u5de5\u7a0b\u5316\u80fd\u529b\u5b9e\u73b0",id:"\u5de5\u7a0b\u5316\u80fd\u529b\u5b9e\u73b0",children:[]},{value:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9e\u73b0",id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9e\u73b0",children:[]}]},{value:"\u793a\u4f8b\u63d2\u4ef6",id:"\u793a\u4f8b\u63d2\u4ef6",children:[]}],s={toc:o};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"icejs \u57fa\u4e8e\u5de5\u7a0b\u6784\u5efa\u5de5\u5177 build-scripts \u5c01\u88c5\uff0c\u56e0\u6b64\u5728\u63d2\u4ef6\u80fd\u529b\u4e0a\u4e5f\u5b8c\u6574\u7ee7\u627f\u4e86 build-scripts\u3002\u9664\u4e86\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b\u4ee5\u5916\uff0cicejs \u8fd8\u4e3a\u63d2\u4ef6\u6269\u5c55\u4e86\u8fd0\u884c\u65f6\u5b9a\u5236\u7684\u80fd\u529b\uff0c\u8fd9\u8ba9\u63d2\u4ef6\u62e5\u6709\u66f4\u591a\u7684\u60f3\u8c61\u7a7a\u95f4\u3002\u63d2\u4ef6\u673a\u5236\u662f icejs \u7684\u6838\u5fc3\u4e4b\u4e00\uff0c\u5f53\u524d icejs \u7684\u57fa\u7840\u80fd\u529b\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u3002\u63d2\u4ef6\u673a\u5236\u4e0d\u4f46\u53ef\u4ee5\u4fdd\u8bc1\u6846\u67b6\u6838\u5fc3\u8db3\u591f\u7cbe\u7b80\u548c\u7a33\u5b9a\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5bf9\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6\u7684\u80fd\u529b\u8fdb\u884c\u5c01\u88c5\u590d\u7528\uff0c\u6700\u7ec8\u6253\u9020\u4e00\u4e2a\u5b8c\u6574\u7684\u751f\u6001\u3002"),(0,i.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,i.kt)("p",null,"\u4f7f\u7528 CLI \u521d\u59cb\u5316\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm init ice <your-plugin-name> # \u9009\u62e9\u63d2\u4ef6\u7c7b\u578b\n")),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u76ee\u5f55"},"\u63d2\u4ef6\u76ee\u5f55"),(0,i.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u63d2\u4ef6\u901a\u8fc7 npm \u5305\u7684\u5f62\u5f0f\u5206\u53d1\uff0c\u63d2\u4ef6\u521d\u59cb\u5316\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.[t,j]s # \u63d2\u4ef6\u5de5\u7a0b\u5165\u53e3\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime.[t,j]s # \u63d2\u4ef6\u7f16\u8bd1\u65f6\u5165\u53e3\n\u251c\u2500\u2500 tests # \u6d4b\u8bd5\u6587\u4ef6\u76ee\u5f55\n\u251c\u2500\u2500 package.json # npm \u5305\u914d\u7f6e\n\u251c\u2500\u2500 tsconfig.json # typescript \u914d\u7f6e\u6587\u4ef6\n\u2514\u2500\u2500 README.md # \u8bf4\u660e\u6587\u6863\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5 ts \u4e3a\u4f8b\uff0c\u5b9e\u9645\u4e0a\u4e5f\u53ef\u4ee5\u901a\u8fc7 js \u7f16\u5199\u63d2\u4ef6\u3002 ts \u6700\u7ec8\u5e94\u7f16\u8bd1\u4e3a js \u4ee5\u53d1\u5e03 npm \u5305\u3002\u63d2\u4ef6\u6838\u5fc3\u6709\u4e24\u4e2a\u6587\u4ef6\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"index.ts"),"\uff1a\u901a\u5e38\u7528\u4e8e\u505a\u4e00\u4e9b\u5de5\u7a0b\u76f8\u5173\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u66f4\u6539 webpack \u914d\u7f6e\u3001\u6784\u5efa\u7ed3\u675f\u540e\u6267\u884c\u4e00\u4e9b\u5176\u4ed6\u4efb\u52a1\u7b49\uff0c\u9700\u4fdd\u8bc1\u8be5\u6587\u4ef6\u4f5c\u4e3a npm \u5305\u5165\u53e3\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"runtime.ts"),"\uff1a\u5b9e\u73b0\u4e00\u4e9b\u8fd0\u884c\u65f6\u80fd\u529b\uff0c\u6bd4\u5982 config/request \u63d2\u4ef6\u3002\u6ce8\u610f: \u65e7\u7248\u672c\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"module.ts")," \u6682\u65f6\u517c\u5bb9\uff0c\u4f46\u5728\u672a\u6765\u4e0d\u53d7\u652f\u6301\u3002\u9700\u4fdd\u8bc1\u8be5\u6587\u4ef6\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"index.ts")," \u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u4e0b\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u4e5f\u4f1a\u6309\u7167\u8fd9\u4e24\u4e2a\u7ef4\u5ea6\u6765\u5206\u522b\u4ecb\u7ecd\u3002"),(0,i.kt)("h2",{id:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236"},"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236"),(0,i.kt)("p",null,"\u5de5\u7a0b\u80fd\u529b\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," \u4e3a\u5165\u53e3\uff0c\u5728\u6267\u884c start/build \u65f6 icejs \u4f1a\u52a0\u8f7d\u5e76\u6267\u884c\u6bcf\u4e2a\u63d2\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),"\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," \u5e94\u8be5\u5982\u4f55\u4e66\u5199\u8bf7\u53c2\u8003\u4e0b\u4e00\u4e2a\u7ae0\u8282\u7684\u6587\u6863 ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugin/develop/build"},"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b"),"\u3002"),(0,i.kt)("h2",{id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236"},"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u80fd\u529b\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts")," \u4e3a\u5165\u53e3\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u9875\u9762\u65f6\u4f1a\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"runApp()")," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u52a0\u8f7d\u5e76\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts"),"\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts")," \u5e94\u8be5\u5982\u4f55\u4e66\u5199\u8bf7\u53c2\u8003\u4e0b\u4e00\u4e2a\u7ae0\u8282\u7684\u6587\u6863 ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugin/develop/runtime"},"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u8fd0\u884c\u65f6\u80fd\u529b"),"\u3002"),(0,i.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"Jest")," \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u5f00\u53d1\u793a\u4f8b"},"\u63d2\u4ef6\u5f00\u53d1\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ee5 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/packages/plugin-logger"},(0,i.kt)("inlineCode",{parentName:"a"},"plugin-logger"))," \u4e3a\u4f8b\u3002\u8be5\u63d2\u4ef6\u91c7\u7528 typescript \u7f16\u5199\uff0c\u5bf9\u5de5\u7a0b\u80fd\u529b\u53ca\u8fd0\u884c\u65f6\u80fd\u529b\u5747\u8fdb\u884c\u4e86\u4fee\u6539\u3002\u4e3a\u6846\u67b6\u63d0\u4f9b\u4e86\u65e5\u5fd7\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 template\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.ts     // logger \u529f\u80fd\u5b9e\u73b0\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts      // \u5de5\u7a0b\u80fd\u529b\u5b9e\u73b0\n\u2502\xa0\xa0 \u251c\u2500\u2500 runtime.ts    // \u8fd0\u884c\u65f6\u80fd\u529b\u5b9e\u73b0\n\u2502\xa0\xa0 \u2514\u2500\u2500 types\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.ts  // \u7c7b\u578b\u58f0\u660e\u6587\u4ef6\n\u2514\u2500\u2500 tsconfig.json\n")),(0,i.kt)("h3",{id:"\u7c7b\u578b\u548c\u6269\u5c55"},"\u7c7b\u578b\u548c\u6269\u5c55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7c7b\u578b\u58f0\u660e\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/types/index\nexport interface ILogger {\n  level: string;\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6269\u5c55 appConfig \u7c7b\u578b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nimport * as path from 'path';\nimport * as fse from 'fs-extra';\nimport { IPlugin } from '@alib/build-scripts';\n\nconst plugin: IPlugin = async ({ getValue, applyMethod }): Promise<void> => {\n  const exportName = 'logger';\n  const distPath = path.join(getValue('TEMP_PATH'), exportName);\n  await fse.copy(path.join(__dirname, './types'), path.join(distPath, 'types')); // \u590d\u5236\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\n\n  // \u6302\u8f7d\u81f3 appConfig\u3002 appConfig \u5bf9\u5e94\u7c7b\u578b\u4e3a IAppConfig\n  // source \u4e3a\u590d\u5236\u540e\u7684\u76ee\u5f55, specifier \u4e3a\u7c7b\u578b\u6807\u8bc6\u7b26\uff0cexportName \u4e3a appConfig \u7c7b\u578b\u540d\n  // \u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c\n  // import { ILogger } from './logger/types'\n  // export interface IAppConfig {\n  //   logger?: ILogger;\n  // }\n  applyMethod('addIceAppConfigTypes', {\n    source: `./${exportName}/types`,\n    specifier: '{ ILogger }',\n    exportName: `${exportName}?: ILogger`,\n  });\n};\n")))),(0,i.kt)("h3",{id:"\u5de5\u7a0b\u5316\u80fd\u529b\u5b9e\u73b0"},"\u5de5\u7a0b\u5316\u80fd\u529b\u5b9e\u73b0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"logger \u529f\u80fd\u5b9e\u73b0"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/logger/index.ts\nimport * as logger from 'loglevel';\n\nexport default logger;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u81f3 ice"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nimport * as path from 'path';\nimport * as fse from 'fs-extra';\nimport { IPlugin } from '@alib/build-scripts';\n\nconst plugin: IPlugin = async ({ getValue, applyMethod, onGetWebpackConfig }): Promise<void> => {\n  const exportName = 'logger';\n  const distPath = path.join(getValue('TEMP_PATH'), exportName);\n  await fse.copy(path.join(__dirname, `../${exportName}`), distPath);\n  // \u5bfc\u51fa logger \u529f\u80fd\n  // \u7528\u6237\u53ef\u901a\u8fc7 import { logger } from 'ice'; \u4f7f\u7528\n  applyMethod('addIceExport', { source: `./${exportName}`, exportName });\n\n  onGetWebpackConfig((config) => {\n    // \u4e3a logger \u6dfb\u52a0 webpack alias\uff0c\u4f9b\u8fd0\u884c\u65f6\u80fd\u529b\u8c03\u7528\n    config.resolve.alias.set('$ice/logger', distPath);\n  });\n};\n")))),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9e\u73b0"},"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9e\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import logger from '$ice/logger'; // $ice/logger \u901a\u8fc7\u5de5\u7a0b\u5316\u80fd\u529b\u8bbe\u7f6e alias\n\nconst module = ({ appConfig }) => {\n  // \u8bbe\u7f6e\u8fd0\u884c\u65f6 logger \u7b49\u7ea7\n  if (appConfig.logger && appConfig.logger.level) {\n    logger.setLevel(appConfig.logger.level);\n  }\n};\n\nexport default module;\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u63d2\u4ef6"},"\u793a\u4f8b\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5b98\u65b9\u63d2\u4ef6\u4ee3\u7801\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/packages"},"https://github.com/alibaba/ice/tree/master/packages")))}c.isMDXComponent=!0}}]);