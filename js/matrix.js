function matrix (ctx,ypos) {
 
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
  
    ctx.fillStyle = '#0f0';
    ctx.font = '20pt monospace';
  
    
    ypos.forEach((y, ind) => {
      // generate a random character
      const text = String.fromCharCode(Math.random() * 122);
  
      // x coordinate of the column, y coordinate is already given
      const x = ind * 20;
      // render the character at (x, y)
      ctx.fillText(text, x, y);
  
      // randomly reset the end of the column if it's at least 100px high
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      // otherwise just move the y coordinate for the column 20px down,
      else ypos[ind] = y + 20;
    });
  
}
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
        this.randJSON    = {x:false,y:false}
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
      let i,j;
      let [x,y]=coordinates(this.spaceX,this.spaceY)
      try{
          if(this.random && (!this.randJSON.y || !this.randJSON.y)){
            for(i=0;i<x.length;i++){
                for(j=0;j<y.length;j++){
                    this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                    this.ctx.fillText(rand(this.charArray),parseInt(screen.width*Math.random()),parseInt(screen.height*Math.random()))
                }
            }
          }
          if(this.randJSON.y){
            for(i=0;i<x.length;i++){
                this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                this.ctx.fillText(rand(this.charArray),x[i],screen.height*Math.random())
            }
          }
          if(this.randJSON.x){
            for(i=0;i<y.length;i++){
                this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                this.ctx.fillText(rand(this.charArray),Math.random() * screen.width,y[i])
            }
          }
        
      }
     catch(e){}
      
    }
    Rain=()=>{
        this.fadeEffect()
        matrix()
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
mat.fadeOut     = true
mat.randomColor = true
mat.itrate()







