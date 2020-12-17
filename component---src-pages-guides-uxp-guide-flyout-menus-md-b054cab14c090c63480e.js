(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{OwXX:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return r}));var o=t("wx14"),a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("LHWr"),s=(t("qKvR"),{}),d={_frontmatter:s},u=l.a;function r(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.mdx)(u,Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"flyout-menus"},"Flyout Menus"),Object(i.mdx)("p",null,"In beta versions of UXP for Photoshop, flyout menus (menus that show up in the two-patty hamburger icon at the top right of the panel) were defined in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file. This is no longer the case. For flexibility, flyout menus are now defined by supplying a JSON structure to UXP at runtime, as in the example below."),Object(i.mdx)("h2",{id:"defining-flyout-menus"},"Defining Flyout Menus"),Object(i.mdx)("p",null,"Flyout menus are defined by a JSON structure that's passed to the UXP ",Object(i.mdx)("inlineCode",{parentName:"p"},"setup"),' method. The JSON tells UXP what the menuitems are, and what to do when they\'re invoked. In the following example, there are three starship-related menuitems. When a menuitem is chosen by the user ("invoked"), UXP calls the plugin-defined function ',Object(i.mdx)("inlineCode",{parentName:"p"},"handleFlyout"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const { entrypoints } = require("uxp");\n// the setup() function tells UXP how to handle\n// the entrypoints defined in your manifest.json file.\nentrypoints.setup({\n  panels: {\n    my_panel_entrypoint: {\n      show() {\n        // usually panels are already populated\n        // from the HTML, so we do nothing here\n      },\n      menuItems: [\n        {id: "item1", label: "Warp Factor 1"},\n        {id: "item2", label: "Shields Up"},\n        {id: "item3", label: "Engage"}\n      ],\n      invokeMenu(id) {\n        handleFlyout(id);\n      }\n    }\n  }\n});\n')),Object(i.mdx)("h2",{id:"handling-flyouts"},"Handling Flyouts"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"handleFlyout")," function (defined above) gets passed the flyout menu id. It can use this id to dispatch code to handle each menuitem, as shown below."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'function handleFlyout(id) {\n  switch (id) {\n    case "item1": {\n        console.log("aye captain");\n        break;\n    }\n    case "item2": {\n        console.log("shields at 40 percent");\n        break;\n    }\n    case "item3": {\n        console.log("warp drive is offline");\n        break;\n    }\n  }\n}\n')))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-flyout-menus-md-b054cab14c090c63480e.js.map