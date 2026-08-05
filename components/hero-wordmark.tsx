"use client"

import { gsap } from "gsap"
import { useEffect, useRef } from "react"

const WORDS = ["/design", "/development", "/motion"]

const WM_CLASS = "text-[clamp(40px,8.5vw,150px)] leading-[0.9] letter-spacing-[-0.05em] font-bold text-white text-center whitespace-nowrap"
const CHAR_MASK = "inline-block overflow-hidden align-top will-change-transform"
const CHAR_INNER = "inline-block will-change-transform font-bold"
const LINE_INNER = "inline-block will-change-transform font-bold tracking-[-0.02em] text-[clamp(20px,3vw,34px)] leading-[1.05] text-white"

export function HeroWordmark() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const layers = WORDS.map((word) => {
      const layer = document.createElement("div")
      layer.className = "absolute inset-0 flex items-center justify-center pointer-events-none"
      layer.setAttribute("aria-hidden", "true")
      layer.style.visibility = "hidden"

      const el = document.createElement("h2")
      el.className = WM_CLASS
      word.split("").forEach((ch) => {
        const mask = document.createElement("span")
        mask.className = CHAR_MASK
        const inner = document.createElement("span")
        inner.className = CHAR_INNER
        inner.style.fontWeight = "200"
        inner.textContent = ch
        mask.appendChild(inner)
        el.appendChild(mask)
      })
      layer.appendChild(el)
      stage.appendChild(layer)
      return { layer, chars: Array.from(el.querySelectorAll<HTMLElement>("span > span")) }
    })

    const finale = document.createElement("div")
    finale.className = "absolute inset-0 flex flex-col items-center justify-center gap-[0.15em] pointer-events-none"
    finale.setAttribute("aria-hidden", "true")
    finale.style.visibility = "hidden"
    const lines = ["You choose", "We deliver"].map((line) => {
      const wrap = document.createElement("div")
      wrap.className = "overflow-hidden"
      const inner = document.createElement("span")
      inner.className = LINE_INNER
      inner.innerHTML = `${line}<span class="text-[#a6a6a6]">.</span>`
      wrap.appendChild(inner)
      finale.appendChild(wrap)
      return inner
    })
    stage.appendChild(finale)

    let tl: gsap.core.Timeline | null = null

    const cleanup = () => {
      tl?.kill()
      gsap.killTweensOf([...layers.flatMap((l) => l.chars), ...lines])
      layers.forEach((l) => l.layer.remove())
      finale.remove()
    }

    if (reduce) {
      layers.forEach((l) => {
        l.layer.style.visibility = "visible"
        gsap.set(l.chars, { yPercent: 0, fontWeight: 800 })
      })
      finale.style.visibility = "visible"
      gsap.set(lines, { yPercent: 0, fontWeight: 800 })
      return cleanup
    }

    // Per-word timing. The rise and the weight build are decoupled on purpose:
    // glyphs rise out of their mask first (staggered left to right), then the
    // font-weight visibly thickens 200 -> 800 AFTER each glyph is on screen,
    // with its own staggered trail so the "charge up" reads clearly.
    const RISE_DUR = 1.0
    const WT_DELAY = 0.4
    const WT_DUR = 0.7
    const HOLD = [1.2, 1.1, 0.8]
    const STAGGER = [0.05, 0.035, 0.05]

    const enter = (chars: HTMLElement[], t: number, i: number) => {
      const s = STAGGER[i]
      tl!.fromTo(
        chars,
        { yPercent: 110 },
        { yPercent: 0, duration: RISE_DUR, stagger: s, ease: "power4.out" },
        t,
      )
      tl!.fromTo(
        chars,
        { fontWeight: 200 },
        { fontWeight: 800, duration: WT_DUR, stagger: s, delay: WT_DELAY, ease: "power2.out" },
        t,
      )
      return RISE_DUR // + WT_DUR fills the same window
    }

    const exit = (chars: HTMLElement[], t: number, i: number) => {
      tl!.to(chars, { yPercent: -110, duration: 0.7, stagger: STAGGER[i], ease: "power4.inOut" }, t)
      return 0.7
    }

    tl = gsap.timeline()
    let t = 0.1

    // 01 /design builds in + thickens
    tl!.set(layers[0].layer, { visibility: "visible" }, t)
    enter(layers[0].chars, t, 0)
    t += RISE_DUR + WT_DUR + HOLD[0]

    // 02 /development swaps in while /design clips out (weight trails)
    tl!.set(layers[1].layer, { visibility: "visible" }, t)
    exit(layers[0].chars, t, 0)
    enter(layers[1].chars, t + 0.25, 1)
    t += Math.max(0.7, 0.25 + RISE_DUR + WT_DUR) + HOLD[1]

    // 03 /motion swaps in while /development clips out (weight trails)
    tl!.set(layers[2].layer, { visibility: "visible" }, t)
    exit(layers[1].chars, t, 1)
    enter(layers[2].chars, t + 0.25, 2)
    t += Math.max(0.7, 0.25 + RISE_DUR + WT_DUR) + HOLD[2]

    // 04 /motion clips out fully, then the statement lands - no overlap
    exit(layers[2].chars, t, 2)
    tl!.set(finale, { visibility: "visible" }, t + 0.2)
    tl!.fromTo(lines[0], { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "power4.out" }, t + 0.2)
    tl!.fromTo(lines[1], { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "power4.out" }, t + 0.5)

    if (window.scrollY > window.innerHeight) {
      tl.progress(1)
    } else {
      tl.play()
    }

    return cleanup
  }, [])

  return (
    <div className="relative">
      <div ref={stageRef} className="relative w-full h-[clamp(32px,8.5vw,150px)]" />
      <h1 className="sr-only">
        /design, /development, /motion. You choose. We deliver.
      </h1>
    </div>
  )
}