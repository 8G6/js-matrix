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




class Matrix{
    constructor(canvas){
        
        this.canvas      = $('#'+canvas)
        this.timeout     = 50
        this.ctx         = this.canvas.getContext('2d');
        this.background  = 'black'
        this.bodyDime    = {w:this.canvas.width,h:this.canvas.height}
        this.font        = 'monospace'
        this.fontSize    = '20pt'
        this.colorArray  = toHex(0,256)
        this.charArray   = chars('0','z')
        this.intervel    = null
        this.fontColor   = 'green'
        this.maximize    = true
        this.x           = 1
        this.y           = 1
        this.random      = false
        this.randomColor = false
        this.fadeOut     = false
    }
    setBackground = (BGColor) => {
        this.ctx.fillStyle     = setColor(BGColor)
        this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
    }
    init = (BGColor='#000') => {
        this.setBackground(BGColor)
        let blockFactor = 100
        if(this.maximize) {
            maximize(this.canvas)
        }
        let block       = {
                            h:parseInt(this.height/blockFactor),
                            w:parseInt(this.width/blockFactor)
                           }
        this.blockFactor = blockFactor
        this.block       = block

        
    }
    matrix=()=>{
      let i,j;
      this.ctx.font  = this.fontSize+' '+this.font;
      let [x,y]=coordinates(this.x,this.y)
      for(i=0;i<x.length;i++){
          for(j=0;j<y.length;j++){
            console.log(i,j)
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            this.ctx.fillText(rand(this.charArray),x[i],y[j]);
          }
      }
    }
    Random = () => {
      this.init()
      let i,j,Y=0;
      let [x,y]=coordinates(this.x,this.y)
      for(i=0;i<x.length;i++){
          for(j=0;j<y.length;j++){
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            this.ctx.fillText(rand(this.charArray),Math.random()*screen.width,Math.random()*screen.height)
          }
      }
    }
    itrate=(BGColor='#000')=>{
        this.init(BGColor)
        this.intervel=setInterval(()=>{
            if(this.random){
                this.Random()
            }
            else{
                this.matrix()
            }
        },this.timeout)
    }
    rain = ()=>{
      this.setBackground('black')
      let i,j;
      this.ctx.font  = this.fontSize+' '+this.font;
      let [x,y]=coordinates(this.x,this.y)
    }
    break=(delay=1)=>{
        setTimeout(()=>{
            clearInterval(this.intervel)
            console.log('breaked')
        },delay)
        
    }

}

mat = new Matrix('canv')
mat.x = 50
mat.y = 80
mat.fontSize = '40pt'
mat.timeout=100
mat.maximize = 1
mat.random = false
mat.randomColor = false
mat.itrate()
