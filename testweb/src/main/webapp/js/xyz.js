
var combostore = new Ext.data.ArrayStore({  
    fields: ['id', 'name'],  
    data: [[1, '团员'], [2, '党员'], [3, '其他1'], [4, '其他11'], [5, '其他111'], [6, '其他1111'], [7, '其他1133'], [8, '其他333'], [9, '其他3'], [10, '其他333'], [11, '其他555'], [12, '其他666663']]  
});  

var combobox = new Ext.form.ComboBox({
	fieldLabel : '政治面貌',
	store : combostore,
	displayField : 'name',
	valueField : 'id',
	triggerAction : 'all',
	emptyText : '请选择...',
	allowBlank : false,
	blankText : '请选择政治面貌',

	mode : 'local',
	listeners : {
		beforequery : function(e) {
			var combo = e.combo;
			if (!e.forceAll) {
				var value = e.query;
				combo.store.filterBy(function(record, id) {
					var text = record.get(combo.displayField);
					return (text.indexOf(value) != -1);
				});
				combo.expand();
				return false;
			}
		}
	}

});
var mainPanel = Ext.create('Ext.panel.Panel', {
	title : ' 我的工作台 ',
	autoWidth : true,
	height : 500,
	frame : true,
	region : 'north',
	border : 1,
	padding : 5,
	layout : 'column',
	autoScroll : true,
	items : [combobox]
});
var sPanel = Ext.create('Ext.panel.Panel', {
	width: 900,
    height: 100,
    title: "Anchor布局",
    layout: 'anchor',
    x: 60,
    y: 80,
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'panel',
        title: '75% Width and 25% Height',
        anchor: '98% 30%'
    }, {
        xtype: 'panel',
        title: 'Offset -300 Width & -200 Height',
        anchor: '-5 -3'
    }]
});

var infoOfficesCombo = new Ext.form.ComboBox({  
    fieldLabel:'单位',  
    store: combostore,   //infoOfficesStore 可以是从数据库中查出，也可以是自己定义。  
    mode:'local',  
    triggerAction:'all',  
    valueField:'id',  
    displayField:'name',  
    value:'',  
    listeners: {   //监听事件  
       select:function(){  
          infoUserStore.removeAll();   //将员工的store里边的内容清空  
          infoUserCombo.setValue('');  //将员工下拉框置为空  
       //   var userURL = path + "/showUser.action";  
        //  infoUserStore.proxy = new Ext.data.HttpProxy({url:userURL, method:'get'});  
       //   infoUserStore.load();  
       }  
    },  
    editable:false  
});

Ext.onReady(function() {
	mainPanel.render(Ext.getBody());
});