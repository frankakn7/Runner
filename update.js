update = function(){
	
	if(player.slideCount >= 0){
		player.slideCount --;
	}
	if(player.slideCount === 0){
		player.normal();
	}
	
	player.draw();
	floor.draw();
		
	requestAnimationFrame(update);
}

requestAnimationFrame(update);