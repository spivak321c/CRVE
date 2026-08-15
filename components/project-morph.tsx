"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip"
import { X } from "lucide-react"

gsap.registerPlugin(Flip)

type MorphProject = {
  id: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  images: string[]
}

type ProjectMorphProps = {
  projects: MorphProject[]
}

const DETAIL_KEYS = ["index", "kicker", "title", "description", "disciplines", "year"] as const

export function ProjectMorph({ projects }: ProjectMorphProps) {
  const archiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const archive = archiveRef.current
    if (!archive) return

    const grid = archive.querySelector<HTMLElement>("[data-flip-grid]")
    const detail = archive.querySelector<HTMLElement>("[data-flip-detail]")
    const content = detail ? detail.querySelector<HTMLElement>(".flip-detail-content") : null
    const media = detail ? detail.querySelector<HTMLElement>(".flip-detail-media") : null
    const closeBtn = detail ? detail.querySelector<HTMLButtonElement>(".flip-detail-close") : null
    const cards = Array.from(archive.querySelectorAll<HTMLElement>("[data-flip-card]"))
    const reveals = detail ? detail.querySelectorAll<HTMLElement>("[data-detail-reveal]") : []
    if (!grid || !detail || !content || !media || !closeBtn) return

    const duration = parseFloat(archive.dataset.flipDuration || "") || 0.8
    const ease = archive.dataset.flipEase || "power3.inOut"

    let openCard: HTMLElement | null = null
    let animating = false

    const isReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const listeners: Array<[EventTarget, string, EventListener]> = []
    const on = (target: EventTarget, type: string, handler: EventListener) => {
      target.addEventListener(type, handler)
      listeners.push([target, type, handler])
    }

    const populate = (card: HTMLElement) => {
      DETAIL_KEYS.forEach((key) => {
        const value = card.getAttribute(`data-detail-${key}`) ?? ""
        detail.querySelectorAll<HTMLElement>(`[data-detail-${key}]`).forEach((el) => {
          el.textContent = value
        })
      })
    }

    const manageFocusable = (target: HTMLElement, open: boolean) => {
      cards.forEach((card) => {
        if (card === target) {
          card.setAttribute("aria-expanded", String(open))
          return
        }
        if (open) {
          card.dataset.flipPreviousTabindex = card.getAttribute("tabindex") || ""
          card.setAttribute("tabindex", "-1")
          card.setAttribute("aria-hidden", "true")
        } else {
          const prev = card.dataset.flipPreviousTabindex
          if (prev) card.setAttribute("tabindex", prev)
          else card.removeAttribute("tabindex")
          delete card.dataset.flipPreviousTabindex
          card.removeAttribute("aria-hidden")
        }
      })
    }

    const focusClose = () => {
      animating = false
      if (closeBtn.isConnected) closeBtn.focus()
    }

    const cleanup = (card: HTMLElement) => {
      cards.forEach((c) => gsap.set(c, { clearProps: "all" }))
      card.classList.remove("is-active")
      manageFocusable(card, false)
      animating = false
      openCard = null
      if (card.isConnected) card.focus()
    }

    const doClose = (card: HTMLElement) => {
      const state = Flip.getState(cards, { props: "borderRadius" })
      const slot = grid.querySelector<HTMLElement>(`[data-flip-slot="${card.dataset.flipId}"]`)
      ;(slot || grid).appendChild(card)
      archive.classList.remove("is-open")
      detail.classList.remove("is-active")
      detail.setAttribute("aria-hidden", "true")
      gsap.set(cards, { opacity: 1 })
      if (isReduced()) {
        cleanup(card)
        return
      }
      Flip.from(state, {
        duration,
        ease,
        absolute: true,
        scale: true,
        nested: true,
        prune: true,
        onComplete: () => cleanup(card),
      })
    }

    const closeProject = () => {
      if (!openCard || animating) return
      animating = true
      const card = openCard
      if (isReduced()) {
        doClose(card)
        return
      }
      gsap.to(reveals, {
        y: 12,
        opacity: 0,
        duration: 0.18,
        stagger: 0.025,
        ease: "power2.in",
        onComplete: () => doClose(card),
      })
    }

    const openProject = (card: HTMLElement) => {
      if (openCard || animating || !card.isConnected) return
      animating = true
      openCard = card
      populate(card)
      const state = Flip.getState(cards, { props: "borderRadius" })
      archive.classList.add("is-open")
      detail.classList.add("is-active")
      detail.setAttribute("aria-hidden", "false")
      card.classList.add("is-active")
      media.appendChild(card)
      manageFocusable(card, true)
      if (isReduced()) {
        gsap.set([content, cards], { clearProps: "all" })
        focusClose()
        return
      }
      gsap.set(content, { opacity: 0 })
      Flip.from(state, { duration, ease, absolute: true, scale: true, nested: true, fade: true })
      const others = cards.filter((c) => c !== card)
      gsap
        .timeline({ onComplete: focusClose })
        .fromTo(
          others,
          { opacity: 1 },
          { opacity: 0.2, duration: duration * 0.62, ease: "power2.inOut", stagger: 0.025 },
          0
        )
        .fromTo(
          reveals,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.42, stagger: 0.07, ease: "power3.out" },
          duration * 0.38
        )
        .to(content, { opacity: 1, duration: 0.01 }, duration * 0.38)
    }

    const getFocusables = (root: HTMLElement) =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null)

    const onDetailKeydown = (e: Event) => {
      const key = (e as KeyboardEvent).key
      if (key !== "Tab") return
      const focusables = getFocusables(detail)
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if ((e as KeyboardEvent).shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!(e as KeyboardEvent).shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const onDocKeydown = (e: Event) => {
      if ((e as KeyboardEvent).key === "Escape" && openCard) {
        e.preventDefault()
        closeProject()
      }
    }

    cards.forEach((card) => {
      on(card, "click", () => openProject(card))
    })
    on(closeBtn, "click", closeProject)
    on(detail, "keydown", onDetailKeydown)
    on(document, "keydown", onDocKeydown)

    return () => {
      listeners.forEach(([target, type, handler]) => target.removeEventListener(type, handler))
      if (openCard) {
        const slot = grid.querySelector<HTMLElement>(`[data-flip-slot="${openCard.dataset.flipId}"]`)
        ;(slot || grid).appendChild(openCard)
        manageFocusable(openCard, false)
      }
      detail.setAttribute("aria-hidden", "true")
      detail.classList.remove("is-active")
      archive.classList.remove("is-open")
      gsap.killTweensOf([cards, reveals, content])
    }
  }, [])

  const total = projects.length
  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div
      ref={archiveRef}
      className="flip-archive"
      data-flip-morph
      data-flip-duration="0.8"
      data-flip-ease="power3.inOut"
    >
      <div className="archive-head" aria-hidden="true">
        <p>Selected work</p>
        <p>Index / {pad(total)}</p>
      </div>
      <div className="flip-grid" data-flip-grid>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`flip-grid-slot${i === 0 || i === total - 1 ? " flip-grid-slot--wide" : ""}`}
            data-flip-slot={project.id}
          >
            <button
              type="button"
              className="flip-card"
              data-flip-card
              data-flip-id={project.id}
              data-detail-index={`${pad(i + 1)} / ${pad(total)}`}
              data-detail-kicker={`${project.category} / ${project.year}`}
              data-detail-title={project.title}
              data-detail-description={project.description}
              data-detail-disciplines={project.tags.join(" / ")}
              data-detail-year={project.year}
              aria-label={`Open ${project.title} project`}
              aria-haspopup="dialog"
              aria-expanded="false"
            >
              <span className="flip-card-art" aria-hidden="true">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={i === 0}
                  className="flip-card-img object-cover"
                />
              </span>
              <span className="flip-card-info">
                <span>
                  {pad(i + 1)} / {project.category}
                </span>
                <strong>{project.title}</strong>
                <small>{project.year}</small>
              </span>
            </button>
          </div>
        ))}
      </div>
      <div
        className="flip-detail"
        data-flip-detail
        role="dialog"
        aria-modal="true"
        aria-label="Project dossier"
        aria-hidden="true"
      >
        <div className="flip-detail-media" />
        <div className="flip-detail-content">
          <div className="flip-detail-top" data-detail-reveal>
            <span data-detail-index />
            <span>Selected work</span>
          </div>
          <div className="flip-detail-copy">
            <p className="flip-detail-kicker" data-detail-kicker data-detail-reveal />
            <h2 data-detail-title data-detail-reveal />
            <p className="flip-detail-description" data-detail-description data-detail-reveal />
          </div>
          <div className="flip-detail-foot" data-detail-reveal>
            <span>Disciplines</span>
            <strong data-detail-disciplines />
            <span>Year</span>
            <strong data-detail-year />
          </div>
        </div>
        <button type="button" className="flip-detail-close" aria-label="Close project dossier">
          <span>Close</span>
          <X size={13} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}