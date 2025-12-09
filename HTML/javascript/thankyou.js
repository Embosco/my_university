// === thankyou.js ===

// redirect after 6 seconds
setTimeout(() => {
  window.location.href = "index.html";
}, 6000);

// ---- flower/confetti animation ----
const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");
let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const petals = [];
for (let i = 0; i < 50; i++) {
  petals.push({
    x: Math.random() * w,
    y: Math.random() * -h,
    r: 8 + Math.random() * 6,
    speed: 1 + Math.random() * 2,
    color: ["#ff69b4", "#ffd700", "#ffb6c1", "#ffcc33"][Math.floor(Math.random() * 4)],
    swing: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  petals.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.ellipse(p.x, p.y, p.r, p.r * 0.6, Math.random() * Math.PI, 0, 2 * Math.PI);
    ctx.fill();
    p.y += p.speed;
    p.x += Math.sin(p.y * 0.02) * p.swing;
    if (p.y > h + 20) {
      p.y = -10;
      p.x = Math.random() * w;
    }
  });
  requestAnimationFrame(draw);
}
draw();
