
class Matrix{
    constructor(canvas){
        
        this.canvas      = $('#'+canvas)
        this.timeout     = 20
        this.ctx         = this.canvas.getContext('2d');
        this.background  = 'black'
        this.bodyDime    = {w:this.canvas.width,h:this.canvas.height}
        this.font        = 'monospace'
        this.fontSize    = '20pt'
        this.colorArray  = toHex(0,256)
        this.charArray   = chars('0','z')
        this.intervel    = null
        this.fontColor   = 'green'
        this.maximize    = 1
        this.x           = 1
        this.y           = 1
        
    }
    setBackground = (BGColor) => {
        this.ctx.fillStyle     = setColor(BGColor)
        this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
    }
    init = (BGColor) => {
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
      this.setBackground('black')
      let i,j;
      let a=100
      this.ctx.font      = this.fontSize+' '+this.font;
      let [x,y]=coordinates(this.x,this.y)
      for(i=0;i<x.length;i++){
          for(j=0;j<y.length;j++){
            console.log(i,j)
            this.ctx.fillStyle     = setColor(this.fontColor)
            this.ctx.fillText(rand(this.charArray),x[i],y[j]);
          }
      }
    }
    itrate=(BGColor='#000')=>{
        this.init(BGColor)
        this.intervel=setInterval(()=>{this.matrix()},this.timeout)
    }
    break=(delay=1)=>{
        setTimeout(()=>{
            clearInterval(this.intervel)
            console.log('breaked')
        },delay)
        
    }

}

mat = new Matrix('canv')
mat.x = 25
mat.y = 15
mat.fontSize = '10pt'
mat.timeout=100
mat.maximize = 1

mat.itrate()




