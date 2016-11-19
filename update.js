update = function(){

	player.draw();
	floor.draw();
		
	requestAnimationFrame(update);
}

requestAnimationFrame(update);