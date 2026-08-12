import React, { useEffect, useRef, useState } from 'react';

export default function CyberCoreCanvas({ themeMode = 'cyan' }) {
  const canvasRef = useRef(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle node system
    const numParticles = Math.min(Math.floor(width / 15), 90);
    const particles = [];
    const colorMap = {
      cyan: { main: '#00f0ff', secondary: '#7000ff', glow: 'rgba(0, 240, 255, 0.4)' },
      emerald: { main: '#10b981', secondary: '#06b6d4', glow: 'rgba(16, 185, 129, 0.4)' },
      violet: { main: '#a855f7', secondary: '#ec4899', glow: 'rgba(168, 85, 247, 0.4)' }
    };

    const currentColors = colorMap[themeMode] || colorMap.cyan;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Core Sphere Wireframe Simulation
    let angleX = 0;
    let angleY = 0;

    const sphereRadius = Math.min(width, height) * 0.22;
    const numSpherePoints = 140;
    const spherePoints = [];

    // Fibonacci sphere geometry layout
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < numSpherePoints; i++) {
      const y = 1 - (i / (numSpherePoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      spherePoints.push({ x, y, z });
    }

    let lastTime = performance.now();
    let frameCount = 0;

    const render = (time) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Mouse influence on rotation
      angleX += 0.003 + (mouseY - height / 2) * 0.000005;
      angleY += 0.004 + (mouseX - width / 2) * 0.000005;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const centerX = width * 0.75; // Position 3D core on the right side for desktop
      const centerY = height * 0.45;
      const currentRadius = window.innerWidth < 768 ? sphereRadius * 0.7 : sphereRadius;
      const actualCenterX = window.innerWidth < 768 ? width * 0.5 : centerX;

      // Draw background 3D particles & mesh connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentColors.main;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = currentColors.main;
            ctx.globalAlpha = (1 - dist / 110) * 0.18;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render 3D Wireframe Cyber Core Nodes & Orbital Ring
      const projectedPoints = [];

      for (let i = 0; i < spherePoints.length; i++) {
        const pt = spherePoints[i];
        // Rotate around Y
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;
        // Rotate around X
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        // Perspective scale
        const fov = 400;
        const scale = fov / (fov + z2 * currentRadius);
        const px = actualCenterX + x1 * currentRadius * scale;
        const py = centerY + y2 * currentRadius * scale;

        projectedPoints.push({ px, py, z: z2, scale });
      }

      // Sort points by Z depth
      projectedPoints.sort((a, b) => b.z - a.z);

      // Draw cyber core connections
      ctx.lineWidth = 0.9;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = p1.z > 0 ? currentColors.main : currentColors.secondary;
            ctx.globalAlpha = (1 - dist / 55) * (p1.z > 0 ? 0.35 : 0.12);
            ctx.stroke();
          }
        }
      }

      // Render Core Nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const r = Math.max(1, (p.z + 1.2) * 2.2);

        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0.3 ? currentColors.main : currentColors.secondary;
        ctx.globalAlpha = Math.min(1, Math.max(0.1, (p.z + 1) / 2));
        ctx.fill();

        if (p.z > 0.6) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = currentColors.main;
        } else {
          ctx.shadowBlur = 0;
        }
      }

      // Outer Rotating Holographic Orbital Rings
      ctx.shadowBlur = 15;
      ctx.shadowColor = currentColors.main;

      ctx.beginPath();
      ctx.ellipse(actualCenterX, centerY, currentRadius * 1.35, currentRadius * 0.4, angleY * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = currentColors.main;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 18]);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(actualCenterX, centerY, currentRadius * 1.5, currentRadius * 0.45, -angleY * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = currentColors.secondary;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      ctx.setLineDash([]); // Reset dash
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render(performance.now());

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-4 right-4 text-xs font-mono text-cyan-500/40 bg-slate-950/60 px-2 py-1 rounded border border-cyan-500/10 pointer-events-none">
        3D CANVAS FPS: {fps} | CYBER CORE ACTIVE
      </div>
    </div>
  );
}
