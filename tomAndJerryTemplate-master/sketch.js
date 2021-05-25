var cat1,cat2,cat3,cat4,catImg;
var mouse1,mouse2,mouse3,mouse4,mouseImg;
var garden,gardenImg;



function preload() {
catImg1 = loadImage("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadImage("images/cat4.png");
mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadImage("images/mouse4.png");
gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
cat = createSprite(800,500,200,200); 
cat.addImage(catImg1);    

}

function draw() {

    background(gardenImg);
    

    drawSprites();
}


function keyPressed(){

  


}
