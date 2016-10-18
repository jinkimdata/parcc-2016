var dataproject = {
	init: function(){
		dataproject.share();
		dataproject.makeTable();
	},	
	makeTable: function() {
		// $('#parccTable').DataTable({
  //   	    "order": [[0, "desc"]],
		// 	"paging": false,
		// 	"bInfo": false,
		// 	"bFilter": false,
		// 	"ordering": true,
		// 	"responsive": {
		// 		details: {
		// 			renderer: function ( api, rowIdx, columns ) {
		// 				var data = $.map( columns, function ( col, i ) {
		// 					return col.hidden ?
		// 					'<tr class="expandedRow" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
		// 					'<td>'+col.title+':'+'</td> '+
		// 					'<td>'+col.data+'</td>'+
		// 					'</tr>' :
		// 					'';
		// 				} ).join('');
		// 				return data ? $('<table/>').append( data ) : false;
		// 			}
		// 		}
		// 	},
		// 	"columnDefs": [
		// 		{className: 'control',
		// 		orderable: true,
		// 		targets: 0},
		// 		{responsivePriority: 1, targets: 5},
		// 		{responsivePriority: 2, targets: 2},
		// 		{responsivePriority: 3, targets: 3},
		// 		{responsivePriority: 4, targets: 4},
		// 		{responsivePriority: 5, targets: 1}
		// 	]
		// })
		$('#parccTable').DataTable({
			'columnDefs': [			
				{
					"targets": [ 4 ],
					"visible": false,
					"searchable": false
				},
				{
					"targets": [ 6 ],
					"visible": false,
					"searchable": false
				},
				{ "orderData": 6, "targets": [ 5 ] },
				{ "orderData": 4, "targets": [ 3 ] },
			],
		});
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "Compare Maryland PARCC scores using this handy table."; //Tweet text
			var url = "http://data.baltimoresun.com/news/parcc2016/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/parcc2016/thumb.png"; //Picture URL
			var title = "2016 Maryland PARCC scores | The Baltimore Sun"; //Post title
			var description = "Compare Maryland PARCC scores using this handy table."; //Post description
			var url = "http://data.baltimoresun.com/news/parcc2016/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	}
}
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
