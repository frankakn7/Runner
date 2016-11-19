var floor = {
	x:0,
	y:player.y + player.height,
	width: canvas.width,
	height:20,
	color:'black',
	
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.clearRect(this.x,this.y,this.width,this.height);
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
}