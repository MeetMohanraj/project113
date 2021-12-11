function preload(){

}
function setup(){
    canvas =createCanvas(400,450);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
   image(video,100,82,220,250);
   
   stroke(168,10,10);
   fill(168,10,10);

   circle(360,40,50);
   circle(480,40,50);
   circle(40,360,50);
   circle(460,360,50);

   stroke(50,168,82);

   circle(360,360,50);
   circle(480,40,50);
   circle(40,360,50);
   circle(460,360,50);

   stroke(50,168,82);

   circle(40,40,50);
   circle(480,40,50);
   circle(40,360,50);
   circle(460,360,50);


   stroke(50,168,82);
   fill(50,168,82);

   
   rect(63,27,273,25);
   rect(63,350,273,25);
   rect(27,63,25,275);
   rect(350,63,25,275);
}
function take_snapshot(){
    save('CLOWNimage.png')
}