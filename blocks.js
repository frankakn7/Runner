var blocks = [];
var blockNum = 1;

var generateTimer = 30;

function block(x,y,width,height,color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	
	this.move = function(spd){
		this.x -= spd;
	}
	
	this.draw = function(spd){
		ctx.fillStyle = this.color;
		ctx.clearRect(this.x,this.y,this.width,this.height);
		this.move(spd);
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	
	this.update = function(spd){
		this.draw(spd);
	}
}

function generateBlock(y){
	blocks[blockNum] = new block();
	blocks[blockNum].x = 600;
	blocks[blockNum].y = y;
	blocks[blockNum].width = 15;
	blocks[blockNum].height = 15;
	blocks[blockNum].color = 'red';
	
	blockNum ++;
}

function generateBlockUpDown(){
	if(generateTimer <= 0){
		if(Math.round(Math.random())){
			if(Math.round(Math.random())){
				generateBlock(floor.y - 40);
			}else{
				generateBlock(floor.y - 15);
			}
		}
		generateTimer = 30;
	}
	generateTimer --;
}