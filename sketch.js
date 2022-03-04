
function preload(){
  vid = createVideo('testvideo1_v1.mp4');
}


function setup() { 
  createCanvas(1000, 800);
  
  vid.size(1000, 800);
  
    vid.hide();
    vid.loop()
} 




function draw() { 
  //blendMode(BLEND);
  //background(7, 18, 10);

  
  
  
  blendMode(HARD_LIGHT);
  //blendMode(ADD);
  image(vid,mouseX-200, mouseY-200, 400, 400);
  

  
  
  
  
  
  
  
  
}