window.addEvent('domready',function(){
	
	treegrid = new Mif.TreeGrid({
		cols: ['col1', 'col2', 'col3']
	}).inject('treegrid');
	//treegrid = new Mif.TreeGrid({container: 'treegrid'});
	
	var json = [
		{"fields": ["root", "root col2", "root col3"], "children": [
			{"fields": ["node1", "node1 col2", "node1 col3"]},
			{"fields": ["node2", "node2 col2", "node2 col3"], "children": [
				{"fields": ["node2.1", "node2.1 col2","node2.1 col3"], "open": true},
				{"fields": ["node2.2", "node2.2 col2", "node2.2 col3"]}
			]},
			{"fields": ["node3", "node3 col2", "node3 col3"]}
		]}
	];
	
	treegrid.load({json: json});
	
});
