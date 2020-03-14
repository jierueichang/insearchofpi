let screenw = window.innerWidth;
let screenh = window.innerHeight;

let mapw = 10;
let maph = 10;

let blockwidth = 50;

let grid = [[2,2,2,2,2,2,-1,2,2,2,2,2,2,-1,2,2,2,2,2,2],[2,1,1,1,1,2,-1,2,1,1,1,1,2,-1,2,4,4,4,4,2],[2,1,1,1,1,2,-1,2,1,1,1,1,2,-1,2,4,4,4,4,2],[2,1,1,1,1,2,-1,2,1,1,1,1,2,-1,2,4,4,4,4,2],[1,1,1,1,1,2,-1,2,3,2,2,2,2,-1,2,4,4,4,4,2],[3,2,2,2,2,2,-1,2,3,2,-1,-1,-1,-1,2,4,4,4,4,2],[3,2,-1,-1,-1,-1,-1,2,3,2,-1,-1,-1,-1,2,2,3,2,2,2],[1,2,-1,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,2,3,2,-1,-1],[1,2,-1,-1,-1,-1,-1,2,1,2,2,2,2,2,2,2,3,2,-1,-1],[1,2,-1,-1,-1,-1,-1,2,1,1,1,1,1,1,1,1,1,2,-1,-1],[1,2,-1,-1,-1,-1,-1,2,2,2,2,3,2,2,2,2,2,2,-1,-1],[1,2,-1,-1,-1,-1,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,-1],[1,2,-1,-1,-1,-1,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,-1],[1,2,-1,-1,-1,-1,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,-1],[1,2,2,2,2,2,2,2,2,2,2,1,2,-1,-1,-1,-1,-1,-1,-1],[1,3,1,1,1,1,1,1,1,1,1,1,2,-1,2,2,2,2,2,2],[1,2,2,2,2,2,3,2,2,2,2,2,2,-1,2,1,1,1,1,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1,1,1,1,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1,1,1,1,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1,1,1,1,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1,1,1,1,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,3,2,2,2,2],[1,2,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,3,2,-1,-1,-1],[1,2,-1,-1,-1,2,1,2,2,2,2,2,2,-1,2,1,2,-1,-1,-1],[1,2,-1,-1,-1,2,1,2,2,1,1,1,2,-1,2,1,2,-1,-1,-1],[1,2,-1,-1,-1,2,3,2,2,1,5,1,2,-1,2,1,2,-1,-1,-1],[1,2,-1,-1,-1,2,1,2,2,1,1,1,2,-1,2,1,2,-1,-1,-1],[1,2,-1,-1,-1,2,1,2,2,2,1,2,2,-1,2,1,2,2,2,2],[1,2,2,2,2,2,1,2,-1,2,3,2,-1,-1,2,1,1,1,1,1],[1,1,3,1,1,1,1,2,-1,2,1,2,-1,-1,2,2,2,2,2,3],[2,2,2,1,2,2,2,2,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,-1,-1,2,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],[-1,-1,2,1,3,1,1,1,1,1,1,3,1,1,1,1,1,1,3,1],[-1,-1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[-1,-1,2,1,2,-1,-1,2,2,2,2,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,2,1,1,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,2,1,1,1,2,-1,-1,-1,-1,-1,-1,2,1],[-1,-1,2,1,2,-1,-1,2,2,1,2,2,-1,-1,-1,-1,-1,-1,2,1],[2,2,2,1,2,2,2,2,2,3,2,2,2,2,2,-1,-1,-1,2,1],[3,1,1,1,3,1,1,1,1,1,1,1,1,1,2,-1,-1,-1,2,1],[2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,-1,-1,-1,2,1],[-1,-1,2,2,2,2,2,2,-1,-1,-1,-1,2,1,2,-1,-1,-1,2,1],[-1,-1,2,3,3,3,3,2,-1,-1,-1,-1,2,1,2,2,2,2,2,1],[-1,-1,2,3,3,3,3,2,-1,-1,-1,-1,2,1,3,1,1,1,1,1],[-1,-1,2,3,3,3,3,2,-1,-1,-1,-1,2,1,2,2,2,2,2,2],[-1,-1,2,3,3,3,3,2,2,2,2,2,2,1,2,-1,-1,-1,-1,-1],[-1,-1,2,3,3,3,3,3,1,3,1,1,1,1,2,-1,-1,-1,-1,-1]];
let gates = [];
let specials = [];

let playerx;
let playery;

let startCtr = 255;
let start = 'In Search of π';

let endCtr = 0;
let end = false;

let questionBank = [
    ['What is 1+1?',['1','2','11','undefined'],1],
    ['How many radians are in a pie?',['Which pi?','2π','1','Help'],1],
    ["Help I'm trapped in a computer",["That isn't a question"],0],
    ['What is ln(e)?',['1','I have no idea'],0],
    ['What is ln(e^(ln(e^1)))?',['1','This is ridiculous'],0],
    ['What is the radius of a circle with a circumference of 1?',['1/(2π)','1/(2pie)','1','Open Sesame'],0],
    ['What is the area of a circle with a radius of 10?',['10,000π','1000π','100π','10π','π','0.0001π'],2],
    ['If the short leg of a 30-60-90 triangle is 1 cm long, how long is the hypotenuse?',['1','sqrt(3)','2','2π/3'],2],
    ['What is tan(π/4)?',['sqrt(2)','1','0','undefined'],1]
];

let selected = 0;

for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
        if(grid[i][j]===5){
            playerx=i;
            playery=j;
            grid[i][j]=1;
        }
        if(grid[i][j]===3){
            gates.push([i,j,Math.round(Math.random()*(questionBank.length-1))]);
        }
    }
}

