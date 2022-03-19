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

ctx.font = '25pt monospace';
ctx.fillText(rand(t),78,277); 
function fixBody(){
    document.body.style.margin=0;
    document.body.style.padding=0;
    document.body.style.width='100vw';
    document.body.style.height='100vh'
}
function maximize(canvas){
    fixBody()
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    
}
maximize(canvas)
function matrix () {
    ctx.fillStyle = '#0f0f0f';
ctx.fillRect(0, 0, w, h);
clr = i%2==0 ? [rand(o),rand(o),rand(o)].join('') : [rand(o),'FF',rand(o)].join('')
ctx.fillStyle = '#'+clr
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    
    ctx.font = '25pt monospace';
    k=[]
    const ypos = Array(parseInt(screen.height/100)).fill(0);
    ypos.forEach((y, ind) => {
        const text = rand(t)
        const x = ind * 20;
        console.log(text, x, y)
        ctx.fillText(text, x, ind);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
}

setInterval(matrix,20);


