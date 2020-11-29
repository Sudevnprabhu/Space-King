var canvas;
var player;
var ag, ag1, ag2, ag3, ag4, ag5, ag6, ag7;//red enemy
var bG, bg1, bg2, bg3, bg4//blue enemy
var missileG;
var x = [100, 300, 500, 700, 900, 1100];
var bullet
var ufo;
var bulletimg, bg, blueE, redE, playership, playershipA, ufoimg, emyimg;
var blastimg, blast;
var enemymissile;
var enemyship, enemyshipimg;
var superbeen, superbeenimg;
var powerup, powerupimg;
var llbean, llbeanimg;

var score = 0;
var power = 0;
var ehealth=100;
var phealth=100;

var soundmonst;
var soundmiss;
var soundwin;
var soundlost;

function preload() {
  playership = loadImage("see/player.png");
  bg = loadImage("see/bg.png");
  bulletimg = loadImage("see/laser.png");
  playershipA = loadImage("see/playership.png")
  redE = loadImage("see/redE.png")
  blueE = loadImage("see/blueE.png")
  ufoimg = loadImage("see/ufo.png")
  emyimg = loadImage("see/em.png")
  blastimg = loadImage("see/blast.png")
  enemyshipimg = loadImage("see/enemyship.png")
  powerupimg = loadImage("see/power.png")
  superbeenimg = loadImage("see/superbeen.png")
  llbeanimg = loadImage("see/llbean.png")
  soundmiss = loadSound("see/blast.mp3")
  soundmonst=loadSound("see/monster-ror.mp3")
  soundwin=loadSound("see/win.mp3")
  soundlost=loadSound("see/lose.mp3")
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 150);//400,600
  // canvas.center();
  player = createSprite(displayWidth / 2, 500, 30, 30);
  player.addImage("ply", playership);

  bullet = createSprite(10000, 200, 20, 60);
  bullet.addImage(bulletimg);
  bulletimg.resize(width / 10, height / 8);

  llbean = createSprite(10000, 200, 20, 60);
  llbean.addImage(llbeanimg);
  llbeanimg.resize(width / 10, height / 8);

  superbeen = createSprite(10000, 200, 20, 60);
  superbeen.addImage(superbeenimg);
  superbeenimg.resize(width / 10, height / 8);

  ufo = createSprite(displayWidth / 2, 50, 20, 20);
  ufo.addImage(ufoimg);
  ufoimg.resize(width / 6, height / 6);
  ufo.velocityX = -4;

  powerup = createSprite(10000, 50, 20, 20);
  powerup.addImage(powerupimg);
  powerupimg.resize(width / 11, height / 11);

  enemyship = createSprite(displayWidth / 2, 15000, 20, 20);
  enemyship.addImage(enemyshipimg);

  playership = createSprite(displayWidth / 2, 50000, 20, 20);
  playership.addImage(playershipA);


  //line1
  ag = createSprite(100, 150, 20, 20);
  ag.addImage(redE);
  redE.resize(width / 10, height / 10);
  ag.velocityX = -3;

  bG = createSprite(300, 150, 20, 20);
  bG.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bG.velocityX = -3;

  ag1 = createSprite(500, 150, 20, 20);
  ag1.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag1.velocityX = -3;

  bg1 = createSprite(700, 150, 20, 20);
  bg1.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bg1.velocityX = -3;

  ag4 = createSprite(900, 150, 20, 20);
  ag4.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag4.velocityX = -3;

  bg4 = createSprite(1100, 150, 20, 20);
  bg4.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bg4.velocityX = -3;

  ag5 = createSprite(1300, 150, 20, 20);
  ag5.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag5.velocityX = -3;


  //line2
  ag2 = createSprite(100, 250, 20, 20);
  ag2.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag2.velocityX = 3;

  bg2 = createSprite(300, 250, 20, 20);
  bg2.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bg2.velocityX = 3;

  ag3 = createSprite(500, 250, 20, 20);
  ag3.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag3.velocityX = 3;

  bg3 = createSprite(700, 250, 20, 20);
  bg3.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bg3.velocityX = 3;

  ag6 = createSprite(900, 250, 20, 20);
  ag6.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag6.velocityX = 3;

  bg4 = createSprite(1100, 250, 20, 20);
  bg4.addImage(blueE);
  blueE.resize(width / 8, height / 8);
  bg4.velocityX = 3;

  ag7 = createSprite(1300, 250, 20, 20);
  ag7.addImage(redE);
  redE.resize(width / 8, height / 8);
  ag7.velocityX = 3;




  blast = createSprite(10000, 200, 20, 20);
  blast.addImage(blastimg);
  blastimg.resize(width / 5, height / 5);


  enemymissile = createSprite(10000, 200, 30, 30);
  enemymissile.addImage(emyimg);
  emyimg.resize(width / 6, height / 6)

}

