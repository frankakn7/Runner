update = function(){
	
	generateBlockUpDown();
	
	player.update();
	floor.draw();
	
	for(var i in blocks){
		blocks[i].update(player.spd);
	}
		
	requestAnimationFrame(update);
}

requestAnimationFrame(update);