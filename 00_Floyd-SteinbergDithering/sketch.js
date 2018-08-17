
let imageName = 'Octocat.jpg'  //image name
let resizeFactor = 2; //to resize the canvas
let dotsize = 1 ;  //to resize the output
let savePicture = false; //true to save the image throught browser download

function preload(){
	img = loadImage(imageName);

}

function setup() {
	
	
	background(0);

	createCanvas(2*img.width/resizeFactor, img.height/resizeFactor);
	img.filter("GRAY");
	img.loadPixels();

	//	

	image(img,0,0,img.width/resizeFactor,img.height/resizeFactor);


	var output = createImage(floor(img.width/dotsize),floor(img.height/dotsize));
	output.loadPixels();

	for(let i = 0;i<output.width;i++){
		for(let j = 0;j<output.height;j++){


			var index = (i + j * output.width) * 4;
			var originalIndex = (i* dotsize  + j * dotsize * img.width) * 4;
			output.pixels[index] = img.pixels[originalIndex];
			output.pixels[index + 1] = img.pixels[originalIndex];
			output.pixels[index + 2] = img.pixels[originalIndex];
			output.pixels[index + 3] = 255;
			
		}
	}

	let w = output.width;
	let h = output.height;

	for(let i = 0;i<output.width;i++){
		for(let j = 0;j<output.height*2;j++){
			//var index = (i + j * output.width) * 4;
			

			let oldpixel  = output.pixels[getindex(output.width,i,j)];
			let newpixel  = round(oldpixel/255)*255;

			let ind = getindex(w,i,j);
			output.pixels[ind] = newpixel;
			output.pixels[ind + 1] = newpixel;
			output.pixels[ind + 2] = newpixel;
			let quant_error  = oldpixel - newpixel;
			
			if (isInBound(w,h,i+1,j)){
				let ind = getindex(w,i+1,j);
				output.pixels[ind] += quant_error * 7 / 16;
				output.pixels[ind+1] += quant_error * 7 / 16;
				output.pixels[ind+2] += quant_error * 7 / 16;
			}

			if (isInBound(w,h,i-1,j+1)){
				let ind = getindex(w,i-1,j+1);
				output.pixels[ind] += quant_error * 3 / 16;
				output.pixels[ind+1] += quant_error * 3 / 16;
				output.pixels[ind+2] += quant_error * 3 / 16;
			}

			if (isInBound(w,h,i,j+1)){
				let ind = getindex(w,i,j+1);
				output.pixels[ind] += quant_error * 5 / 16;
				output.pixels[ind+1] += quant_error * 5 / 16;
				output.pixels[ind+2] += quant_error * 5 / 16;
			}

			if (isInBound(w,h,i+1,j+1)){
				let ind = getindex(w,i+1,j+1);
				output.pixels[ind] += quant_error * 1 / 16;
				output.pixels[ind+1] += quant_error * 1 / 16;
				output.pixels[ind+2] += quant_error * 1 / 16;
			}
		}
	}



	output.updatePixels();
	image(output,img.width/resizeFactor,0,output.width*dotsize/resizeFactor,output.height*dotsize/resizeFactor);
	if (savePicture){
		output.save();
	}
}

function draw() {

}

function getindex(w,x,y){
	return ((x + y * w) * 4);
}

function isInBound(w,h,x,y){
	return (x>=0 && x<w && y>0 && y<h);
}