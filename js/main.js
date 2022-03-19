let    $  = (a) => document.querySelector(a) 
let uni   = (a) => a.charCodeAt()
let chr   = (a) => String.fromCharCode(a)
let rand  = (a) => a[Math.floor(Math.random()*a.length)]

function toHex(strat,end){
    let arr=[];
    for(i=strat;i<end+1;i++){
        arr.push(i.toString(16))
    }
    return arr
}

let chars=(strat,end)=>{
    strat = uni(strat)
    end   = uni(end)
    let arr=[]
    for(i=strat;i<end+1;i++){
        y=chr(i)
        if(!y.match(/[\x]/g)){arr.push(y)}
    }
    return arr
}


let t=chars('0','z')
o    =toHex(0,256)
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#FFF';
ctx.fillRect(0, 0, w, h);
i=0
y=0
c=0
ctx.fillStyle = '#0f0f0f';
ctx.fillRect(0, 0, w, h);
clr = i%2==0 ? [rand(o),rand(o),rand(o)].join('') : [rand(o),'FF',rand(o)].join('')
ctx.fillStyle = '#'+clr
ctx.font = '25pt monospace';
ctx.fillText(rand(t),78,277); 

function matrix () {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    
    ctx.font = '25pt monospace';
    k=[]
    for(i=0;i<80;i++){
        for(j=0;j<80;j++){
            ctx.fillStyle = '#'+rand(o)+rand(o)+rand(o)
            if(y>Math.random()*1e3){y=0}
            y+=Math.random()*1e4
            ctx.fillText(rand(t),i*20,y*20)
        }
    }
}

setInterval(matrix,20);


