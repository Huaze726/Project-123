noseX = "";
noseY = "";
filter = "";
function preload() {
  filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("model loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-22;
    noseY = results[0].pose.nose.y+20;
  }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(filter, noseX, noseY, 50, 20);
}

function take_snapshot() {
  save("image.png");
}
