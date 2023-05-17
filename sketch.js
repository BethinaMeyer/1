var path,leftBoundary,rightBoundary;
var pathImg,boyImg;
var boy_runing;
var gameover;
var bomb;
var coin;
var energy;
var power;
function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  boy_runing = loadAnimation("runner-1.png","runner-2.png")
  path = loadImage("path.png")
  energy = loadImage("energyDrink.png")
  coin = loadImage("coin.png")
  bomb = loadImage("bomb.png")
  power = loadImage("power.png")
  
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy_runing.scale=0.08;

//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy_runing.y = World.mouseY;
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy_runing.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
if (boy_runing.isTouching(energy)){
  power.visible = true;
}