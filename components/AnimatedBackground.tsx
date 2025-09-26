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

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- Vertical Lines (Replaces Grid) ---
    const verticalLines = {
      list: [] as { x: number; y: number; speed: number; length: number }[],
      count: 40, // Number of lines
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
    verticalLines.init();


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
    particles.init();

    // --- Neural Network (Simplified) ---
    const network = {
      nodes: [] as { x: number; y: number }[],
      connections: [] as { from: number; to: number }[],
      signals: [] as { from: number; to: number; progress: number, speed: number }[],
      layers: [4, 3, 3], // Reduced complexity
      init() {
        this.nodes = [];
        this.connections = [];
        
        const layerSpacing = width / (this.layers.length + 1);
        let totalNodesBeforeThisLayer = 0;

        this.layers.forEach((count, i) => {
          const x = layerSpacing * (i + 1);
          
          for (let j = 0; j < count; j++) {
            const y = (height / (count + 1)) * (j + 1);
            const currentNodeIndex = totalNodesBeforeThisLayer + j;
            this.nodes.push({ x, y });
            
            if (i > 0) {
              const prevLayerCount = this.layers[i-1];
              const prevLayerStartIndex = totalNodesBeforeThisLayer - prevLayerCount;
              for(let k = 0; k < prevLayerCount; k++){
                  this.connections.push({ from: prevLayerStartIndex + k, to: currentNodeIndex});
              }
            }
          }
          totalNodesBeforeThisLayer += count;
        });
      },
      draw() {
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = `hsla(${hue - 90}, 100%, 50%, 0.5)`;
        this.connections.forEach(c => {
          const fromNode = this.nodes[c.from];
          const toNode = this.nodes[c.to];
          if (fromNode && toNode) {
            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.stroke();
          }
        });

        this.nodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue - 90}, 100%, 70%, 0.8)`;
          ctx.fill();
        });
        
        this.signals.forEach((signal, i) => {
            signal.progress += signal.speed;
            if(signal.progress >= 1){
                this.signals.splice(i, 1);
                return;
            }
            const fromNode = this.nodes[signal.from];
            const toNode = this.nodes[signal.to];

            if (fromNode && toNode) {
              const x = fromNode.x + (toNode.x - fromNode.x) * signal.progress;
              const y = fromNode.y + (toNode.y - fromNode.y) * signal.progress;

              ctx.beginPath();
              ctx.arc(x, y, 3, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(0, 0%, 100%, 0.8)`;
              ctx.shadowColor = `hsla(0, 0%, 100%, 1)`;
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
        });
        
        if(this.connections.length > 0 && Math.random() < 0.1 && this.signals.length < 15) { // Reduced signals
            const randomConnection = this.connections[Math.floor(Math.random() * this.connections.length)];
            this.signals.push({
                from: randomConnection.from,
                to: randomConnection.to,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02
            });
        }
        ctx.globalAlpha = 1;
      }
    }
    network.init();

    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(26, 5, 42, 0.2)';
      ctx.fillRect(0, 0, width, height);

      hue = (hue + 0.1) % 360;
      
      ctx.save();
      ctx.translate(-width / 6, -height / 6); // Adjusted pan
      ctx.scale(1.2, 1.2); // Reduced zoom
      network.draw();
      ctx.restore();

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
