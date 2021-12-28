noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");


	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game");

	poseNet = ml5.poseNet(video, modellloaded);
	poseNet.on("pose", getPoses);
}

function modellloaded() {
	console.log(start);
}

function getPoses(error, results) {
	if (error) {
		console.error();
	} else {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}

function draw() {
	game()
}