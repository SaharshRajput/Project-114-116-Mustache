function preload()
{

}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
}
function take_snapshot()
{
    save("Mustache");
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
if(results)
{
    console.log(results);
    console.log("Left eye position="+results[0].pose.leftEye.x);
    console.log("Right eye position="+results[0].pose.rightEye.y);
}
}