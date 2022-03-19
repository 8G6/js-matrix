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

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
 
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  ctx.font = '20pt monospace';

  const text = String.fromCharCode(Math.random() * 122);
  for(i=0;i<screen.width;i+=20){
    for(j=0;i<screen.height;j+=20){
        ctx.fillText(text, i, j);
        console.log(x,y)
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
    }
  }

// render the animation at 20 FPS.
setInterval(matrix, 50);