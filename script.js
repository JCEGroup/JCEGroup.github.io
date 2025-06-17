// Track mouse movement and update background position directly
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    // Update CSS custom properties immediately for cursor following
    document.documentElement.style.setProperty('--x', mouseX + '%');
    document.documentElement.style.setProperty('--y', mouseY + '%');
});

// Add some sparkle effects on click
document.addEventListener('click', (e) => {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.boxShadow = '0 0 6px rgba(255, 255, 255, 0.7)';
        
        const angle = (i / 6) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const targetX = x + Math.cos(angle) * distance;
        const targetY = y + Math.sin(angle) * distance;
        
        sparkle.style.transition = 'all 0.6s ease-out';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.transform = `translate(${targetX - x}px, ${targetY - y}px)`;
            sparkle.style.opacity = '0';
            sparkle.style.transform += ' scale(0)';
        }, 10);
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
}
