_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"20a2":function(e,a,s){e.exports=s("nOHt")},"9a8N":function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("q1tI"),c=s.n(o),n=s("17x9"),r=s.n(n),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),m={tabs:r.a.bool,pills:r.a.bool,vertical:r.a.oneOfType([r.a.bool,r.a.string]),horizontal:r.a.string,justified:r.a.bool,fill:r.a.bool,navbar:r.a.bool,card:r.a.bool,tag:d.q,className:r.a.string,cssModule:r.a.object},f=function(e){var a=e.className,s=e.cssModule,o=e.tabs,n=e.pills,r=e.vertical,i=e.horizontal,m=e.justified,f=e.fill,p=e.navbar,b=e.card,h=e.tag,v=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),N=Object(d.m)(u()(a,p?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":o,"card-header-tabs":b&&o,"nav-pills":n,"card-header-pills":b&&n,"nav-justified":m,"nav-fill":f}),s);return c.a.createElement(h,Object(t.a)({},v,{className:N}))};f.propTypes=m,f.defaultProps={tag:"ul",vertical:!1},a.a=f},"EvW+":function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("q1tI"),c=s.n(o),n=s("17x9"),r=s.n(n),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),m={tag:d.q,active:r.a.bool,className:r.a.string,cssModule:r.a.object},f=function(e){var a=e.className,s=e.cssModule,o=e.active,n=e.tag,r=Object(l.a)(e,["className","cssModule","active","tag"]),i=Object(d.m)(u()(a,!!o&&"active","breadcrumb-item"),s);return c.a.createElement(n,Object(t.a)({},r,{className:i,"aria-current":o?"page":void 0}))};f.propTypes=m,f.defaultProps={tag:"li"},a.a=f},JX7q:function(e,a,s){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.d(a,"a",(function(){return t}))},XI7o:function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("q1tI"),c=s.n(o),n=s("17x9"),r=s.n(n),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),m={tag:d.q,listTag:d.q,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},f=function(e){var a=e.className,s=e.listClassName,o=e.cssModule,n=e.children,r=e.tag,i=e.listTag,m=e["aria-label"],f=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.m)(u()(a),o),b=Object(d.m)(u()("breadcrumb",s),o);return c.a.createElement(r,Object(t.a)({},f,{className:p,"aria-label":m}),c.a.createElement(i,{className:b},n))};f.propTypes=m,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=f},arvA:function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("JX7q"),c=s("dI71"),n=s("q1tI"),r=s.n(n),i=s("17x9"),u=s.n(i),d=s("TSYQ"),m=s.n(d),f=s("33Jr"),p={tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){function a(a){var s;return(s=e.call(this,a)||this).onClick=s.onClick.bind(Object(o.a)(s)),s}Object(c.a)(a,e);var s=a.prototype;return s.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},s.render=function(){var e=this.props,a=e.className,s=e.cssModule,o=e.active,c=e.tag,n=e.innerRef,i=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(f.m)(m()(a,"nav-link",{disabled:i.disabled,active:o}),s);return r.a.createElement(c,Object(t.a)({},i,{ref:n,onClick:this.onClick,className:u}))},a}(r.a.Component);b.propTypes=p,b.defaultProps={tag:"a"},a.a=b},blVf:function(e,a,s){"use strict";var t=s("q1tI"),l=s.n(t),o=s("9a8N"),c=s("arvA"),n=s("re7B"),r=l.a.createElement;a.a=function(){return r("div",{style:{top:"120px"},className:"sticky-top mb-5"},r("div",{className:"sidebar-block"},r("h6",{className:"sidebar-heading ml-3"},"Documentation"),r(o.a,{tag:"nav",pills:!0,className:"flex-column"},r(n.a,{activeClassName:"active",href:"/docs/docs-introduction",passHref:!0},r(c.a,{className:"mb-2"},"Introduction")),r(n.a,{activeClassName:"active",href:"/docs/docs-directory-structure",passHref:!0},r(c.a,{className:"mb-2"},"Directory structure")),r(n.a,{activeClassName:"active",href:"/docs/docs-next",passHref:!0},r(c.a,{className:"mb-2"},"Next.js")),r(n.a,{activeClassName:"active",href:"/docs/docs-customizing-css",passHref:!0},r(c.a,{className:"mb-2"},"Customizing CSS")),r(n.a,{activeClassName:"active",href:"/docs/docs-credits",passHref:!0},r(c.a,{className:"mb-2"},"Credits")),r(n.a,{activeClassName:"active",href:"/docs/docs-changelog",passHref:!0},r(c.a,{className:"mb-2"},"Changelog")))),r("div",{className:"sidebar-block"},r("h6",{className:"sidebar-heading ml-3"},"Components"),r(o.a,{tag:"nav",pills:!0,className:"flex-column"},r(n.a,{activeClassName:"active",href:"/docs/components-bootstrap",passHref:!0},r(c.a,{className:"mb-2"},"Bootstrap")),r(n.a,{activeClassName:"active",href:"/docs/components-directory",passHref:!0},r(c.a,{className:"mb-2"},"Theme")))))}},dI71:function(e,a,s){"use strict";function t(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}s.d(a,"a",(function(){return t}))},ldeh:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/docs-directory-structure",function(){return s("osPP")}])},ok1R:function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("q1tI"),c=s.n(o),n=s("17x9"),r=s.n(n),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),m=r.a.oneOfType([r.a.number,r.a.string]),f={tag:d.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,s=e.cssModule,o=e.noGutters,n=e.tag,r=e.form,i=e.widths,m=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,s){var t=e[a];if(delete m[a],t){var l=!s;f.push(l?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var p=Object(d.m)(u()(a,o?"no-gutters":null,r?"form-row":"row",f),s);return c.a.createElement(n,Object(t.a)({},m,{className:p}))};b.propTypes=f,b.defaultProps=p,a.a=b},osPP:function(e,a,s){"use strict";s.r(a),s.d(a,"__N_SSG",(function(){return p}));var t=s("q1tI"),l=s.n(t),o=s("YFqc"),c=s.n(o),n=s("1Yj4"),r=s("XI7o"),i=s("EvW+"),u=s("ok1R"),d=s("rhny"),m=s("blVf"),f=l.a.createElement,p=!0;a.default=function(){return f(l.a.Fragment,null,f("section",{className:"hero py-5 py-lg-7"},f(n.a,{className:"position-relative"},f(r.a,{listClassName:"justify-content-center pl-0"},f(i.a,null,f(c.a,{href:"/"},f("a",null,"Home"))),f(i.a,null,f(c.a,{href:"/docs/docs-introduction"},f("a",null,"Documentation"))),f(i.a,{active:!0},"Directory structure")),f("h1",{className:"hero-heading"},"Directory structure"))),f("section",{className:"py-6"},f(n.a,{fluid:!0},f(u.a,{className:"px-xl-5"},f(d.a,{lg:"2"},f(m.a,null)),f(d.a,{lg:"10",xl:"8",className:"docs-content"},f("div",{id:"pagesfolder",className:"docs-item"},f("h5",{className:"text-uppercase mb-4"},"Src folder"),f("div",{className:"docs-desc"}),f("div",{className:"mt-5"},f("p",null,"All the theme files are located in ",f("code",null,"/src")," folder. Files here form a demo static site, mostly equivalent to the online demo (CDNs not used here)."),f("p",null,"Next.js uses folder and file name based routing. If you place file named ",f("code",null,"about.js")," to"," ",f("code",null,"/src/pages")," folder, page with"," ",f("code",null,"/about")," URL will be created. You can also use subfolders (for example ",f("code",null,"/src/pages/blog/post.js")," ","- final URL ",f("code",null,"/blog/post"),")."),f("p",null," ","You can open any of the files in your code editor to modiy their markup or content to suit your needs."),f("p",null,f("strong",null,"Src folder also includes these subfolders:")),f("ul",null,f("li",null,f("code",null,"/scss")," - where you can find all scss files"),f("li",null,f("code",null,"/components")," - React components"),f("li",null,f("code",null,"/hooks")," - custom reusable React hooks"),f("li",null,f("code",null,"/pages")," - files for every page"),f("li",null,f("code",null,"/data")," - JSON data sample files for pages and components")))),f("div",{id:"scssfolder",className:"docs-item"},f("h5",{className:"text-uppercase mb-4"},"SCSS folder"),f("div",{className:"docs-desc"}),f("div",{className:"mt-5"},f("p",null," ","SCSS folder located at ",f("code",null,"/src/scss"),", contains Bootstrap\u2019s and theme\u2019s SCSS sources structured in the following subfolders"),f("ul",null,f("li",null,f("code",null,"bootstrap")," - full SCSS source for the Bootstrap framework."),f("li",null,f("code",null,"modules")," - theme overrides and custom components for this theme"),f("li",null,f("code",null,"style.*.scss")," - main theme SCSS files that get compiled into theme main stylesheets style.*.css. The * represents the colour variant"),f("li",null,f("code",null,"core.scss")," - file that handles all the SASS imports - mixins, Bootstrap and theme variables, Bootstrap framework"),f("li",null,f("code",null,"user.scss")," - a place for you to add your own custom CSS declarations to keep them separate from the core theme files, which aids updating."),f("li",null,f("code",null,"user-variables.scss")," - a place for you to add your own custom SCSS variables to override the Bootstrap and theme defaults. This prevents the need to edit the core Bootstrap/theme files and prevents the problems from updating the theme.")))),f("div",{id:"publicfolder",className:"docs-item"},f("h5",{className:"text-uppercase mb-4"},"Public folder"),f("div",{className:"docs-desc"}),f("div",{className:"mt-5"},f("p",null,"Static files like images or SVG files are located in"," ",f("code",null,"/public/content")," folder."),f("p",null,"You can customize ",f("code",null,"favicon")," in"," ",f("code",null,"/public")," folder too."))))))))}},re7B:function(e,a,s){"use strict";function t(e,a){if(null==e)return{};var s,t,l=function(e,a){if(null==e)return{};var s,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||(l[s]=e[s]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}var l=s("20a2"),o=s("YFqc"),c=s.n(o),n=s("q1tI"),r=s.n(n),i=r.a.createElement;a.a=function(e){var a=e.children,s=e.activeClassName,o=t(e,["children","activeClassName"]),u=Object(l.useRouter)().asPath,d=n.Children.only(a),m=d.props.className||"",f=u===o.href?"".concat(m," ").concat(s).trim():m;return i(c.a,o,r.a.cloneElement(d,{className:f||null}))}},rhny:function(e,a,s){"use strict";var t=s("wx14"),l=s("zLVn"),o=s("q1tI"),c=s.n(o),n=s("17x9"),r=s.n(n),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),m=r.a.oneOfType([r.a.number,r.a.string]),f=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:m,offset:m})]),p={tag:d.q,xs:f,sm:f,md:f,lg:f,xl:f,className:r.a.string,cssModule:r.a.object,widths:r.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},v=function(e){var a=e.className,s=e.cssModule,o=e.widths,n=e.tag,r=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,t){var l=e[a];if(delete r[a],l||""===l){var o=!t;if(Object(d.k)(l)){var c,n=o?"-":"-"+a+"-",m=h(o,a,l.size);i.push(Object(d.m)(u()(((c={})[m]=l.size||""===l.size,c["order"+n+l.order]=l.order||0===l.order,c["offset"+n+l.offset]=l.offset||0===l.offset,c)),s))}else{var f=h(o,a,l);i.push(f)}}})),i.length||i.push("col");var m=Object(d.m)(u()(a,i),s);return c.a.createElement(n,Object(t.a)({},r,{className:m}))};v.propTypes=p,v.defaultProps=b,a.a=v}},[["ldeh",1,0,2,3]]]);