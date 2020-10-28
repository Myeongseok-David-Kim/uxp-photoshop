(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{UxaT:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n("wx14"),a=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("LHWr"),i=(n("qKvR"),{}),d={_frontmatter:i},p=l.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(p,Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"uxp-toolchain"},"UXP Toolchain"),Object(r.mdx)("p",null,"UXP plugins are built using modern JavaScript with the UI created using subsets of HTML and CSS. See ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"../"}),"Technology Stack")," for more detail."),Object(r.mdx)("h2",{id:"tools-for-development"},"Tools for Development"),Object(r.mdx)("h3",{id:"a-basic-toolchain"},"A Basic Toolchain"),Object(r.mdx)("p",null,"In order to build a UXP-based plugin, you'll need the following pieces of software:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"A good text editor. Any modern developer-friendly text editor should work, but many people are using ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"Visual Studio Code"),", which has deep integrations with the other pieces needed for UXP, and a wide variety of its own plugins to help with code formatting, syntax checking, JSON parsing, and so on.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"The ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"../../uxp-developer-tool/"}),"UXP Developer Tool")," provides a GUI that allows you to load, unload, and debug plugins. It also creates the ",Object(r.mdx)("inlineCode",{parentName:"p"},".ccx")," files you'll need to distribute your plugin to others.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If you're using the UXP CLI, you'll need a command-line environment. The Terminal app in macOS works fine, as does the Windows Command Prompt. VS Code has a built-in terminal window which is convenient. And there are a dozen other command-line interpreters on both platforms, including Windows PowerShell. If you're building plugins that don't involve using React, you probably don't need to worry about this."))),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"../../udt-walkthrough/"}),"Here is a step-by-step walkthrough showing the creation of a Photoshop UXP plugin"),"."),Object(r.mdx)("h3",{id:"advanced-toolchain"},"Advanced Toolchain"),Object(r.mdx)("p",null," If you're using the UXP Developer Tool, and using plain JavaScript instead of React, you probably don't need any of the following tools."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Node.js"),": a JavaScript runtime environment. It's often used as a backend server in web environments. In the case of UXP, it's used as an engine to help manage installing plugins while using a command-line environment.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"npm"),": a \"package manager\" bundled with Node which helps manage your project's dependencies (i.e., other code and files that are needed to make your plugin work). If you're just using bare HTML/CSS/js, you probably don't need npm.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://yarnpkg.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"yarn"),': a "better" package manager than npm for Node. Many people, including those developing Photoshop UXP tools, are using yarn instead of npm.'))),Object(r.mdx)("h3",{id:"installing-the-tooling"},"Installing the Tooling"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"UXP Developer Tool for macOS and Windows 10")," - See the instructions ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"./devtool"}),"here")," to install in run the UXP Developer Toolkit.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Node.js")," - Go to the ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/download/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Node.js download page"),", download the installer for your platform, and run it. This will also install npm. ")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"yarn"),": In order to install yarn you'll need to have npm installed first (see above). After that, use this command:"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install yarn --global\n")))),Object(r.mdx)("h2",{id:"intellectual-toolchain"},"Intellectual Toolchain"),Object(r.mdx)("p",null,"Before starting to build a plugin, you should have a good working knowledge of modern JavaScript. If you're coming from an ExtendScript background and haven't used recent JavaScript, you'll want to make sure that you understand concepts including asynchronous functions, newer JavaScript syntax (e.g., let/const vs \"var\"), and things like anonymous functions and arrow function expressions. There are thousands of websites and online videos that explain these concepts."),Object(r.mdx)("p",null,"If you're going to be building a non-trivial UI into your plugin, you should also become familiar with ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org",target:"_blank",rel:"nofollow noopener noreferrer"}),"React"),"."),Object(r.mdx)("p",null,"In order to build React-based plugins, you'll need to know a bit about ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/",target:"_blank",rel:"nofollow noopener noreferrer"}),"NodeJS")," and ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"npm, the Node Package Manager"),". Some plugin examples use ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://yarnpkg.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"Yarn"),", an alternative to npm."),Object(r.mdx)("h2",{id:"useful-utilities-and-resources"},"Useful Utilities and Resources"),Object(r.mdx)("h3",{id:"kitchen-sink-example"},"Kitchen Sink Example"),Object(r.mdx)("p",null,"This is sample code, not actually a tool. But the ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-kitchen-sink",target:"_blank",rel:"nofollow noopener noreferrer"}),"uxp-ui-kitchen-sink-plugin")," is very useful in showing the kinds of controls you can use in UXP. It covers both Spectrum and native controls."),Object(r.mdx)("h3",{id:"html-playground"},"HTML Playground"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-playground",target:"_blank",rel:"nofollow noopener noreferrer"}),"HTML PLayground")," plugin is designed to make it easy to test out simple HTML layouts in Photoshop using UXP's layout engine. To use this, install the plugin using the UXP Developer Tool."),Object(r.mdx)("h3",{id:"batchplay-logger-for-extendscript-developers"},"batchPlay Logger for ExtendScript developers"),Object(r.mdx)("p",null,"Plug the ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/adobe-uxp/ps-es-to-uxp",target:"_blank",rel:"nofollow noopener noreferrer"}),"ExtendScript BatchPlay logger")," jsx code into your ExtendScript project, and it will print out all your ",Object(r.mdx)("inlineCode",{parentName:"p"},"executeAction")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"executeActionGet")," methods in a format suitable for use with UXP's BatchPlay."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-toolchain-index-md-cdf6f4f3956c6161ac65.js.map