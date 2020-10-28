(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{alk8:function(e,t,o){e.exports=o.p+"static/devtool-ellipsis-menu-544165114740b71b8742735726c236a5.png"},g414:function(e,t,o){e.exports=o.p+"static/css-styles-9f64219aa06da99471b4368620df181e.png"},nv0f:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return h}));var n=o("wx14"),a=o("zLVn"),i=(o("q1tI"),o("7ljp")),l=o("LHWr"),s=(o("qKvR"),{}),r={_frontmatter:s},u=l.a;function h(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.mdx)(u,Object(n.a)({},r,l,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"debugging-uxp-plugins"},"Debugging UXP Plugins"),Object(i.mdx)("p",null,"Although you'll certainly write your plugin code so that it has zero bugs, it is sometimes handy to know how to use the debugging tools available with UXP."),Object(i.mdx)("h2",{id:"debugging-tools"},"Debugging Tools"),Object(i.mdx)("p",null,"There are two ways to debug. The simplest way, suitable for many plugins, is to use the UXP Developer Tool. After a plugin has been loaded in the Developer Tool, choose ",Object(i.mdx)("inlineCode",{parentName:"p"},"Debug")," from the Actions menu for the plugin (on the far right of the Developer Tool window)."),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Debugging Tools",src:o("alk8")})),Object(i.mdx)("p",null,"The other way, if you've loaded your plugin using the command-line tools, is to use ",Object(i.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript",target:"_blank",rel:"nofollow noopener noreferrer"}),"Chrome DevTools"),", as follows:"),Object(i.mdx)("p",null,"In a new Chrome window, navigate to ",Object(i.mdx)("inlineCode",{parentName:"p"},"chrome://inspect"),'. Press Configure... next to Discover network targets checkbox, and add localhost:xxxx (where "xxxx" is the port you declared in your debug.json file). '),Object(i.mdx)("p",null,"When the extension is loaded, it should show up with its ID on this page."),Object(i.mdx)("p",null,"Make sure that you check ",Object(i.mdx)("inlineCode",{parentName:"p"},"Pause on caught exceptions")," in the Chrome debugger (on the right side of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Sources")," tab). "),Object(i.mdx)("p",null,"The Chrome debugger arguably has more features than the UXP Developer Tool, but many of those features are not applicable in the UXP environment. The best thing about the UXP Developer Tool is that you can choose ",Object(i.mdx)("inlineCode",{parentName:"p"},"Watch")," from the Actions menu, and the tool will automatically reload your plugin whenever you've changed your JavaScript, HTML, or CSS files. You can also select ",Object(i.mdx)("inlineCode",{parentName:"p"},"Reload")," from the Actions menu whenever you want to manually reload your plugin."),Object(i.mdx)("h2",{id:"why-doesnt-my-plugin-work"},"Why Doesn't My Plugin Work?"),Object(i.mdx)("p",null,"You've just written a UXP plugin that will change the world and make you famous (in a geek-culture kind of way). But it doesn't work! Why not?"),Object(i.mdx)("h3",{id:"manifest-problems"},"Manifest Problems"),Object(i.mdx)("p",null,"The JSON format is known for being easier for humans to read than XML. That doesn't mean it's easy, though. The smallest glitch in your JSON manifest file (a misplaced bracket, a missing comma, etc.) can cause your plugin to fail to load. You can use a JSON linter (one is built into VS code, and there are many available online both as apps and built into websites). Bottom line: if you're not seeing anything in Photoshop, check the Developer Tool for error messages, and look carefully at your ",Object(i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file."),Object(i.mdx)("h3",{id:"installation-problems"},"Installation Problems"),Object(i.mdx)("p",null,"During the beta period for Photoshop UXP, there were a variety of ways to get plugins into the directory where Photoshop could find them. Now, there is just one approved way to bring your development plugin into Photoshop: the ",Object(i.mdx)("a",Object(n.a)({parentName:"p"},{href:"../uxp-developer-tool/index.md"}),"UXP Developer Tool"),"."),Object(i.mdx)("h3",{id:"javascript-problems"},"JavaScript Problems"),Object(i.mdx)("p",null,"If your plugin fails to run due to a JavaScript error, usually that error will show up in the debugger console. Like most error messages since the dawn of the computer age, sometimes the error message is buried in a cryptic stack trace, but it will definitely be in there, usually with the offending JavaScript line number displayed at the top right of the trace."),Object(i.mdx)("h3",{id:"css-problems"},"CSS Problems"),Object(i.mdx)("p",null,"Although the browser that underlies UXP supports common HTML/CSS use cases that enable a rich UI for plugins, there are some aspects of those languages that it doesn't support, or where the behavior is limited and/or different."),Object(i.mdx)("p",null,'Troubleshooting CSS is a full-time job for some web developers. For UXP plugins, it\'s not as bad because the CSS is only targeting one "browser." On the other hand, CSS bugs are often difficult to track down. Selective refinement is one way to track CSS bugs (comment out or cut parts of CSS definitions until you see something change).'),Object(i.mdx)("p",null,"You can also check the Debug window; the leftmost ",Object(i.mdx)("inlineCode",{parentName:"p"},"Elements")," menu lets you expand the HTML in your plugin. Selecting an element in that window shows you the CSS that's been applied (on the right side of the debugger window, under ",Object(i.mdx)("inlineCode",{parentName:"p"},"Styles"),"):"),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Styles Tab",src:o("g414")})),Object(i.mdx)("p",null,"The Developer Tool CSS view is not as powerful as that in a browser; for example, it doesn't let you change the CSS \"on the fly.\" But it's very useful nonetheless."),Object(i.mdx)("h3",{id:"not-watching"},"Not Watching"),Object(i.mdx)("p",null,'The UXP Developer Tool has a great "watch" feature that automatically reloads your plugins when (almost) any of the files in your plugin folder change. But unless you enable this watch feature (by selecting ',Object(i.mdx)("inlineCode",{parentName:"p"},"Watch")," in the Actions column), nothing will change in Photoshop when you save a change to one of your files while editing."),Object(i.mdx)("p",null,"You can always reload your plugin manually, but it's nice when the system does it for you."),Object(i.mdx)("h3",{id:"gremlins"},"Gremlins"),Object(i.mdx)("p",null,"Sometimes, restarting Photoshop and the UXP Developer Tool will make a problem mysteriously vanish. Why does this happen? Yes, yes it does."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-debugging-index-md-00015b411629d119b0fe.js.map