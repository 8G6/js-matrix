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
  
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

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
// render the animation at 20 FPS.
setInterval(matrix, 50);