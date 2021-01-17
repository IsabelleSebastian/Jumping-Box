var canvas;
var music;
var box1,box2,box3,box4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(100,570,180,20);
box2 = createSprite(300,570,180,20);
box3 = createSprite(500,570,180,20);
box4 = createSprite(700,570,180,20);

    //create box sprite and give velocity
box = createSprite(random(20,750),30,40,40);
box.velocityX = -5;
box.velocityY = 7;

edges = createEdgeSprites();
}

function draw() {
    background(rgb(56,58,62));
    box1.shapeColor = "darkturquoise"
    box2.shapeColor = rgb(100,130,180)
    box3.shapeColor = "darkcyan"
    box4.shapeColor = rgb(112,128,144)
    //create edgeSprite

box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
if(box.isTouching(box1)){
    box.bounceOff(box1);
    box.shapeColor = "darkturquoise"
} else if(box.isTouching(box2)){
    box.bounceOff(box2);
    box.shapeColor = rgb(100,130,180);
} else if(box.isTouching(box3)){
    box.bounceOff(box3);
    box.shapeColor = "darkcyan"
} else if(box.isTouching(box4)){
    box.bounceOff(box4);
    box.shapeColor = rgb(112,128,144);
}

    drawSprites();

}
