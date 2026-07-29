import { useRef, useEffect } from 'react'
import '../styles/StarCanvas.css'

function StarCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h
    let stars = []
    const COUNT = 120

    function resize() {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    function randomBetween(a, b) {
      return a + Math.random() * (b - a)
    }

    function createStar() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: randomBetween(0.4, 1.8),
        opacity: randomBetween(0.2, 1),
        speed: randomBetween(0.05, 0.25),
        twinkleSpeed: randomBetween(0.005, 0.02),
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      }
    }

    function init() {
      resize()
      stars = Array.from({ length: COUNT }, createStar)
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      for (const s of stars) {
        // twinkle
        s.opacity += s.twinkleSpeed * s.twinkleDir
        if (s.opacity >= 1) { s.opacity = 1; s.twinkleDir = -1 }
        if (s.opacity <= 0.1) { s.opacity = 0.1; s.twinkleDir = 1 }

        // drift upward slowly
        s.y -= s.speed
        if (s.y < -2) {
          s.y = h + 2
          s.x = Math.random() * w
        }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 245, 96, ${s.opacity * 0.7})`
        ctx.fill()

        // small white core for brighter stars
        if (s.r > 1.2) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 0.4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,255,255,${s.opacity * 0.6})`
          ctx.fill()
        }
      }

      // draw faint connecting lines between close stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.08
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(200,245,96,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()

    const observer = new ResizeObserver(() => {
      resize()
    })
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />
}

export default StarCanvas
