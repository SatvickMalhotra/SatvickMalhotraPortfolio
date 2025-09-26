import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let hue = 217;
    let isLargeScreen = width >= 768; // Only show network on screens >= 768px

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isLargeScreen = width >= 768;
      // Re-initialize animations on resize to fit new screen dimensions
      verticalLines.init();
      particles.init();
      if (isLargeScreen) {
        network.init();
      }
    };
    window.addEventListener('resize', handleResize);

    // --- Vertical Lines (Digital Rain) ---
    const verticalLines = {
      list: [] as { x: number; y: number; speed: number; length: number }[],
      count: 40,
      init() {
        this.list = [];
        for (let i = 0; i < this.count; i++) {
          this.list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: Math.random() * 1.5 + 0.5,
            length: Math.random() * 150 + 100,
          });
        }
      },
      draw() {
        for (const line of this.list) {
          line.y += line.speed;
          if (line.y - line.length > height) {
            line.y = 0;
            line.x = Math.random() * width;
          }
          
          const gradient = ctx.createLinearGradient(line.x, line.y - line.length, line.x, line.y);
          gradient.addColorStop(0, `hsla(${hue + 40}, 100%, 50%, 0)`);
          gradient.addColorStop(0.8, `hsla(${hue + 40}, 100%, 50%, 0.7)`);
          gradient.addColorStop(1, `hsla(${hue + 40}, 100%, 50%, 1)`);

          ctx.beginPath();
          ctx.moveTo(line.x, line.y - line.length);
          ctx.lineTo(line.x, line.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      },
    };
    
    // --- Particles ---
    const particles = {
      list: [] as { x: number; y: number; size: number; speed: number }[],
      count: 100,
      init() {
        this.list = [];
        for (let i = 0; i < this.count; i++) {
          this.list.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
          });
        }
      },
      draw() {
        for (const p of this.list) {
          p.y += p.speed;
          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
          }
          ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.8)`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      },
    };
    
    // --- Dynamic Node Network (Replaces static Neural Network) ---
    const network = {
      nodes: [] as { x: number; y: number; vx: number; vy: number; }[],
      nodeCount: 60,
      maxDist: 120, // Max distance for a connection to form
      init() {
        this.nodes = [];
        for (let i = 0; i < this.nodeCount; i++) {
          this.nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * 0.6 - 0.3,
            vy: Math.random() * 0.6 - 0.3,
          });
        }
      },
      draw() {
        // Update and draw node positions
        this.nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;

          // Wrap nodes around screen edges
          if (node.x > width) node.x = 0;
          else if (node.x < 0) node.x = width;
          if (node.y > height) node.y = 0;
          else if (node.y < 0) node.y = height;
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue - 90}, 100%, 70%, 0.9)`;
          ctx.fill();
        });

        // Draw connections based on node proximity
        ctx.lineWidth = 1;
        for (let i = 0; i < this.nodes.length; i++) {
          for (let j = i + 1; j < this.nodes.length; j++) {
            const nodeA = this.nodes[i];
            const nodeB = this.nodes[j];
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.maxDist) {
              const opacity = 1 - (dist / this.maxDist);
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = `hsla(${hue - 90}, 100%, 50%, ${opacity * 0.5})`;
              ctx.stroke();
            }
          }
        }
      }
    };
    
    verticalLines.init();
    particles.init();
    if (isLargeScreen) {
      network.init();
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(26, 5, 42, 0.2)'; // Fading trail effect
      ctx.fillRect(0, 0, width, height);

      hue = (hue + 0.1) % 360;
      
      if (isLargeScreen) {
        network.draw();
      }
      particles.draw();
      verticalLines.draw();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;