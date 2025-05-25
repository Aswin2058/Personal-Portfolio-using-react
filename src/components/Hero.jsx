
import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 255)}, 0.7)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.1;
        
        // Wrap around edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines if they are close enough
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Remove small particles and add new ones
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
          particles.push(new Particle());
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
    
    window.addEventListener('resize', handleResize);
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  
  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="fade-in">
            Hi, I'm <span className="text-gradient">Aswin Thapa</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Programming Student & Aspiring Developer
          </p>
          <div className="hero-description fade-in">
            <p>
              Turning ideas into reality through code.
              Building elegant solutions for complex problems.
            </p>
          </div>
          <div className="hero-cta fade-in">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
