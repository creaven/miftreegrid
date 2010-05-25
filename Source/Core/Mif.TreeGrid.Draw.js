/*
---
 
name: Mif.TreeGrid.Draw
description: convert javascript tree object to html
license: MIT-Style License (http://mifjs.net/license.txt)
copyright: Anton Samoylov (http://mifjs.net)
authors: Anton Samoylov (http://mifjs.net)
requires: Mif.TreeGrid
provides: Mif.TreeGrid.Draw
 
...
*/

Mif.TreeGrid.implement({

	getHTML: function(node, html){
		var prefix = 'mif-tree-';
		var checkbox;
		if(node.property.checked != undefined){
			if(!node.hasCheckbox) node.property.checked='nochecked';
			checkbox = '<span class="mif-tree-checkbox mif-tree-node-' + node.property.checked + '" uid="' + node.UID + '"></span>';
		}else{
			checkbox = '';
		}
		html = html || [];
		var cols = [];
		for(var i = 1, l = this.cols.length; i < l; i++){
			cols.push('<span class="field field-',this.cols[i].name,'" uid="',node.UID,'">',
				'<span class="mif-tree-name" uid="',node.UID,'">',node.property[this.cols[i].name],'</span>',
			'</span>');
		}
		html.push(
		'<div class="mif-tree-node ',(node.isLast() ? 'mif-tree-node-last ' : ' '),node.property.cls,(node.property.selected ? ' mif-tree-node-selected' : ''),'"'+(node.property.hidden ? ' style="display:none"' : '') + ' id="',prefix,node.UID,'">',
			'<span class="field field-',this.cols[0].name,'">',
				'<span class="mif-tree-node-wrapper" uid="',node.UID,'">',
					'<span class="mif-tree-toggle mif-tree-toggle-',node.getToggleType(),'" uid="',node.UID,'"></span>',
					checkbox,
					'<span class="mif-tree-icon ',(node.property.closeIconUrl?'" style="background-image: url(' + node.property.closeIconUrl + ')" ': node.property.closeIcon+'"'),' uid="',node.UID,'"></span>',
					'<span class="mif-tree-name" uid="',node.UID,'">',node.property[this.cols[0].name],'</span>',
				'</span>',
			'</span>',
			cols.join(''),
		'</div>',
		'<div class="mif-tree-children ',(node.isLast() ? 'mif-tree-children-last' : ''),'" style="display:none"></div>'
		);
		return html;
	},
	
	update: function(node){
		if(!this.isUpdatable(node)) return null;
		if(!node.hasChildren()) node.property.open=false;
		node.getDOM('toggle').className = 'mif-tree-toggle mif-tree-toggle-'+node.getToggleType();
		if (node.property.closeIconUrl) {
			node.getDOM('icon').setStyle('background-image', 'url(' + (node.isOpen() ? node.property.openIconUrl : node.property.closeIconUrl) + ')');
		} else {
			node.getDOM('icon').className = 'mif-tree-icon ' + node.property[node.isOpen() ? 'openIcon' : 'closeIcon'];
		}
		node.getDOM('node')[(node.isLastVisible() ? 'add' : 'remove') + 'Class']('mif-tree-node-last');
		if(node.$loading) return null;
		var children = node.getDOM('children');
		if(node.isOpen() && !node.property.hidden){
			if(!node.$draw) this.drawChildren(node);
			children.style.display = 'block';
		}else{
			children.style.display = 'none';
		}
		node.tree.fireEvent('updateNode', node);
		return node;
	}
	
});
