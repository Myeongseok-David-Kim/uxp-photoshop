(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{NaKv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),m=(a("q1tI"),a("7ljp")),l=a("LHWr"),c=(a("qKvR"),{}),d={_frontmatter:c},p=l.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(m.mdx)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"document"},"Document"),Object(m.mdx)("p",null,"Represents a single Photoshop document that is currently open\nYou can access instances of documents using one of these methods:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// The currently active document from the Photoshop object\nconst currentDocument = app.activeDocument\n\n// Choose one of the open documents from the Photoshop object\nconst secondDocument = app.documents[1]\n\n// You can also create an instance of a document via a UXP File entry\nlet fileEntry = require('uxp').storage.localFileSystem.getFileForOpening()\nconst newDocument = await app.open('/project.psd')\n")),Object(m.mdx)("h2",{id:"accessors"},"Accessors"),Object(m.mdx)("h3",{id:"activelayers"},"activeLayers"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get activeLayers"),"(): ",Object(m.mdx)("em",{parentName:"p"},Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]")),Object(m.mdx)("p",null,"The selected layers in the document"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const layers = doc.activeLayers;\nconst topLayer = layers[0]\n")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"backgroundlayer"},"backgroundLayer"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get backgroundLayer"),"(): ",Object(m.mdx)("em",{parentName:"p"},Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer")," | null")),Object(m.mdx)("p",null,"Background layer, if it exists"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bgLayer = currentDocument.backgroundLayer\n")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"height"},"height"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get height"),"(): ",Object(m.mdx)("em",{parentName:"p"},"number")),Object(m.mdx)("p",null,"Document's height in pixels"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"layertree"},"layerTree"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get layerTree"),"(): ",Object(m.mdx)("em",{parentName:"p"},"LayerTypes[]")),Object(m.mdx)("p",null,"Top level layers in the document"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"layers"},"layers"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get layers"),"(): ",Object(m.mdx)("em",{parentName:"p"},"LayerTypes[]")),Object(m.mdx)("p",null,"All the layers in the document, in a flat list"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const layers = currentDocument.layers\nconst topLayer = layers[0]\n")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"path"},"path"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get path"),"(): ",Object(m.mdx)("em",{parentName:"p"},"string")),Object(m.mdx)("p",null,"Path to this document, or it's identifier if a cloud document"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"resolution"},"resolution"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get resolution"),"(): ",Object(m.mdx)("em",{parentName:"p"},"number")),Object(m.mdx)("p",null,"Document's resolution (in pixels per inch)"),Object(m.mdx)("p",null,"For example, in the default PS document (7 in wide by 5 in tall at 300 ppi)"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const resolution = doc.resolution // 300\nconst width = doc.width // 2100\nconst height = doc.height // 1500\n")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"title"},"title"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get title"),"(): ",Object(m.mdx)("em",{parentName:"p"},"string")),Object(m.mdx)("p",null,"Document title"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const currentTitle = doc.title\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"readonly"))," "),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"width"},"width"),Object(m.mdx)("p",null,"• ",Object(m.mdx)("strong",{parentName:"p"},"get width"),"(): ",Object(m.mdx)("em",{parentName:"p"},"number")),Object(m.mdx)("p",null,"Document's width in pixels"),Object(m.mdx)("h2",{id:"methods"},"Methods"),Object(m.mdx)("h3",{id:"close"},"close"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"close"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"saveDialogOptions?"),": SaveDialogOptions): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Closes the document, showing a prompt to save\nunsaved changes if specified"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"saveDialogOptions?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"SaveDialogOptions")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"closewithoutsaving"},"closeWithoutSaving"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"closeWithoutSaving"),"(): ",Object(m.mdx)("em",{parentName:"p"},"void")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"createlayer"},"createLayer"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"createLayer"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"options?"),": LayerCreateOptions): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹",Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer")," | null›")),Object(m.mdx)("p",null,"Create a layer. See @CreateOptions"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const myEmptyLayer = await doc.createLayer()\nconst myLayer = await doc.createLayer({ name: "myLayer", opacity: 80, mode: "colorDodge" })\n')),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"options?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"LayerCreateOptions")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"createlayergroup"},"createLayerGroup"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"createLayerGroup"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"options?"),": GroupLayerCreateOptions): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹",Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/grouplayer/"}),"GroupLayer")," | null›")),Object(m.mdx)("p",null,"Create a layer group. See @CreateOptions"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const myEmptyGroup = await doc.createLayerGroup()\nconst myGroup = await doc.createLayerGroup({ name: "myLayer", opacity: 80, mode: "colorDodge" })\nconst nonEmptyGroup = await doc.createLayerGroup({ name: "group", fromLayers: [layer1, layer2] })\n')),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"options?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"GroupLayerCreateOptions")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"crop"},"crop"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"crop"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"bounds"),": PsCommon.Bounds, ",Object(m.mdx)("inlineCode",{parentName:"p"},"angle"),": number): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Crops the document to given bounds"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"bounds")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"PsCommon.Bounds"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"angle")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"duplicatelayers"},"duplicateLayers"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"duplicateLayers"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"layers"),": ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[], ",Object(m.mdx)("inlineCode",{parentName:"p"},"targetDocument?"),": ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/classes/document/"}),"Document"),"): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹",Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]›")),Object(m.mdx)("p",null,"Duplicates given layer(s), creating all copies above the top most one in layer stack,\nand returns the newly created layers."),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// duplicate some layers\nconst layerCopies = await document.duplicateLayers([layer1, layer3])\nlayerCopies.forEach((layer) => { layer.blendMode = 'multiply' })\n// ...to another document\nconst finalDoc = await photoshop.open('~/path/to/collated/image.psd')\nawait document.duplicateLayers([logo1, textLayer1], finalDoc)\nawait finalDoc.close(SaveDialogOptions.SAVE_CHANGES)\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"layers")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("a",Object(n.a)({parentName:"td"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"targetDocument?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("a",Object(n.a)({parentName:"td"},{href:"#"}),"Document")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"if specified, duplicate to a different document target.")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"flatten"},"flatten"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"flatten"),"(): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Flatten all layers in the document"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"grouplayers"},"groupLayers"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"groupLayers"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"layers"),": ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹",Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/grouplayer/"}),"GroupLayer")," | null›")),Object(m.mdx)("p",null,"Create a layer group from existing layers."),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const layers = doc.layers\nconst group = await doc.groupLayers([layers[1], layers[2], layers[4]])\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"layers")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("a",Object(n.a)({parentName:"td"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"linklayers"},"linkLayers"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"linkLayers"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"layers"),": ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]): ",Object(m.mdx)("em",{parentName:"p"},Object(m.mdx)("a",Object(n.a)({parentName:"em"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]")),Object(m.mdx)("p",null,"Links layers together if possible, and returns a list of linked layers."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"layers")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("a",Object(n.a)({parentName:"td"},{href:"/uxp-photoshop/ps_reference/classes/layer/"}),"Layer"),"[]"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of layers to link together")))),Object(m.mdx)("p",null,"array of successfully linked layers"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"mergevisiblelayers"},"mergeVisibleLayers"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"mergeVisibleLayers"),"(): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Flattens all visible layers in the document"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"resizecanvas"},"resizeCanvas"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"resizeCanvas"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"width"),": number, ",Object(m.mdx)("inlineCode",{parentName:"p"},"height"),": number, ",Object(m.mdx)("inlineCode",{parentName:"p"},"anchor?"),": AnchorPosition): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Changes the size of the canvas, but does not change image size\nTo change the image size, see ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/classes/document/#resizeimage"}),"resizeImage")),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// grow the canvas by 400px\nlet width = await document.width\nlet height = await document.height\nawait document.resizeCanvas(width + 400, height + 400)\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"width")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value of new width in pixels")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"height")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value of new height in pixels")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"anchor?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"AnchorPosition"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Anchor point for resizing, by default will resize an equal amount on all sides. ",Object(m.mdx)("br",null)," Of format:                ",Object(m.mdx)("br",null),"[top/middle/bottom]","-","[left/center/right]")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"resizeimage"},"resizeImage"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"resizeImage"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"width"),": number, ",Object(m.mdx)("inlineCode",{parentName:"p"},"height"),": number, ",Object(m.mdx)("inlineCode",{parentName:"p"},"resolution?"),": number, ",Object(m.mdx)("inlineCode",{parentName:"p"},"resampleMethod?"),": ResampleMethod): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Changes the size of the image"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"await document.resizeImage(800, 600)\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"width")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value of new width in pixels")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"height")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value of new height in pixels")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"resolution?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image resolution in pixels per inch (ppi)")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"resampleMethod?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"ResampleMethod"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Method used during image interpolation.",Object(m.mdx)("br",null),"                        Possible values are:",Object(m.mdx)("br",null),"                        ",Object(m.mdx)("ul",null,"                        ",Object(m.mdx)("li",null,"nearestNeighbor"),"                        ",Object(m.mdx)("li",null,"bilinear"),"                        ",Object(m.mdx)("li",null,"bicubic"),"                        ",Object(m.mdx)("li",null,"bicubicSmoother"),"                        ",Object(m.mdx)("li",null,"bicubicSharper"),"                        ",Object(m.mdx)("li",null,"bicubicAutomatic"),"                        ",Object(m.mdx)("li",null,"preserveDetailsUpscale"),"                        ",Object(m.mdx)("li",null,"deepUpscale"),"                        "))))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"rotate"},"rotate"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"rotate"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"angles"),": number): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Rotates the image clockwise in given angle, expanding canvas if necessary"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"angles")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"save"},"save"),Object(m.mdx)("p",null,"▸ ",Object(m.mdx)("strong",{parentName:"p"},"save"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"entry?"),": File, ",Object(m.mdx)("inlineCode",{parentName:"p"},"saveOptions?"),": SaveOptions): ",Object(m.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(m.mdx)("p",null,"Saves the document or a copy, the format is deduced by the extension"),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// To save a document in the same location\ndocument.save()\n\n// Shows the save dialog\nunsavedDocument.save()\n\n// To save to a path, use UXP storage APIs to get a file for saving\nlet entry = await require('uxp').storage.localFileSystem.getFileForSaving(\"target.psd\")\ndocument.save(entry)\n\n// To save to a path, but with some options:\ndocument.save(entry, { embedColorProfile: true })\n")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},Object(m.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Parameters:")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"entry?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"File")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"saveOptions?")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"SaveOptions")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-document-md-717455ff04cec2ac2ea5.js.map