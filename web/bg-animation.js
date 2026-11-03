// Animated Waterfall Canvas Effect for cyber atmosphere
const canvas = document.getElementById('waterfallCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const cols = 60;

function drawWaterfall() {
    ctx.fillStyle = 'rgba(10, 15, 13, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const colWidth = canvas.width / cols;
    
    for (let i = 0; i < cols; i++) {
        if (Math.random() > 0.85) {
            const intensity = Math.random();
            if (intensity > 0.8) {
                ctx.fillStyle = '#00ff88'; // Strong radio signal peak
            } else if (intensity > 0.5) {
                ctx.fillStyle = '#00e5ff'; // Medium signal
            } else {
                ctx.fillStyle = '#14532d'; // Noise floor
            }
            ctx.fillRect(i * colWidth, Math.random() * canvas.height, colWidth - 1, 2);
        }
    }
    requestAnimationFrame(drawWaterfall);
}
drawWaterfall();

// Initialize default view
window.onload = () => {
    loadChapter('home');
};