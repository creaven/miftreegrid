/*
---
 
name: Mif.TreeGrid.Sheet
description: Mif.Tree styles
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: Mif.TreeGrid.Image
provides: Mif.TreeGrid.Sheet
 
...
*/

Mif.sheet.addRules({
	
	'.mif-tree-wrapper .field': {
		'border-right': 'solid 1px #999'
	},
	
	'.mif-tree-node-selected, .mif-tree-hover-node': {
		'background': 'transparent'
	},
	
	'.mif-tree-hover-node .field': {
		'background': '#D5E7FF'
	},
	
	'.mif-tree-node-selected .field': {
		'background': '#5C97FB'
	}

});
