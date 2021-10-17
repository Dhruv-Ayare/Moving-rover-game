canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images_array=["Image_1.jpeg","Image_2.jpeg","Image_3.jpeg","Image_4.jpeg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
rover_X=10;
rover_Y=10;
backround_image=mars_images_array[random_number];
rover_image="rover.png";
function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=backround_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height); 
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_X,rover_Y,rover_width,rover_height); 
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");

    }
    if(keyPressed=="40"){
        down();
        console.log("down");
        
    }
    if(keyPressed=="37"){
        left();
        console.log("left"); 
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow is pressed x="+rover_X+",Y="+rover_Y);
        uploadBackground(); 
        uploadrover();
    }
}
function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow is pressed x="+rover_X+",Y="+rover_Y);
        uploadBackground(); 
        uploadrover();
    }
}
function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        console.log("when left arrow is pressed x="+rover_X+",Y="+rover_Y);
        uploadBackground(); 
        uploadrover();
    }
}
function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        console.log("when right arrow is pressed x="+rover_X+",Y="+rover_Y);
        uploadBackground(); 
        uploadrover();
    }
}