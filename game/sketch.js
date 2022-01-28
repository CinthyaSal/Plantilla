var path,yoda, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var fondo, fondoImg;
var yoda,yodaImg;
var iceGroup;
var ninoGroup;

function preload(){
  fondoImg = loadImage("imagenes/track.png");
  
}

function setup(){
  
  createCanvas(1230,550);
  
  fondo=createSprite(650,200);
  fondo.addImage(fondoImg);
  fondo.scale=1.5;
  
    yoda=createSprite(500,300,20,20);
  
    iceGroup= new Group();
    ninoGroup= new Group();
  
//crea el Límite izquierdo
leftBoundary=createSprite(1220,0,20,1000);
//leftBoundary.visible = false;

//crea el Límite derecho
rightBoundary=createSprite(10,0,20,1000);
//rightBoundary.visible = false;
}

function draw() {
  background(255);
  fondo.velocityY=4;
  
  if(keyDown("LEFT_ARROW")) {
    yoda.x=yoda.x-5;
  }
  if(keyDown("RIGHT_ARROW")) {
    yoda.x=yoda.x+5;
  } 
  
  edges= createEdgeSprites();
  yoda.collide(edges[3]);
  yoda.collide(leftBoundary);
  yoda.collide(rightBoundary);

  if (World.frameCount % 50 == 0) {
    iceBlock();
    ninos();
  }
  
  //código para reiniciar el fondo
  if(fondo.y > 320 ){
    fondo.y = height/2;
  }
  
  drawSprites();
}

function iceBlock(){
  var ice=createSprite(Math.round(random(50,1200)),100,40,20);
  ice.shapeColor="blue";
  ice.setLifetime=170;
  ice.velocityY=5;
  iceGroup.add(ice);

}

function ninos(){
  var nino=createSprite(Math.round(random(50,1200)),500,40,40);
  nino.shapeColor="pink";
  nino.setLifetime=170;
  nino.velocityY=-5;
  ninoGroup.add(nino);
}