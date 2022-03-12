
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let blockX = canvas.width/2;
let blockY = canvas.height-40;
let x = canvas.width / 2;
let y = canvas.height/2;
let ballradius = 10;
let dx = 0;
let dy = 0;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let xPressed = false;
let zPressed = false;
let blockHeight = 40;
let blockWidth = 40;
let score = 0;
let AllCoins = [];
let AllFarmers = [];
let AllBluecows = [];
let AllGreencows = [];
let sec = 30;
let bgMusic = new Audio('Backroung music.wav')
let plusCoin = new Audio('plus 1 sound effect.wav')
let minus5sec = new Audio('minus 5 sec.wav')
let plus5sec = new Audio('Plus 5 sec.wav')
let weirdcontrolsound = new Audio('weird controls.wav')
let introMusic = new Audio('Intro music.wav')
let whitecow = new Image();
whitecow.src = "white cow.png"
let bluecow = new Image();
bluecow.src = "Blue cow.png"
let greencow = new Image();
greencow.src = "Green cow.png"
let farmerpic = new Image();
farmerpic.src = "farmer.png"
let alien = new Image();
alien.src = "Alien.png"
let background = new Image();
background.src = "background.png"
let start = new Image();
start.src = "Start image.png"
let instructions = new Image();
instructions.src = "Instructions.png"

let frame = 0


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
class Block{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    drawMe(){
        ctx.drawImage(alien, frame*20, 0, 20, 20, this.x, this.y, 40, 40)

    }
}
let block = new Block(blockX, blockY)
class Coins{
    constructor(x, y){
        this.isVisible = true
        this.x = x;
        this.y = y;
        this.dx = (Math.ceil(Math.random()*2.2))
        this.dy = (Math.ceil(Math.random()*2.2))
        if((Math.floor(Math.random()*2))<1){
            this.dx = this.dx * -1
        }
        if((Math.floor(Math.random()*2))<1){
            this.dy = this.dy * -1
        }
    }
    drawCoins(){
    ctx.drawImage(whitecow, this.x, this.y, 30, 30)
  
}
    moveMe(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.y + this.dy < ballradius){
            this.dy = this.dy*-1;
            
        }
        if(this.y + this.dy > canvas.height-ballradius){
            this.dy = this.dy*-1;
        }
        
        if(this.x + this.dx > canvas.width - ballradius || this.x + this.dx < ballradius){
            this.dx = this.dx*-1;
        }
        if(this.x > block.x && this.x < block.x + blockWidth && this.y > block.y && this.y < block.y + blockHeight){
            this.isVisible = false;
            score++
           plusCoin.play();
        }
    }
    
}
let coin = new Coins(x, y)
class Farmers {
    constructor(x, y){
        this.isVisible = true
        this.x = x;
        this.y = y;
        this.dx = (Math.ceil(Math.random()*2))
        this.dy = (Math.ceil(Math.random()*2))
        if((Math.floor(Math.random()*2))<1){
            this.dx = this.dx * -1
        }
        if((Math.floor(Math.random()*2))<1){
            this.dy = this.dy * -1
        }
    }
    drawFarmers(){
    ctx.drawImage(farmerpic, this.x, this.y, 30, 30)
     
}
    moveMe(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.y + this.dy < ballradius){
            this.dy = this.dy*-1;
            
        }
        if(this.y + this.dy > canvas.height-ballradius){
            this.dy = this.dy*-1;
        }
        
        if(this.x + this.dx > canvas.width - ballradius || this.x + this.dx < ballradius){
            this.dx = this.dx*-1;
        }
        if(this.x > block.x && this.x < block.x + blockWidth && this.y > block.y && this.y < block.y + blockHeight){
            this.isVisible = false;
            sec -= 5;
            minus5sec.play();
        }
    }
}
let farmer = new Farmers (x, y)
class BlueCows {
    constructor(x, y){
        this.isVisible = true
        this.x = x;
        this.y = y;
        this.dx = (Math.ceil(Math.random()*3))
        this.dy = (Math.ceil(Math.random()*3))
        if((Math.floor(Math.random()*2))<1){
            this.dx = this.dx * -1
        }
        if((Math.floor(Math.random()*2))<1){
            this.dy = this.dy * -1
        }
    }
    drawBluecows(){
        ctx.drawImage(bluecow, this.x, this.y, 30, 30);
    
     
}
    moveMe(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.y + this.dy < ballradius){
            this.dy = this.dy*-1;
            
        }
        if(this.y + this.dy > canvas.height-ballradius){
            this.dy = this.dy*-1;
        }
        
        if(this.x + this.dx > canvas.width - ballradius || this.x + this.dx < ballradius){
            this.dx = this.dx*-1;
        }
        if(this.x > block.x && this.x < block.x + blockWidth && this.y > block.y && this.y < block.y + blockHeight){
            this.isVisible = false;
            if(sec>0 && sec<=25){
            sec += 5;
            }
            plus5sec.play();
        }
    }
}
let bluecows = new BlueCows (x, y)
class GreenCows {
    constructor(x, y){
        this.isVisible = true
        this.x = x;
        this.y = y;
        this.dx = (Math.ceil(Math.random()*2))
        this.dy = (Math.ceil(Math.random()*2))
        if((Math.floor(Math.random()*2))<1){
            this.dx = this.dx * -1
        }
        if((Math.floor(Math.random()*2))<1){
            this.dy = this.dy * -1
        }
    }
    drawGreencows(){
        ctx.drawImage(greencow, this.x, this.y, 30, 30)
    
    
     
}
    moveMe(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.y + this.dy < ballradius){
            this.dy = this.dy*-1;
            
        }
        if(this.y + this.dy > canvas.height-ballradius){
            this.dy = this.dy*-1;
        }
        