function draw() {
  background(bg);//rgb(125, 96, 137)

  textSize(50);
  fill("red");
  stroke("black");
  text("Score:" + score, 100, 580);


  textSize(50);
  fill("red");
  stroke("black");
  text("⚡power:" + power, 1000, 580);


  if (ufo.x < 0) {
    ufo.x = 1300;
  }



  if (ag.x < 0) {
    ag.x = 1330;
  }

  if (bG.x < 0) {
    bG.x = 1330;
  }

  if (ag1.x < 0) {
    ag1.x = 1330;
  }

  if (bg1.x < 0) {
    bg1.x = 1330;
  }

  if (ag4.x < 0) {
    ag4.x = 1330;
  }

  if (bg4.x < 0) {
    bg4.x = 1330;
  }

  if (ag5.x < 0) {
    ag5.x = 1330;
  }



  if (ag2.x > 1330) {
    ag2.x = 0;
  }

  if (bg2.x > 1330) {
    bg2.x = 0;
  }

  if (ag3.x > 1330) {
    ag3.x = 0;
  }

  if (bg3.x > 1330) {
    bg3.x = 0;
  }

  if (ag6.x > 1330) {
    ag6.x = 0;
  }

  if (bg4.x > 1330) {
    bg4.x = 0;
  }

  if (ag7.x > 1330) {
    ag7.x = 0;
  }




  if (bullet.isTouching(ag)) {
    done();
    //  power += 1
  }
  if (bullet.isTouching(ag1)) {
    done1();
    //  power += 1
  }
  if (bullet.isTouching(ag2)) {
    done2();
    //  power += 1
  }
  if (bullet.isTouching(ag3)) {
    done3();
    //  power += 1
  }
  if (bullet.isTouching(ag4)) {
    done4();
    //  power += 1
  }
  if (bullet.isTouching(ag5)) {
    done9();
    //  power += 1
  }
  if (bullet.isTouching(ag6)) {
    done10();
    //  power += 1
  }
  if (bullet.isTouching(ag7)) {
    done11();
    //  power += 1
  }


  if (bullet.isTouching(bG)) {
    done5();
    //  power += 1
  }
  if (bullet.isTouching(bg1)) {
    done6();
    //  power += 1
  }
  if (bullet.isTouching(bg2)) {
    done7();
    //  power += 1
  }
  if (bullet.isTouching(bg3)) {
    done8();
    //  power += 1
  }
  if (bullet.isTouching(bg4)) {
    done12();
    //  power += 1
  }

// //temp
//   if (power === 6){
//     ag.remove();
//     ag1.remove();
//     ag2.remove();
//     ag3.remove();
//     ag4.remove();
//     ag5.remove();
//     ag6.remove();
//     ag7.remove();
//     bG.remove();
//     bg1.remove();
//     bg2.remove();
//     bg3.remove();
//     bg4.remove();
//     ufo.remove();
//   }



  if (bullet.isTouching(ufo)) {
    u4();
    powerup.x = ufo.x;
    powerup.y = ufo.y;
    powerup.velocityY = 6;
    soundmonst.play();
  }



  if (powerup.collide(player)) {
    power += 1
    powerup.x = 10000
  }

  if (power>5){
    textSize(50);
    fill("red");
    stroke("black");
    text("Enemy-Health:" + ehealth+ " %", 800, 280);

    
    textSize(50);
    fill("red");
    stroke("black");
    text("Enemy-Health:" + phealth+ " %", 800, 520);
  }



  if (power > 5 && frameCount % 60 === 0) {
    enemymissile.x=enemyship.x;
    enemymissile.y=enemyship.y;
    enemymissile.velocityY = 5;

    enemymissile.lifetime = 120
  }

  if(superbeen.collide(enemymissile)){
    enemymissile.x=100000000;
    superbeen.x=1000000;
    soundmiss.play();
  }

  if(superbeen.collide(enemyship)){
    ehealth=ehealth-10
    soundmiss.play();
  }

  if(enemymissile.collide(playership)){
    phealth=phealth-10
    soundmiss.play();
  }

  if(ehealth===0){
    gameover();
    textSize(50);
    fill("Green");
    stroke("black");
    text("You won" , 600, 350);
  }else  if(phealth===0){
    youlost();
    textSize(50);
    fill("red");
    stroke("black");
    text("You lost" , 600, 350);
    enemymissile.x=10000000;
  }
 

  if (llbean.isTouching(ufo)) {
    Change();
    player.remove();
    playership.y = 500;
    power = power + 1;
  }

  if (frameCount % 90 === 0) {

    enemymissile.x = ufo.x;
    enemymissile.y = ufo.y;
    enemymissile.velocityY = 5;

    enemymissile.lifetime = 120
  }


  if (enemymissile.isTouching(player)) {
    enemymissile.velocityY = 0;

    Over();
  }

  if (enemymissile.isTouching(bullet)) {
    enemymissile.velocityY = 0;
    trya();
  }

  if (ufo.velocityX === 0) {
    enemymissile.velocityY = 0
    enemymissile.lifetime = 100000;
    text("Game Over", 600, 400);
    text("press 'SPACE' to restart",530,480);
    enemymissile.remove();
  }


  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    // bullet.velocityX=-2;
    bullet.velocityY = -4;
    bullet.x = player.x;
    bullet.y = player.y;
  }
  if (keyCode === UP_ARROW && power === 5) {
    bullet.remove();
    llbean.x = player.x;
    llbean.y = player.y;
    llbean.velocityY = -4;
  }
  if (keyCode === UP_ARROW && power > 5) {
    llbean.remove();
    superbeen.x = playership.x;
    superbeen.y = playership.y;
    superbeen.velocityY = -4;
  }
  if (keyCode === LEFT_ARROW) {
    player.x = player.x - 20;
  }
  if (keyCode === RIGHT_ARROW) {
    player.x = player.x + 20;
  }
  if (keyCode === LEFT_ARROW && power > 5) {
    playership.x = playership.x - 20;
  }
  if (keyCode === RIGHT_ARROW && power > 5) {
    playership.x = playership.x + 20;
  }
}

