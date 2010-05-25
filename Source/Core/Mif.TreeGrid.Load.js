/*
---
 
name: Mif.TreeGrid.Load
description: load tree from json
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: Mif.TreeGrid
provides: Mif.TreeGrid.Load
 
...
*/

Mif.TreeGrid.implement({
		
	readJSON: function(children, parent){
		for( var i = children.length; i--; ){
			var child = children[i];
			var subChildren = child.children;
			var fields = child.fields;
			for(var j = 0, m = this.cols.length; j < m; j++){
				var col = this.cols[j];
				child[col.name] = fields[j];
			}
			var node = new this.Node({
				tree: this,
				parentNode: parent
			}, child);
			if( this.forest || parent != undefined){
				parent.children.unshift(node);
			}else{
				this.root = node;
			}
			if(subChildren && subChildren.length){
				this.readJSON(subChildren, node);
			}
		}
		if(parent) parent.property.loaded = true;
		//this.fireEvent('loadChildren', parent);
	}
	
});
