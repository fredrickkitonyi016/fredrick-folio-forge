import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface CircuitLine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  opacity: number;
}

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let circuitLines: CircuitLine[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initCircuitLines();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const initCircuitLines = () => {
      circuitLines = [];
      const numLines = Math.floor((canvas.width * canvas.height) / 80000);
      for (let i = 0; i < numLines; i++) {
        createCircuitLine();
      }
    };

    const createCircuitLine = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const isHorizontal = Math.random() > 0.5;
      const length = Math.random() * 150 + 50;
      
      circuitLines.push({
        startX,
        startY,
        endX: isHorizontal ? startX + length : startX,
        endY: isHorizontal ? startY : startY + length,
        progress: 0,
        speed: Math.random() * 0.01 + 0.005,
        opacity: Math.random() * 0.3 + 0.1,
      });
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        // Gold color from theme - #D4AF37
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawConnections = () => {
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
    };

    const drawCircuitLines = () => {
      circuitLines.forEach((line, index) => {
        const currentX = line.startX + (line.endX - line.startX) * line.progress;
        const currentY = line.startY + (line.endY - line.startY) * line.progress;

        // Draw circuit line with gradient
        const gradient = ctx.createLinearGradient(line.startX, line.startY, currentX, currentY);
        gradient.addColorStop(0, `rgba(196, 201, 207, 0)`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${line.opacity})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, ${line.opacity * 2})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // Draw node at current position
        ctx.fillStyle = `rgba(212, 175, 55, ${line.opacity * 2})`;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();

        // Update progress
        line.progress += line.speed;

        // Reset line when complete
        if (line.progress >= 1) {
          circuitLines[index] = {
            startX: Math.random() * canvas.width,
            startY: Math.random() * canvas.height,
            endX: 0,
            endY: 0,
            progress: 0,
            speed: Math.random() * 0.01 + 0.005,
            opacity: Math.random() * 0.3 + 0.1,
          };
          const isHorizontal = Math.random() > 0.5;
          const length = Math.random() * 150 + 50;
          circuitLines[index].endX = isHorizontal ? circuitLines[index].startX + length : circuitLines[index].startX;
          circuitLines[index].endY = isHorizontal ? circuitLines[index].startY : circuitLines[index].startY + length;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawParticles();
      drawConnections();
      drawCircuitLines();
      
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CircuitBackground;
