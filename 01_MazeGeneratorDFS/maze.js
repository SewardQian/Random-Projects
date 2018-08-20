class Node{
	constructor(i,j){
		this.visited = false;
		this.backtracked = false;

		this.i = i*10;
		this.j = j*10;

		this.top = true;
		this.right = true;
		this.bottom = true;
		this.left = true;

	}

	show(){
		if (this.backtracked){
			fill(0,0,255,150);
			noStroke();
			rect(this.i,this.j,10,10);
		}else if(this.visited){
			fill(255,0,255,100);
			noStroke();
			rect(this.i,this.j,10,10);
		}
		stroke(255,255,255,50);
		if(this.top)	line(this.i, this.j, this.i+10, this.j);
		if(this.right)	line(this.i+10, this.j, this.i+10, this.j+10);
		if(this.bottom)	line(this.i, this.j+10, this.i+10, this.j+10);
		if(this.left)	line(this.i, this.j, this.i, this.j+10);
	}


	visit(){
		this.visited = true;
	}

	backtrack(){
		this.backtracked = true;
	}
}

class Maze{
	constructor(x = 50, y = 50, startX = 0,
				startY = 0, endX = 49, endY = 49){
		this.x = x;
		this.y = y;
		this.startPoint = createVector(startX,startY);
		this.endPoint = createVector(endX,endY);

		this.array = new Array(x);
		for(let i = 0; i < x; i++){
			this.array[i] = new Array(y);
		}

		for(let i = 0; i < x; i++){
			for(let j = 0; j < y; j++){
				this.array[i][j] = new Node(i,j);
			}
		}
	}

	generate(){
		var current = this.startPoint.copy();
		this.array[current.x][current.y].visit();
		console.log(current);

		var next = this.checkNeighbours(current);
		if (next) {
			this.array[next.x][next.y].visit();
			current = next;
		}

	}

	print(){
		background(0);
		stroke(0);
		for(let i = 0; i < this.x; i++){
			for(let j = 0; j < this.y; j++){
				this.array[i][j].show();
			}
		}
	}

	checkNeighbours(current){
		var neighbours = [];
		//top
		if (this.isInBound(current.x,current.y-1) && !this.array[current.x][current.y-1].visited){
			neighbours.push(createVector(current.x,current.y-1));
		}
		//right
		if (this.isInBound(current.x+1,current.y) && !this.array[current.x+1][current.y].visited){
			neighbours.push(createVector(current.x+1,current.y));
		}
		//bottom
		if (this.isInBound(current.x,current.y+1) && !this.array[current.x][current.y+1].visited){
			neighbours.push(createVector(current.x,current.y+1));
		}
		//left
		if (this.isInBound(current.x-1,current.y) && !this.array[current.x-1][current.y].visited){
			neighbours.push(createVector(current.x-1,current.y));
		}

		if(neighbours.length>0){
			let ind = floor(random(0,neighbours.length));
			return neighbours[ind];
		} else {
			return false;
		}
	}

	removeWall(current,next){
		if (current.x == next.x && current.y == next.y+1) {
			//Top
			this.array[current.x][current.y].top = false;
			this.array[next.x][next.y].bottom = false;
		} else if (current.x == next.x-1 && current.y == next.y) {
			//Right
			this.array[current.x][current.y].right = false;
			this.array[next.x][next.y].left = false;
		} else if (current.x == next.x && current.y == next.y-1) {
			//Bottom
			this.array[current.x][current.y].bottom = false;
			this.array[next.x][next.y].top = false;
		} else if (current.x == next.x+1 && current.y == next.y) {
			//Left
			this.array[current.x][current.y].left = false;
			this.array[next.x][next.y].right = false;
		}
	}

	isInBound(x,y){
		return (x>=0 && y>=0 && x<this.x && y<this.y);
	}
}


