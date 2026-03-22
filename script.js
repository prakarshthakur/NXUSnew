const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Mouse interaction
const mouse = {
    x: null,
    y: null,
    radius: 100 // Smaller interaction radius for tighter sand flow
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Clear mouse out of window
window.addEventListener('mouseout', function() {
    mouse.x = null;
    mouse.y = null;
});

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

class DustParticle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Make them tiny like sand but slightly larger for visibility
        this.size = Math.random() * 1.5 + 1.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        
        // Colors: mixture of Dark Blue and Corroded Orange
        if (Math.random() > 0.4) {
            this.color = '30, 64, 175'; // Darker/mid blue
        } else {
            this.color = '217, 119, 6'; // Corroded Orange
        }
        
        // Base drift speeds
        this.baseSpeedX = (Math.random() - 0.5) * 1.0;
        this.baseSpeedY = (Math.random() - 0.5) * 1.0;
        
        // Current velocity
        this.vx = this.baseSpeedX;
        this.vy = this.baseSpeedY;
        
        // Higher base opacity for better visibility
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        // Friction: softly ease velocity back to the base drift
        this.vx += (this.baseSpeedX - this.vx) * 0.05;
        this.vy += (this.baseSpeedY - this.vy) * 0.05;

        // Mouse interaction (Fluid displacement with inertia)
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Determine push angle
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                
                // Softer exponential curve for force provides a smooth liquid-like edge
                let force = Math.pow((mouse.radius - distance) / mouse.radius, 2);
                
                // Add to velocity instead of directly moving position
                let directionX = forceDirectionX * force * this.density * -0.25;
                let directionY = forceDirectionY * force * this.density * -0.25;

                this.vx += directionX;
                this.vy += directionY;
            }
        }
        
        // Update position smoothly
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around smoothly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size); // Rectangles are drastically faster to render for 7000+ particles
    }
}

function initParticles() {
    particles = [];
    // Massively increased particle count for dense sand
    const particleCount = Math.floor(Math.min((width * height) / 200, 7000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new DustParticle());
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    // Clear canvas entirely
    ctx.clearRect(0, 0, width, height);
    
    // Optional: add extremely subtle motion blur
    ctx.fillStyle = 'rgba(5, 10, 18, 0.4)'; 
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
}

window.addEventListener('resize', resize);
resize();
animate();

// Authentication Handling
function switchAuthMode(mode) {
    const subtitle = document.getElementById('subtitleText');
    const nameGroup = document.getElementById('nameGroup');
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('name');
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (mode === 'login') {
        subtitle.innerHTML = 'Welcome Back';
        nameGroup.style.display = 'none';
        nameInput.removeAttribute('required');
        submitBtn.innerText = 'Log In';
        tabs[0].classList.add('active');
    } else {
        subtitle.innerHTML = 'Create Account';
        nameGroup.style.display = 'flex';
        nameInput.setAttribute('required', 'true');
        submitBtn.innerText = 'Sign Up';
        tabs[1].classList.add('active');
    }
}
