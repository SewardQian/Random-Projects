var current;
var stack = new Stack();

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(100,100);
	maze = new Maze();
	current = maze.startPoint.copy();
}

function draw() {
	//frameRate(100);

	if (current != undefined){
	
		maze.array[current.x][current.y].visit();

		//if the current cell has any unvisited neighbours
		//choose randomly one of the unvisited neighbours
		var next = maze.checkNeighbours(current);
		if (next) {
			//push the current cell to the stack
			stack.push(current.copy());
			//remove the wall between the current cell and the chosen cell
			maze.removeWall(current,next);
			//make the chosen cell the current cell and mark it as visited
			maze.array[next.x][next.y].visit();
			current = next.copy();
		} else {
			//pop a cell from the stack
			//make it the current 
			current = stack.pop();
		}

		

		maze.print();
		noStroke();
		fill(0,255,0,200);
		rect(current.x*10,current.y*10,10,10);

	}
}