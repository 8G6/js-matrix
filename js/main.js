function maximize(canvas){
    fixBody()
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    
}
function fixBody(){
    document.body.style.margin=0;
    document.body.style.padding=0;
    document.body.style.width='100vw';
    document.body.style.height='100vh'
}

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');


const w = canvas.width = screen.width;
const h = canvas.height = screen.height;

maximize(canvas)

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);



function matrix () {
  
  

}
// render the animation at 20 FPS.
setInterval(matrix, 50);