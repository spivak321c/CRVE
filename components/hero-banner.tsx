"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  hasParallax?: boolean;
  hasZoom?: boolean;
}

/**
 * Hero banner component with advanced GSAP animations
 * Includes parallax, zoom, and scroll-triggered effects
 */
export function HeroBanner({
  imageSrc,
  title,
  subtitle,
  hasParallax = true,
  hasZoom = true,
}: HeroBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline();

    // Title animation - staggered reveal
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || "";
      titleRef.current.innerHTML = titleText
        .split("")
        .map((char) =>
          char === " "
            ? '<span style="display: inline-block; margin: 0 2px;">&nbsp;</span>'
            : `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char}</span>`
        )
        .join("");

      const titleChars = titleRef.current.querySelectorAll("span");
      tl.from(
        titleChars,
        {
          opacity: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        },
        0.2
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        0.5
      );
    }

    // Image animation
    if (imageRef.current && hasZoom) {
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
        },
        0
      );
    }

    // Parallax effect on scroll
    if (imageRef.current && hasParallax) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
        y: 100,
        ease: "none",
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [hasParallax, hasZoom]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          {title}
        </div>

        {subtitle && (
          <div
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
