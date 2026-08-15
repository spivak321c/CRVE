"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const VIDEO_SRC =
  "https://res.cloudinary.com/mwvch9hy/video/upload/v1783198938/video1_pv1eob.mp4"

/**
 * Initial corner radius of the portal card.
 * Morphs linearly to 0 during the zoom by dividing by scale
 * so the visual morph stays constant-rate despite the scaling.
 */
const INITIAL_RADIUS = 12

export function ZoomPortalHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const gradeRef = useRef<HTMLDivElement>(null)
  // Entrance wrappers: isolate load-time animation from the scrub timeline
  // so the intro and the scroll timeline never tween the same element.
  const leftEntranceRef = useRef<HTMLDivElement>(null)
  const rightEntranceRef = useRef<HTMLDivElement>(null)
  const metaEntranceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    const scene = sceneRef.current
    const spacer = spacerRef.current
    const left = leftRef.current
    const right = rightRef.current
    const meta = metaRef.current
    const grade = gradeRef.current
    const leftEntrance = leftEntranceRef.current
    const rightEntrance = rightEntranceRef.current
    const metaEntrance = metaEntranceRef.current

    if (
      !section ||
      !card ||
      !scene ||
      !spacer ||
      !left ||
      !right ||
      !meta ||
      !grade ||
      !leftEntrance ||
      !rightEntrance ||
      !metaEntrance
    )
      return

    // Direct style writes for the hot-path zoom proxy.
    // Note: gsap.quickSetter(el, "scale") is NOT used here - it resolves the
    // "scale" alias to "scaleX,scaleY" and CSSPlugin.getSetter falls through
    // to _setterAttribute, writing junk "scalex,scaley" DOM attributes
    // instead of CSS transforms. Writing style.transform directly is both
    // faster and reliable.
    const setCardScale = (v: number) => {
      card.style.transform = `scale(${v})`
    }
    const setSceneScale = (v: number) => {
      scene.style.transform = `scale(${v})`
    }
    // borderRadius is a plain CSS style property, safe for quickSetter.
    const setCardRadius = gsap.quickSetter(card, "borderRadius", "px")

    // Cover scale the card needs to swallow the viewport.
    // Measured from the spacer (identical box to the card, but never
    // transformed), so the value stays layout-accurate while the card is
    // mid-zoom during a ScrollTrigger refresh.
    const measureCoverScale = () => {
      const sr = spacer.getBoundingClientRect()
      const r = sr.width > 0 ? sr : card.getBoundingClientRect()
      return (
        Math.max(window.innerWidth / r.width, window.innerHeight / r.height) *
        1.02
      )
    }

    let mm: gsap.MatchMedia | null = null

    // Delay so the parent Lenis scrollerProxy effect runs first
    // (React fires child useEffects before parent ones)
    const timerId = setTimeout(() => {
      mm = gsap.matchMedia()

      // ------------------------------------------------------------------
      // Reduced motion: static full-bleed layout, no pin, no timeline
      // ------------------------------------------------------------------
      mm.add("(prefers-reduced-motion: reduce)", () => {
        let coverScale = measureCoverScale()

        const apply = () => {
          gsap.set(card, { opacity: 1 })
          setCardScale(coverScale)
          setSceneScale(1 / coverScale)
          setCardRadius(0)
          // Headline halves are replaced by the full-bleed card; meta stays
          // visible so the description and CTA remain accessible.
          gsap.set([leftEntrance, rightEntrance], { opacity: 1 })
          gsap.set([left, right], { opacity: 0 })
          gsap.set(grade, { opacity: 0.35 })
          gsap.set(metaEntrance, { opacity: 1 })
          gsap.set(meta, { opacity: 1 })
        }

        apply()
        const onResize = () => {
          coverScale = measureCoverScale()
          apply()
        }
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
      })

      // ------------------------------------------------------------------
      // Full motion - shared builder, branched by layout breakpoint
      // ------------------------------------------------------------------
      const buildFull = (isDesktop: boolean) => () => {
        let coverScale = measureCoverScale()
        const onRefresh = () => {
          coverScale = measureCoverScale()
        }
        ScrollTrigger.addEventListener("refresh", onRefresh)

        const isCoarse = window.matchMedia("(pointer: coarse)").matches
        const pinEnd = window.innerHeight * (isCoarse ? 1.2 : 2.0)

        // --- Entrance animations (play once on load) ---
        // Words slide up from behind their overflow-hidden mask (y:110% is
        // clipped by the mask) while blur sharpens to 0. Staggered per word,
        // left half then right half.
        const leftWords = Array.from(left.querySelectorAll("[data-word]"))
        const rightWords = Array.from(right.querySelectorAll("[data-word]"))

        const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
        intro.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0)
        intro.fromTo(
          leftWords,
          { y: "110%", filter: "blur(6px)" },
          { y: "0%", filter: "blur(0px)", duration: 0.8, stagger: 0.06 },
          0.1
        )
        intro.fromTo(
          rightWords,
          { y: "110%", filter: "blur(6px)" },
          { y: "0%", filter: "blur(0px)", duration: 0.8, stagger: 0.06 },
          0.25
        )
        intro.fromTo(
          metaEntrance,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.45
        )

        // --- Master scroll timeline ---
        // Single proxy tween drives the card zoom. On every update it applies
        // the cover scale via the direct setters, counter-scales the inner
        // viewport-sized scene to 1/scale so the video stays screen-stable,
        // and divides the border-radius by scale so the corner morph reads
        // linearly as the card grows.
        const proxy = { t: 0 }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top top",
            end: `+=${pinEnd}`,
            scrub: 0.6,
            anticipatePin: 1,
          },
        })

        // 1. Zoom proxy (0 - 1.0)
        tl.to(
          proxy,
          {
            t: 1,
            duration: 1.0,
            ease: "power1.inOut",
            onUpdate: () => {
              const t = proxy.t
              const s = 1 + t * (coverScale - 1)
              const visualR = INITIAL_RADIUS * (1 - t)
              setCardScale(s)
              setSceneScale(1 / s)
              setCardRadius(visualR / s)
            },
          },
          0
        )

        // 2. Meta drifts away early (0 - 0.18)
        tl.fromTo(
          meta,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -20, duration: 0.18, ease: "power2.in" },
          0
        )

        // 3. Headline halves part away (0.08 - 0.50)
        // Desktop: horizontal parting with rising letter-spacing and blur.
        // Mobile: vertical parting in the stacked layout.
        tl.fromTo(
          left,
          {
            opacity: 1,
            xPercent: isDesktop ? 0 : undefined,
            yPercent: isDesktop ? undefined : 0,
            letterSpacing: "0em",
            filter: "blur(0px)",
          },
          isDesktop
            ? {
                opacity: 1,
                xPercent: -55,
                letterSpacing: "0.15em",
                filter: "blur(8px)",
                duration: 0.42,
                ease: "power1.inOut",
              }
            : {
                opacity: 1,
                yPercent: -80,
                filter: "blur(6px)",
                duration: 0.42,
                ease: "power1.inOut",
              },
          0.08
        )
        tl.fromTo(
          right,
          {
            opacity: 1,
            xPercent: isDesktop ? 0 : undefined,
            yPercent: isDesktop ? undefined : 0,
            letterSpacing: "0em",
            filter: "blur(0px)",
          },
          isDesktop
            ? {
                opacity: 1,
                xPercent: 55,
                letterSpacing: "0.15em",
                filter: "blur(8px)",
                duration: 0.42,
                ease: "power1.inOut",
              }
            : {
                opacity: 1,
                yPercent: 80,
                filter: "blur(6px)",
                duration: 0.42,
                ease: "power1.inOut",
              },
          0.08
        )

        // 4. Words dissolve one by one as the card zooms past them (0.35 - 0.65)
        // Order: left half words then right half words, so the dim reads
        // left-to-right across both halves. Opacity only - the intro timeline
        // owns transform/filter on these same elements.
        const allWords = [...leftWords, ...rightWords]
        tl.fromTo(
          allWords,
          { opacity: 1 },
          { opacity: 0, duration: 0.3, stagger: 0.05, ease: "power1.in" },
          0.35
        )

        // 5. Colour-grade layer lands (0.65 - 1.0)
        tl.to(grade, { opacity: 1, duration: 0.35, ease: "power1.in" }, 0.65)

        ScrollTrigger.refresh()

        return () => ScrollTrigger.removeEventListener("refresh", onRefresh)
      }

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        buildFull(true)
      )
      mm.add(
        "(max-width: 767.9px) and (prefers-reduced-motion: no-preference)",
        buildFull(false)
      )
    }, 300)

    return () => {
      clearTimeout(timerId)
      mm?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Card - the zoom portal window */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={cardRef}
          className="relative overflow-hidden opacity-0 w-[min(72vw,560px)] md:w-[min(32vw,480px)]"
          style={{
            aspectRatio: "16 / 10",
            borderRadius: `${INITIAL_RADIUS}px`,
            willChange: "transform, border-radius",
          }}
        >
          {/* Scene - viewport-sized inner world, cropped by the card like a window.
              Laid out at full viewport size so it lands at true 1:1 when the card
              reaches full-bleed, keeping everything inside sharp. */}
          <div
            ref={sceneRef}
            className="absolute"
            style={{
              width: "100vw",
              height: "100vh",
              top: "50%",
              left: "50%",
              marginTop: "-50vh",
              marginLeft: "-50vw",
              willChange: "transform",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>

          {/* Colour-grade layer */}
          <div
            ref={gradeRef}
            className="absolute inset-0 bg-black/50 pointer-events-none opacity-0"
          />
        </div>
      </div>

      {/* Headline halves flanking the card */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left half - word spans reveal through masks on load; scrub parts the block. */}
          <div ref={leftEntranceRef} className="md:pr-8 lg:pr-12 text-center md:text-right">
            <div ref={leftRef}>
              <h1 className="text-[clamp(28px,8vw,40px)] md:text-[clamp(30px,3.6vw,60px)] font-extrabold tracking-[-0.04em] leading-[1.08] text-white whitespace-nowrap">
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">We</span>
                </span>{" "}
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">design</span>
                </span>{" "}
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">it.</span>
                </span>
              </h1>
            </div>
          </div>

          {/* Invisible spacer matching card dimensions */}
          <div
            ref={spacerRef}
            className="shrink-0 w-[min(72vw,560px)] md:w-[min(32vw,480px)]"
            style={{ aspectRatio: "16 / 10" }}
            aria-hidden="true"
          />

          {/* Right half - word spans reveal through masks on load; scrub parts the block. */}
          <div ref={rightEntranceRef} className="md:pl-8 lg:pl-12 text-center md:text-left">
            <div ref={rightRef}>
              <h1 className="text-[clamp(28px,8vw,40px)] md:text-[clamp(30px,3.6vw,60px)] font-extrabold tracking-[-0.04em] leading-[1.08] text-white whitespace-nowrap">
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">We</span>
                </span>{" "}
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">build</span>
                </span>{" "}
                <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                  <span data-word className="inline-block">it.</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Meta - description and CTA */}
      <div
        ref={metaEntranceRef}
        className="absolute bottom-8 md:bottom-12 left-0 w-full z-10 opacity-0"
      >
        <div ref={metaRef}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed md:font-light max-w-md">
                An independent design and development studio. We build things
                people actually want to use.
              </p>
              <div className="flex flex-col items-start md:items-end">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group pointer-events-auto"
                >
                  View Our Work
                  <span className="inline-block w-12 h-px bg-white group-hover:w-20 transition-all duration-500" />
                </Link>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-800 mt-4">
                  Scroll to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}