function gameover(){
  blast.x=enemyship.x;
  blast.y=enemyship.y;
  enemymissile.remove();
  soundwin.play();
}

function youlost(){
  blast.x=playership.x;
  blast.y=playership.y;
  enemymissile.remove();
  soundlost.play();
}

function Change() {
  blast.x = ufo.x;
  blast.y = ufo.y;
  soundmiss.play();
  again();
}

function again() {
  ufo.remove();
  blast.x = 100000;
  enemyship.y = 150;
}

function Over() {
  blast.x = player.x;
  blast.y = player.y;
  ufo.velocityX = 0;
  soundmiss.play();
}

function trya() {
  blast.x = bullet.x;
  blast.y = bullet.y;
  soundmiss.play();
}

function u4() {
  if (frameCount % 20 === 0) {
    var spaceshooters = createSprite(10000, 100, 20, 20);
    spaceshooters.addImage(blueE);
    redE.resize(width / 8, height / 8);
    spaceshooters.x = random(x);
    spaceshooters.y = 0;
    spaceshooters.velocityY = 5;

    spaceshooters.lifetime = 120;
  }
}

function done() {
  ag.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done1() {
  ag1.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done2() {
  ag2.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done3() {
  ag3.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done4() {
  ag4.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done5() {
  bG.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done6() {
  bg1.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done7() {
  bg2.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done8() {
  bg3.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done9() {
  ag5.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done10() {
  ag6.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done11() {
  ag7.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done12() {
  bg4.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}

function done13() {
  bg5.remove();
  bullet.x = 10000;
  bullet.y = 200;
  score = score + 100;
  soundmonst.play();
}




























// function spawnmissile() {
//   if (frameCount % 90 === 0) {
//    enemymissile=createSprite(900,200,30,30);
//     enemymissile.addImage(emyimg);
//     emyimg.resize(width/6,height/6)
//     enemymissile.x = ufo.x;
//     enemymissile.y = ufo.y;
//     enemymissile.velocityY = 5;

//     enemymissile.lifetime = 120

//    missileG.add(enemymissile)
//   }
// }

// function spawnb() {
//   if (frameCount % 3 === 0) {
//     var ag = createSprite(200, 0, 20, 20);
//     ag.x = random(x);
//     ag.shapeColor = "yellow";
//     ag.velocityY = 5;

//     ag.lifetime = 120
//   }
// }

// function spawnc() {
//   if (frameCount % 4 === 0) {
//     var ag = createSprite(200, 0, 20, 20);
//     ag.x = random(x);
//     ag.shapeColor = "indigo";
//     ag.velocityY = 5;

//     ag.lifetime = 120
//   }
// }

// function spawnd() {
//   if (frameCount % 5 === 0) {
//     var ag = createSprite(200, 0, 20, 20);
//     ag.x = random(x);
//     ag.shapeColor = "orange";
//     ag.velocityY = 5;

//     ag.lifetime = 120
//   }
// }