let currentMenu = false;

//let t0,t1,t2,t3,t4,t5;

function setup(){
    createCanvas(screenw,screenh);
    t0=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/ocean.png');
    t1=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/ground.png');
    t2=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/wall.png');
    t3=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/tower.png');
    t4=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/pi.png');
    t5=loadImage('https://raw.githubusercontent.com/jierueichang/insearchofpi/master/assets/one.png');
    textAlign(LEFT,TOP);
    textFont('Times New Roman');
    noStroke();
    textSize(60);
}

function startscreen(){
    if(start){
        background(255);
        textAlign(CENTER,CENTER);
        fill(0,startCtr);
        text(start,screenw/2,screenh/2);
        startCtr-=5;
        if(startCtr<=0){
            if(start==='In Search of π'){
                textSize(20);
                start='"The legendary π hides somewhere in this ancient enchanted maze.\nIt is rumoured to be very delicious, and contains an infinite supply of numbers to chew.\nThough it is quite an irrational quest,\nyou have volunteered to be the One to find the π... but can you?"\n\nArrow keys to move, up/down to select answers, enter to submit questions';
                startCtr=1000;
            }
            else{
                start=false;
                textAlign(LEFT,TOP);
            }
        }
    }
}

function endscreen(){
    if(end){
        background(255);
        textAlign(CENTER,CENTER);
        fill(0,endCtr);
        text("The mythical π has, at long last, been found.\nIt's not quite as tasty as you thought it was.\nTurns out an infinite string of numbers\nis quite hard to digest...\nbut pi(e) is still a very useful thing to have around.\nNot sure where, though.",screenw/2,screenh/2);
        if(endCtr<=255){
            endCtr+=5;
        }
    }
}

function drawbackground(){
    background(0);
    for(let i=0;i<=screenw/blockwidth+2;i++){
        for(let j=0;j<=screenh/blockwidth+2;j++){
            image(t0,(i-1)*blockwidth+(screenw-blockwidth)/2%blockwidth,(j-1)*blockwidth+(screenh-blockwidth)/2%blockwidth,blockwidth,blockwidth);
        }
    }
}

function drawgrid(){
    for(let i=0;i<50;i++){
        for(let j=0;j<20;j++){
            if(grid[i][j]!=-1){
                image(window['t'+grid[i][j].toString()],(i-playerx)*blockwidth+(screenw-blockwidth)/2,(j-playery)*blockwidth+(screenh-blockwidth)/2,blockwidth,blockwidth);
            }
        }
    }
}

