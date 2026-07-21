import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggered text reveal animation
 * Animates text in character by character with a stagger effect
 */
export function animateTextReveal(
  element: HTMLElement,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const {
    duration = 0.8,
    stagger = 0.05,
    delay = 0,
    ease = "power2.out",
  } = options;

  const text = element.textContent || "";
  element.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    duration,
    opacity: 1,
    y: 0,
    stagger,
    delay,
    ease,
    onStart: () => {
      chars.forEach((char) => {
        gsap.set(char, { opacity: 0, y: 20 });
      });
    },
  });
}

/**
 * Scroll-triggered fade and slide up animation
 * Elements fade in and slide up when they enter the viewport
 */
export function scrollRevealUp(
  selector: string,
  options: {
    duration?: number;
    distance?: number;
    stagger?: number;
    delay?: number;
  } = {}
) {
  const {
    duration = 0.8,
    distance = 40,
    stagger = 0.1,
    delay = 0,
  } = options;

  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 50%",
        scrub: false,
        markers: false,
      },
      duration,
      opacity: 0,
      y: distance,
      ease: "power2.out",
      delay,
    });
  });
}

/**
 * Parallax scroll effect
 * Creates a parallax effect based on scroll speed
 */
export function parallaxScroll(
  selector: string,
  intensity: number = 0.5
) {
  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(element, {
            y: self.getVelocity() * intensity * 0.001,
          });
        },
      },
    });
  });
}

/**
 * Staggered fade and scale animation
 * Multiple elements animate in sequence with stagger
 */
export function staggerFadeScale(
  selector: string,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    fromScale?: number;
  } = {}
) {
  const {
    duration = 0.6,
    stagger = 0.08,
    delay = 0,
    fromScale = 0.8,
  } = options;

  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      markers: false,
    },
    duration,
    opacity: 0,
    scale: fromScale,
    stagger,
    delay,
    ease: "back.out",
  });
}

/**
 * Text line animation
 * Animates each line of text separately with a drawing effect
 */
export function animateTextLines(
  selector: string,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) {
  const { duration = 0.8, stagger = 0.1, delay = 0 } = options;

  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((element) => {
    const lines = element.querySelectorAll("span, p, div");

    gsap.from(lines, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        markers: false,
      },
      duration,
      opacity: 0,
      y: 20,
      stagger,
      delay,
      ease: "power2.out",
    });
  });
}

/**
 * Magnetic hover effect
 * Element follows cursor movement within bounds
 */
export function magneticHover(
  selector: string,
  intensity: number = 0.5
) {
  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((element) => {
    let x = 0,
      y = 0;

    element.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left - centerX;
      const mouseY = e.clientY - rect.top - centerY;

      x = mouseX * intensity;
      y = mouseY * intensity;

      gsap.to(element, {
        x,
        y,
        duration: 0.3,
        overwrite: "auto",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

/**
 * Scroll progress bar animation
 * Updates width based on scroll progress
 */
export function scrollProgressBar(selector: string) {
  const element = document.querySelector(selector) as HTMLElement;

  if (!element) return;

  gsap.set(element, { scaleX: 0, transformOrigin: "left" });

  gsap.to(element, {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      markers: false,
    },
    scaleX: 1,
    ease: "none",
  });
}

/**
 * Pin and animate on scroll
 * Pins an element and animates content while scrolling
 */
export function pinAndAnimate(
  triggerSelector: string,
  pinSelector: string,
  animationSelector: string,
  duration: number = 5
) {
  const trigger = document.querySelector(triggerSelector);
  const content = document.querySelector(animationSelector);

  if (!trigger || !content) return;

  gsap.to(content, {
    scrollTrigger: {
      trigger,
      pin: pinSelector,
      start: "top center",
      end: `+=${duration * 100}`,
      scrub: 1,
      markers: false,
    },
    y: -100,
    opacity: 0,
    ease: "power2.inOut",
  });
}

/**
 * Morphing shape animation
 * Smoothly transitions between different shapes
 */
export function morphShape(
  selector: string,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const { duration = 1.5, delay = 0 } = options;
  const element = document.querySelector(selector) as SVGElement;

  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      markers: false,
    },
    attr: { d: "M0,0 L100,0 L100,100 L0,100 Z" },
    duration,
    delay,
    ease: "power2.inOut",
  });
}

/**
 * Counter animation
 * Animates a number from 0 to a target value
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  options: {
    duration?: number;
    suffix?: string;
    prefix?: string;
  } = {}
) {
  const { duration = 2, suffix = "", prefix = "" } = options;

  const counter = { value: 0 };

  gsap.to(counter, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent =
        prefix + Math.floor(counter.value) + suffix;
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      markers: false,
    },
  });
}

/**
 * Wave text animation
 * Creates a wave effect on text
 */
export function waveText(
  selector: string,
  options: {
    duration?: number;
    height?: number;
    repeat?: number;
  } = {}
) {
  const { duration = 1.5, height = 20, repeat = -1 } = options;
  const element = document.querySelector(selector) as HTMLElement;

  if (!element) return;

  const chars = element.querySelectorAll("span");

  gsap.to(chars, {
    duration,
    y: -height,
    stagger: 0.1,
    repeat,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/**
 * Cleanup function to kill all scroll triggers
 * Useful for cleanup on component unmount
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
