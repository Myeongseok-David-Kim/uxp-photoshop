(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"1Urf":function(e,t,o){e.exports=o.p+"static/fonts-darkest-76fdbbcc4e3a00a43d39ef249ae35030.png"},BdXK:function(e,t,o){e.exports=o.p+"static/fonts-lightest-de620784d8f852fe019b304c822c90b5.png"},E7eL:function(e,t,o){e.exports=o.p+"static/ps-theme-selection-af3b5bda253fd5e5bc711d55453117d4.png"},Gpjy:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return u}));var l=o("wx14"),a=o("zLVn"),r=(o("q1tI"),o("7ljp")),n=o("LHWr"),s=(o("qKvR"),{}),c={_frontmatter:s},i=n.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(i,Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"making-your-plugin-theme-aware"},"Making Your Plugin Theme-aware"),Object(r.mdx)("h2",{id:"overview"},"Overview"),Object(r.mdx)("p",null,"Photoshop allows the user to switch the UI between four themes:"),Object(r.mdx)("p",null,Object(r.mdx)("img",{alt:"Photoshop Theme Colors",src:o("E7eL")})),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Darkest"),Object(r.mdx)("li",{parentName:"ul"},"Dark"),Object(r.mdx)("li",{parentName:"ul"},"Light"),Object(r.mdx)("li",{parentName:"ul"},"Lightest")),Object(r.mdx)("p",null,"If your plugin is not theme aware, it can look out of place (or possibly have unreadable text) when the user switches themes. It's very straightforward to add theme awareness to your plugin, so there's really no reason not to."),Object(r.mdx)("h2",{id:"built-in-theme-colors"},"Built-in Theme Colors"),Object(r.mdx)("p",null,"The easiest way to make your plugin theme-aware is to make use of a CSS feature called ",Object(r.mdx)("inlineCode",{parentName:"p"},"CSS variables"),". CSS variables are just what they sound like: a way to have dynamic property definitions in CSS."),Object(r.mdx)("p",null,"Luckily, Photoshop exposes a number of theme-specific CSS variables that are perfect for making your plugin respond to the user's theme color choice. These variables are:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-text-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-border-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-link-text-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-widget-hover-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-widget-hover-text-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-widget-hover-border-color")),Object(r.mdx)("p",null,"And a few more: "),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-text-color-secondary"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-link-hover-text-color"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-label-text-color")),Object(r.mdx)("p",null,"Finally, there are three dealing with font size:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-font-size"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-font-size-smaller"),Object(r.mdx)("li",{parentName:"ul"},"--uxp-host-font-size-larger")),Object(r.mdx)("h2",{id:"how-to-use-css-variables"},"How to Use CSS Variables"),Object(r.mdx)("p",null,"In the CSS for your plugin panel, use the built-in CSS variables like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(l.a)({parentName:"pre"},{className:"language-css"}),"body {\n    background-color: var(--uxp-host-background-color);\n    color: var(--uxp-host-text-color);\n    border-color: var(--uxp-host-border-color);\n    font-size: var(--uxp-host-font-size);\n}\n")),Object(r.mdx)("p",null,"Of course, you don't have to style the entire body of your panel with these variables; you could style individual CSS classes instead."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(l.a)({parentName:"pre"},{className:"language-css"}),".bigText {\n    color: var(--uxp-host-text-color);\n    font-size: var(--uxp-host-font-size-larger);\n}\n.smallText {\n    color: var(--uxp-host-text-color);\n    font-size: var(--uxp-host-font-size-smaller);\n}\n")),Object(r.mdx)("h2",{id:"how-do-they-look"},"How Do They Look?"),Object(r.mdx)("p",null,"If you create a simple HTML file that includes these CSS variables, here's how they'll look in Photoshop."),Object(r.mdx)("p",null,'On the "darkest" theme, they look like this:'),Object(r.mdx)("p",null,Object(r.mdx)("img",{alt:"Darkest Theme",src:o("1Urf")})),Object(r.mdx)("p",null,'And on the "lightest" theme, they look like this:'),Object(r.mdx)("p",null,Object(r.mdx)("img",{alt:"Lightest Theme",src:o("BdXK")})))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-theme-awareness-index-md-95984b8e310190388d22.js.map