        if(this.x + this.dx > canvas.width - ballradius || this.x + this.dx < ballradius){
            this.dx = this.dx*-1;
        }
        if(this.x > block.x && this.x < block.x + blockWidth && this.y > block.y && this.y < block.y + blockHeight){
            this.isVisible = false;
            upPressed = false;
            downPressed = true;
            leftPressed = false;
            rightPressed = true;
            weirdcontrolsound.play();
        }
    }
}
let greencows = new GreenCows (x, y)
for(let i = 0; i<=4; i++){
    let coin2 = new Coins(x, y)
    AllCoins[i] = coin2
    
}
for(let i = 0; i<3; i++){
    let farmer2 = new Farmers (x, y)
    AllFarmers[i] = farmer2
}
for(let i = 0; i<2; i++){
    let bluecows2 = new BlueCows (x, y)
    AllBluecows[i] = bluecows2
}
for(let i = 0; i<2; i++){
    let greencows2 = new GreenCows (x, y)
    AllGreencows[i] = greencows2
}
function keyDownHandler(e) {
    if (e.key == "S" || e.key == "s") {
        downPressed = true;
    }
    else if (e.key == "W" || e.key == "w") {
        upPressed = true;
        bgMusic.play();
    }else if (e.key == "A" || e.key == "a"){
        leftPressed = true;
    }else if (e.key == "D"|| e.key == "d"){
        rightPressed = true;
    }else if (e.key == "X"|| e.key == "x"){
        xPressed = true;
        bgMusic.play();
    }else if (e.key == "Z" || e.key == "z"){
        zPressed = true;
        
    }
    
}
function keyUpHandler(e) {
    if (e.key == "S" || e.key == "s") {
        downPressed = false;
    }
    else if (e.key == "W" || e.key == "w") {
        upPressed = false;
    }else if (e.key == "A" || e.key == "a"){
        leftPressed = false;
    
    }else if (e.key == "D"|| e.key == "d"){
        rightPressed = false;
    }
}
var id = window.setInterval(function() {
    sec--;
    if (sec< 1){
        sec = 0
    }
}, 1000)
function drawTimer() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("time left: " + sec, 400, 25);
}
function drawScore() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Money gained: " + score + "$", 20, 25);
}

function draw(){
    
        
    if(xPressed){
        introMusic.pause();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(background,0,0,canvas.width,canvas.height)
    for(let i =0; i<=4; i++){
        if(AllCoins[i].isVisible){
        AllCoins[i].drawCoins();
        AllCoins[i].moveMe();
        }
        if(score%5 && score>0){
            for(let e =0; e<4; e++){
                AllCoins[e].isVisible = true;
            }
        }
    }
    for(let i =0; i<3; i++){
        if(AllFarmers[i].isVisible){
        AllFarmers[i].drawFarmers();
        AllFarmers[i].moveMe();
        }
        if(score%5 && score>0){
            for(let c =0; c<3; c++){
                AllFarmers[c].isVisible = true;
            }
        }
    }
    for(let i =0; i<2; i++){
        if(AllBluecows[i].isVisible){
        AllBluecows[i].drawBluecows();
        AllBluecows[i].moveMe();
        }
        if(score%5 && score>0){
            for(let c =0; c<2; c++){
                AllBluecows[c].isVisible = true;
            }
        }
    }
    for(let i =0; i<2; i++){
        if(AllGreencows[i].isVisible){
        AllGreencows[i].drawGreencows();
        AllGreencows[i].moveMe();
        }
        if(score%5 && score>0){
            for(let c =0; c<2; c++){
                AllGreencows[c].isVisible = true;
            }
        }
    }
    block.drawMe();
    drawScore();
    drawTimer();
    if(sec<=0){
        alert("You lose! Your money earned is: "+ score + "$" + "  Press OK to restart!");
        document.location.reload();
        clearInterval(interval);
    }
    
    
    if (rightPressed) {
        block.x += 4;
        if (block.x + blockWidth > canvas.width) {
            block.x = canvas.width - blockWidth;
        }
    }
     if (leftPressed) {
        block.x += -4;
        if (block.x < 0) {
            block.x = 0;
        }
    }
     if(downPressed){
        block.y += 4;
        if (block.y + blockHeight > canvas.height){
            block.y = canvas.height - blockWidth
        }
    }
     if (upPressed){
        block.y += -4;
        if (block.y < 0){
            block.y = 0
        }
    }
}else if(zPressed){
    ctx.drawImage(instructions,0,0,canvas.width,canvas.height)
}else{
    ctx.drawImage(start,0,0,canvas.width,canvas.height)
    introMusic.play();
}
}


let interval = setInterval(draw, 5);

setInterval(function() {
        frame++
        if (frame > 3) frame = 0;
}, 100);
  

