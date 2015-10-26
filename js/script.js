var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);

accordian.controller("ViabilityController" , function($scope){
	$scope.init = function () {
		$('.sd-block').click(function(){
		   	if(! $(this).hasClass('active') ){
		   		$('.sd-block').removeClass('active');
		   		$(this).addClass('active');
		   		if( $(this).hasClass('summary') ) {
			    	$("#viability-grid").removeClass("mytask").addClass("summary");
			    }
			    else if ($(this).hasClass('mytask') ) {
			    	$("#viability-grid").removeClass("summary").addClass("mytask");
			    }
		 	}
		});
	}
});

grid.controller("viabilityGridCtrl", function($scope){
	$scope.itemNumberCode = "<div class='item-number-block'><input type='checkbox' name='item-code'><span class='new'>NEW</span><span class='code'>0123456789</span></div>";
	$scope.closeIconCode    = "<span class='close-icon'>X</span";
	$scope.mainGridOptions = {
		dataSource: [ 
						{ 
							itemNumber: "",
						 	description: "Description Info here" ,
						 	brc :"000",
						 	itemType :"Type",
						 	unitCost :"$1",
						 	lastUpdatedBy :"Name",
						 	dateTime:"01/10/2015 4:00 PM"
						},
						{ 
							itemNumber: "",
						 	description: "Description Info here" ,
						 	brc :"000",
						 	itemType :"Type",
						 	unitCost :"$1",
						 	lastUpdatedBy :"Name",
						 	dateTime:"01/10/2015 4:00 PM"
						},
						{ 
							itemNumber: "",
						 	description: "Description Info here" ,
						 	brc :"000",
						 	itemType :"Type",
						 	unitCost :"$1",
						 	lastUpdatedBy :"Name",
						 	dateTime:"01/10/2015 4:00 PM"
						},
						{ 
							itemNumber: "",
						 	description: "Description Info here" ,
						 	brc :"000",
						 	itemType :"Type",
						 	unitCost :"$1",
						 	lastUpdatedBy :"Name",
						 	dateTime:"01/10/2015 4:00 PM"
						},
						{ 
							itemNumber: "",
						 	description: "Description Info here" ,
						 	brc :"000",
						 	itemType :"Type",
						 	unitCost :"$1",
						 	lastUpdatedBy :"Name",
						 	dateTime:"01/10/2015 4:00 PM"
						}
					
				   ],

		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false,
			sortable: true
		},
		filterable: {
			extra: false,
			mode: "menu"
        },
		pageable: {
			refresh: false,
			pageSizes: true,
			buttonCount: 2,
			pageSize: 5,
			info: true,
			messages: {
			  display: " {5}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [{
			field: "itemNumber",
			title: "Item Number",
			template:kendo.template($scope.itemNumberCode),
			width: 100
		},  {
			field: "description",
			title: "Description",
			width: 200
		},
		{
			field: "brc",
			title: "BRC",
			width: 100
		},
		{
			field: "itemType",
			title: "Item Type",
			width: 100
		},
		{
			field: "unitCost",
			title: "Unit Cost",
			width: 100
		},
		{
			field: "lastUpdatedBy",
			title: "Last Updated By",
			width: 100
		},
		{
			field: "dateTime",
			title: "Date/Time",
			width: 100
		}],
		dataBinding: function(e) {
			var $pagerRefresh = $('.k-pager-refresh').clone();
			var $grid = $('#viability-grid.mytask');
			//$('.k-pager-refresh').remove();
			$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

			$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

			$grid.on('click','.scheck',function(){
				if( this.checked ){
					$(this).closest('tr').addClass('active');
					$(this).closest('tr').closest('td').css("border-left", "5px solid blue");
					$('.approval-buttons').addClass('active');
				} else {
					$(this).closest('tr').removeClass('active');
					if( $('.scheck:checked').length == 0 ) {
						$('.approval-buttons').removeClass('active');
					}
				}
			});

			
		}
	};
});
