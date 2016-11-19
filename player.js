var player = {
	x: canvas.width/3,
	y: canvas.height/2,
	spdX: 0,
	spdY: 0,
	accX: 0,
	accY: gravity,
	width:20,
	height:40,
	color:'blue',
	
	normal: function(){
		ctx.clearRect(this.x,this.y,this.width,this.height);
		this.y -= this.height;
		this.height = this.height * 2;
	},
	
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.clearRect(this.x,this.y,this.width,this.height);
		this.move();
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	
	jump: function(){
		this.spdY -= 10;
	},
	
	slide: function(){
		ctx.clearRect(this.x,this.y,this.width,this.height);
		this.height = this.height/2;
		this.y += this.height;
	},
	
	move: function(){
		this.spdX += this.accX;
		this.spdY += this.accY;
		
		this.x += this.spdX;
		this.y += this.spdY;
		
		if(this.detect(floor)){
			this.y = floor.y - this.height;
			if(this.spdY > 0){
				this.spdY = 0;
			}
		}
	},
	
	detect: function(obj){
		if(	this.x <= obj.x + obj.width
	        && obj.x <= this.x + this.width
	        && this.y <= obj.y + obj.height
	        && obj.y <= this.y + this.height){
		        
		    return true;
	    }
	},
	
}