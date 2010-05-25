/*
---
 
name: Mif.TreeGrid
description: Mif.Tree base Class
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: [Mif.Tree/Mif.Tree, Mif.Tree/Mif.Tree.Node, Mif.Tree/Mif.Tree.Selection, Mif.Tree/Mif.Tree.Hover, Mif.Tree/Mif.Tree.Draw, Mif.Tree/Mif.Tree.Load]
provides: Mif.TreeGrid
 
...
*/

Mif.TreeGrid = new Class({
	
	version: 'dev',
	
	Extends: Mif.Tree,
	
	options: {
		colWidth: 200
	},
	
	initialize: function(options){
		this.parent(options);
		this.cols = this.options.cols.map(function(col){
			if($type(col) != 'object'){
				col = {name: col, header: col};
			}
			col.width = col.width || this.options.colWidth;
			Mif.sheet.addRule('.mif-tree-' + this.UID + ' .field-' + col.name, {
				width: col.width
			});
			return col;
		}, this);
	}

});
