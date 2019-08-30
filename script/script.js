    var mouseEvents = [];
	//var chart_place = document.getElementById('chart');
	var chart_place = document.getElementsByTagName('body');
	var heatmap = h337.create({
			container : chart_place[0]
	});
	heatmap.setData({
		max:5,
		data:[{x:15,y:0,value:1}]
	});
	
document.onmousemove = function (event){
		mouseEvents.push(event);
		heatmap.addData({
			x:event.clientX,
			y:event.clientY+window.pageYOffset,
			value:1
		});

}

document.onmousewheel = function(event){
	mouseEvents.push(event)
}
/**
 * TODO 
 * -scroll back to where it was
 * -filter out scroll event and wheel event
 * - scale x and y with windows of other resolution
 *
  **/
