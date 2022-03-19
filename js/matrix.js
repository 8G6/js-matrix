
class Matrix{
    constructor(canvas){
        this.canvas      = $('#'+canvas)
        this.timeout     = 50
        this.ctx         = this.canvas.getContext('2d');
        this.background  = 'black'
        this.font        = 'monospace'
        this.fontSize    = '20pt'
        this.charArray   = chars('0','1')
        this.intervel    = null
        this.fontColor   = 'green'
        this.maximize    = true
        this.spaceX      = 50
        this.spaceY      = 50
        this.random      = false
        this.randomColor = false
        this.fadeOut     = false
        this.rain        = false
    }
    
      

    fadeEffect=()=>{
        if(this.fadeOut){
            this.ctx.fillStyle = '#0001';
            this.ctx.fillRect(0, 0, screen.width,screen.height);
        }
        else{
            this.setBackground(this.background)
        }
    }
    setBackground = (BGColor) => {
        this.ctx.fillStyle     = setColor(BGColor)
        this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
    }
    init = () => {
        this.fadeEffect()
        if(this.maximize) {
            maximize(this.canvas)
        }
    }


    matrix=()=>{
      this.fadeEffect()
      let i,j;
      this.ctx.font  = this.fontSize+' '+this.font;
      let [x,y]=coordinates(this.spaceX,this.spaceY)
      for(i=0;i<x.length;i++){
          for(j=0;j<y.length;j++){
            console.log(i,j)
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            this.ctx.fillText(rand(this.charArray),x[i],y[j]);
          }
      }
    }
    Random = () => {
      this.fadeEffect()
      this.ctx.font  = this.fontSize+' '+this.font;
      let i,j,Y=0;
      let [x,y]=coordinates(this.spaceX,this.spaceY)
      
      for(i=0;i<x.length;i++){
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            this.ctx.fillText(rand(this.charArray),x[i],Math.random()*screen.height)
      }
    }
    Rain=()=>{
        this.fadeEffect()
        this.ctx.font  = this.fontSize+' '+this.font;
        const ypos = Array(parseInt(80)).fill(0);
        let y=0
        ypos.forEach((n, ind) => {
            const text = rand(this.charArray)
            const x = ind * 2;
            console.log(text, x, y)
            this.ctx.fillText(text, x, y);
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            if (y > 100 + Math.random() * 10000) y = 0;
            else y += 20;
        });
    }
    
    itrate=()=>{
        this.init()
        this.intervel=setInterval(()=>{
            if(this.random){
                this.Random()
            }
            if(this.rain){
                this.Rain()
            }
            else{
                this.matrix()
            }
        },this.timeout)
    }
    
    break=(delay=1)=>{
        setTimeout(()=>{
            clearInterval(this.intervel)
            console.log('breaked')
        },delay)
        
    }
    hide=()=>{
        this.canvas.style.display = 'none'
    }
}


mat = new Matrix('canv')
mat.fontSize    = '5pt'
mat.maximize    = 1
mat.rain        = 1
mat.random      = {}
mat.spaceX      = 100
mat.fadeOut     = true
mat.randomColor = true
mat.itrate()







