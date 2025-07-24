import { useEffect, useRef } from "react";

export const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context;
    let canvasWidth, canvasHeight;
    let centerX, centerY;
    let mouseX, mouseY;
    let speed = 2;
    let targetSpeed = 2;
    const FL = 500;
    const PARTICLE_NUM = 500;
    const PARTICLE_BASE_RADIUS = 0.5;
    const BOOST_SPEED = 20;
    const particles = [];

    class Particle {
      constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pastZ = 0;
      }
    }

    const randomizeParticle = (p) => {
      p.x = Math.random() * canvasWidth;
      p.y = Math.random() * canvasHeight;
      p.z = Math.random() * 1500 + 500;
      return p;
    };

    const resize = () => {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
      centerX = canvasWidth * 0.5;
      centerY = canvasHeight * 0.5;
      context = canvas.getContext("2d");
      context.fillStyle = "rgb(255, 255, 255)";
    };

    resize();
    window.addEventListener("resize", resize);

    mouseX = centerX;
    mouseY = centerY;

    for (let i = 0; i < PARTICLE_NUM; i++) {
      const p = randomizeParticle(new Particle());
      p.z -= 500 * Math.random();
      particles.push(p);
    }

    const loop = () => {
      context.save();
      context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.restore();

      speed += (targetSpeed - speed) * 0.01;

      context.beginPath();
      for (let i = 0; i < PARTICLE_NUM; i++) {
        const p = particles[i];
        p.pastZ = p.z;
        p.z -= speed;
        if (p.z <= 0) {
          randomizeParticle(p);
          continue;
        }

        const cx = centerX - (mouseX - centerX) * 1.25;
        const cy = centerY - (mouseY - centerY) * 1.25;
        const rx = p.x - cx;
        const ry = p.y - cy;

        const f = FL / p.z;
        const x = cx + rx * f;
        const y = cy + ry * f;
        const r = PARTICLE_BASE_RADIUS * f;

        const pf = FL / p.pastZ;
        const px = cx + rx * pf;
        const py = cy + ry * pf;
        const pr = PARTICLE_BASE_RADIUS * pf;

        const a = Math.atan2(py - y, px - x);
        const a1 = a + Math.PI * 0.5;
        const a2 = a - Math.PI * 0.5;

        context.moveTo(px + pr * Math.cos(a1), py + pr * Math.sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * Math.cos(a2), y + r * Math.sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
      }

      context.fill();

      requestAnimationFrame(loop);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      targetSpeed = BOOST_SPEED;
    };

    const onMouseUp = () => {
      targetSpeed = 2;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <canvas
      id="c"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        backgroundColor: "hsl(256, 100%, 5%)",
        pointerEvents: "none",
      }}
    />
  );
};
