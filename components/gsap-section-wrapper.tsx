"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapSectionWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: "fadeUp" | "scaleIn" | "slideIn" | "parallax" | "none";
  duration?: number;
  delay?: number;
  stagger?: number;
  distance?: number;
}

/**
 * Reusable wrapper component that applies GSAP animations to sections
 * Automatically triggers animations when the element enters the viewport
 */
export function GsapSectionWrapper({
  children,
  className = "",
  animationType = "fadeUp",
  duration = 0.8,
  delay = 0,
  stagger = 0.1,
  distance = 40,
}: GsapSectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const animationConfigs: Record<string, gsap.TweenVars> = {
      fadeUp: {
        opacity: 0,
        y: distance,
        ease: "power2.out",
      },
      scaleIn: {
        opacity: 0,
        scale: 0.8,
        ease: "back.out",
      },
      slideIn: {
        opacity: 0,
        x: -distance,
        ease: "power2.out",
      },
      parallax: {
        y: 0,
      },
    };

    const config = animationConfigs[animationType];
    if (!config) return;

    if (animationType === "parallax") {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: 50,
        ease: "none",
      });
    } else if (animationType === "none") {
      return;
    } else {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          markers: false,
        },
        ...config,
        duration,
        delay,
      });

      // Stagger children if they have animation-target class
      const children = sectionRef.current.querySelectorAll(
        "[data-animation-target]"
      );
      if (children.length > 0) {
        gsap.from(children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            markers: false,
          },
          ...config,
          duration,
          stagger: stagger,
          delay,
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === sectionRef.current ||
          trigger.vars.trigger === childrenRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, [animationType, duration, delay, stagger, distance]);

  return (
    <div ref={sectionRef} className={className}>
      <div ref={childrenRef}>{children}</div>
    </div>
  );
}
