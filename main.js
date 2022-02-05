nosex = "";
nosey = "";
function preload(){
  img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
 canvas = createCanvas(300,250);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300)
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,250);
    image(img,nosex,nosey,60, 45);
}
function take_snapshot(){
    save("Filter_web_app.png");

    
}
function modelLoaded(){
    console.log("Posnet is Intialized");
}
function gotPoses(results){
    console.log(results);
    nosex = results[0].pose.nose.x - 30;
    nosey = results[0].pose.nose.y -30;
    

    console.log(" nose x = "+nosex);
    console.log("nose y = "+nosey);

}