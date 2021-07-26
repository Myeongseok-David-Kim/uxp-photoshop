---
id: "photoshop-api-changelog"
title: API Changelog
description: Contains a running log of changes to the UXP API environment in Adobe Photoshop
---

# Photoshop API Changelog

## Introduction

As of now, this documentation site describes API functionality that is available for use to a select number of participants in [Adobe Prerelease community](https://www.adobeprerelease.com/). We will start to evolve the site to support users and plugin developers outside the Prerelease group, once more functionality is available, and when we can be more confident our changes are stable for the wider audience.

If you would like to join the conversation, please consider joining the [Adobe Prerelease community](https://www.adobeprerelease.com/)!

## Adobe Photoshop Prerelease Build 61: Jun 24, 2021

### Updated DOM API

- New `Layers` collection, the old `layerTree` object is now called `layers` but as a collection using the JavaScript Proxy object. See below for introduction of collections. The old `layers` behavior is no longer part of the DOM. Most scripts can be updated to replace `layerTree` with `layers`.  A document and a layer, if the layer kind is group, will have a valid `layers` collection. A `pixel` layer will have `null` for the `layers` property. A collection has the same semantics as an Array. The additional ExtendScript routines of `add` and `getByName` are also available. Use `LayerKind.GROUP` on a `layer` to see if any `layers` are available.
- `GroupLayer` has been removed. Use `activeLayer.kind === LayerKind.GROUP` instead.
- `Constants.LayerKind`, similar to ExtendScript version, but with "group" layer addition.
- Layer APIs
	- *new* locked, read-only way to tell if any of the properties are locked
	- allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties
	- Some existing properties exposed in documentation

## Adobe Photoshop Prerelease Build 60: Jun 10, 2021

This update contains changes that were made since the MAX 2020 (Adobe Photoshop 22.0) release.

#### Breaking changes
To use the new set of APIs, your project's `manifest.json` must be updated to include the following under the `host` object:
```javascript
	"data" : {
		"apiVersion": 2
	}
```
Further, your `manifest.json` must use version 4:
```javascript
  "manifestVersion": 4
```
To roll back to the MAX 2020 version of the Photoshop DOM API, set the `apiVersion` to 1.

#### Updated DOM API
- Collections
	- We're introducing collection classes built using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), to make it easier to interact with the DOM.
	- Try iterating through all the documents as such: `app.documents.forEach(h => console.log(h.title));`
- [HistoryStates collections](../classes/collections/HistoryStates/) and [HistoryState API](../classes/HistoryState)
	- We've built HistoryStates to mirror ExtendScript functionality. `length`, `parent`, and `getByName(name)` are provided. You can also use indices as such: `activeDocument.historyStates[2]`.
	- HistoryState provides `name`, `parent`, `snapshot`.
- [Documents collections](../classes/collections/Documents/)
	- Documents also follows ExtendScript functionality. `length`, `add`, `getByName(name)`, `parent` are provided.
- [Constants module](../modules/constants/), collecting all enumerations and constants used in DOM API. Accessible via `require("photoshop").constants`.
- Updated [app.createDocument / app.add](../classes/Photoshop/#createdocument)
	- Create a document with no params for a default document, with a predefined preset, or by providing a host of [DocumentCreateOptions](../objects/DocumentCreateOptions/)).
- Updated [document.save](../classes/Document/#save) and [document.saveAs](../classes/Document/#saveas)
	- `save` no longer infers the file type from the requested file name. Instead, it invokes a save dialog for unsaved files, and performs a save operation for saved, modified files.
	- `saveAs` is provided for `bmp`, `gif`, `jpg`, `png`, `psb`, `psd` formats. Use SaveOptions objects to request specific saves (e.g. [PhotoshopSaveOptions](../objects/PhotoshopSaveOptions/)).
- [layer.id getter](../classes/Layer)
- Updated [document.createLayer](../classes/Document/#createlayer) and [document.createLayerGroup](../classes/Document/#createlayergroup)
	- With respective Create options: [LayerCreateOptions](../objects/LayerCreateOptions/) and [GroupLayerCreateOptions](../objects/GroupLayerCreateOptions).
	- Collection access updates for Layer and Layer-like items are planned for upcoming releases.

#### Photoshop Core updates
- [Execute as Modal](../media/executeAsModal/) allows you to create plugins that can be guaranteed exclusive control over Photoshop during execution. It further allows for clear user feedback when this is occuring, and allows plugins to `suspendHistory` and `resumeHistory`.