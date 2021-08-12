Ext.define('Mytheme.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [{
		xtype: 'panel',
		fullscreen: 'true',
		layout: 'hbox',
		defaults: {
			flex: 1
		},
		items: [{
			html: 'userFrom',
			style: 'backgroundcolour :White'

		}]

	}]
});
