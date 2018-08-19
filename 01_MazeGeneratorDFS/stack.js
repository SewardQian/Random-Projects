class Stack{
	constructor(){
		this.array = new Array(100);
		this.capacity = 100;
		this.length = 0;
	}

	push(newCell){
		this.checkResize();
		this.array[this.length] = newCell;
		this.length++;
	}

	checkResize(){
		if (this.length == this.capacity-1){
			this.capacity = this.capacity*2;
			let newarray = new Array(this.capacity);
			for (let i = 0; i<this.length; i++){
				newarray[i] = this.array[i];
			}
			this.array = newarray;
		}
	}

	pop(){
		this.length--;
		return this.array[this.length];
	}

	peek(){
		return this.array[this.length];
	}
}