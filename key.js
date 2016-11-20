var key = {
	s: 83,
	w: 87,
}

document.addEventListener('keydown', function(evt) {
	if(evt.keyCode === key.s){	
		player.slide();
	}
	if(evt.keyCode === key.w){
		player.jump();
	}
});