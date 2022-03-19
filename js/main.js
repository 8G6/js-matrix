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


let t=chars('0','Ⅻ')
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
    i++
  ctx.fillStyle = '#0f0f0f';
  ctx.fillRect(0, 0, w*10, h*10);
  clr = i%2==0 ? [rand(o),rand(o),rand(o)].join('') : [rand(o),'FF',rand(o)].join('')
  ctx.fillStyle = '#'+clr
  ctx.font = '25pt monospace';
  
  c+=rand([1,16,32,52,7])
    ctx.fillText(rand(t),c,  y*(i%10));
    if (y > 100 + Math.random() * 1e2) y = 0;
    else y = y + 7;
    if(!(i<t.length-1)){i=0}
    if(!(c<w)){c=0}
}

setInterval(matrix,25);