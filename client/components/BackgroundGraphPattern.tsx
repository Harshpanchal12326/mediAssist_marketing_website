import { useEffect, useRef } from "react";

export function BackgroundGraphPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPattern();
    };

    const drawPattern = () => {
      // Clear canvas
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Node settings
      const nodeRadius = 80;
      const nodeDistance = 250;
      const rows = Math.ceil(canvas.height / nodeDistance) + 1;
      const cols = Math.ceil(canvas.width / nodeDistance) + 1;

      // Calculate positions
      const nodes: Array<{ x: number; y: number; opacity: number }> = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * nodeDistance + 50;
          const y = row * nodeDistance + 50;

          // Add some randomness for organic feel
          const randomX = x + (Math.sin(row * col * 123) * 40);
          const randomY = y + (Math.cos(row * col * 456) * 40);

          nodes.push({
            x: randomX,
            y: randomY,
            opacity: Math.random() * 0.6 + 0.2,
          });
        }
      }

      // Draw connecting lines (threads)
      ctx.strokeStyle = "rgba(45, 212, 191, 0.15)";
      ctx.lineWidth = 1;

      // Connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect nodes within a certain distance
          if (distance < nodeDistance + 100) {
            const opacity = (1 - distance / (nodeDistance + 100)) * 0.25;
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes (dots at intersections)
      nodes.forEach((node) => {
        ctx.fillStyle = `rgba(45, 212, 191, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow
        ctx.strokeStyle = `rgba(45, 212, 191, ${node.opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.stroke();
      });
    };

    resizeCanvas();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        top: 0,
        left: 0,
      }}
    />
  );
}