function popupMenu(){
    if(currentMenu){
        textSize(20);
        fill(50,200);
        let w = textWidth(currentMenu[2][0])+20;
        let h = (currentMenu[2][1].length+1)*30+10;
        rect((currentMenu[0]-playerx)*blockwidth+(screenw-blockwidth)/2-(w-blockwidth)/2,(currentMenu[1]-playery)*blockwidth+(screenh-blockwidth)/2-h-20,w,h);
        
        fill(255);
        text(currentMenu[2][0],(currentMenu[0]-playerx)*blockwidth+(screenw-blockwidth)/2-(w-blockwidth)/2+10,(currentMenu[1]-playery)*blockwidth+(screenh-blockwidth)/2-h-20+10);
        for(let i=0; i<currentMenu[2][1].length; i++){
            if(selected===i){
                fill(100,255,100);
            }
            else{
                fill(200);
            }
            text(currentMenu[2][1][i],(currentMenu[0]-playerx)*blockwidth+(screenw-blockwidth)/2-(w-blockwidth)/2+10,(currentMenu[1]-playery)*blockwidth+(screenh-blockwidth)/2-h-20+20+20*(i+1));
        }
    }
}

function getQuestion(x,y){
    selected = 0;
    for(let i in gates){
        if(gates[i][0]===x&&gates[i][1]===y){
            return questionBank[gates[i][2]];
        }
    }
}

function gateHandler(){
    if(keyCode===UP_ARROW&&grid[playerx][playery-1]===3){
        currentMenu=[playerx,playery-1,getQuestion(playerx,playery-1)];
    }
    if(keyCode===DOWN_ARROW&&grid[playerx][playery+1]===3){
        currentMenu=[playerx,playery+1,getQuestion(playerx,playery+1)];
    }
    if(keyCode===RIGHT_ARROW&&grid[playerx+1][playery]===3){
        currentMenu=[playerx+1,playery,getQuestion(playerx+1,playery)];
    }
    if(keyCode===LEFT_ARROW&&grid[playerx-1][playery]===3){
        currentMenu=[playerx-1,playery,getQuestion(playerx-1,playery)];
    }
    console.log(currentMenu);
}

function selectionHandler(){
    if(keyCode===UP_ARROW){
        selected-=1;
        if(selected<0){
            selected = currentMenu[2][1].length-1;
        }
    }  
    if(keyCode===DOWN_ARROW){
        selected+=1;
        if(selected>currentMenu[2][1].length-1){
            selected=0;
        }
    }
    if(keyCode===ENTER){
        if(selected===currentMenu[2][2]){
            grid[currentMenu[0]][currentMenu[1]] = 1;
            currentMenu = false;
        }
        else{
            currentMenu[2] = questionBank[Math.round(Math.random()*(questionBank.length-1))];
            selected = 0;
        }
    }
}

function winHandler(){
    if(keyCode===UP_ARROW&&grid[playerx][playery-1]===4){
        end = true;
    }
    if(keyCode===DOWN_ARROW&&grid[playerx][playery+1]===4){
        end = true;
    }
    if(keyCode===RIGHT_ARROW&&grid[playerx+1][playery]===4){
        end = true;
    }
    if(keyCode===LEFT_ARROW&&grid[playerx-1][playery]===4){
        end = true;
    }
}

function drawplayer(){
    image(t5,(screenw-blockwidth)/2,(screenh-blockwidth)/2,blockwidth,blockwidth);
}

function keyPressed(){
    if(currentMenu===false){
        if(keyCode===UP_ARROW&&grid[playerx][playery-1]===1){playery-=1;}
        else if(keyCode===DOWN_ARROW&&grid[playerx][playery+1]===1){playery+=1;}
        else if(keyCode===RIGHT_ARROW&&grid[playerx+1][playery]===1){playerx+=1;}
        else if(keyCode===LEFT_ARROW&&grid[playerx-1][playery]===1){playerx-=1;}
        else{
            gateHandler();
            winHandler();
        }     
    }
    else{
        selectionHandler();
    }
}

function draw(){
    if(start){
        startscreen();
    }
    else if(end){
        endscreen();
    }
    else{
        drawbackground();
        drawgrid();
        drawplayer();
        popupMenu();
    }
}