song = "";
leftwristX = "";
leftwristY = "";
rightwristX = "";
rightwristY = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX =" + leftwristX + " LeftWristY =" + leftwristY);
        rightwristX = results[0].pose.RightWrist.x;
        rightwristY = results[0].pose.RightWrist.y;
        console.log("RightWristX =" + rightwristX + " RightWristY =" + rightwristY);
    }
}

function draw(){
    image(video, 0 ,0 ,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}