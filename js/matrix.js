
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
        this.randomColor = true
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
        this.setBackground('black')
       this.ctx.fillStyle = '#0001';
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
mat.x = 25
mat.y = 15
mat.fontSize = '10pt'
mat.timeout=100
mat.maximize = 1
mat.random = true
mat.itrate()




