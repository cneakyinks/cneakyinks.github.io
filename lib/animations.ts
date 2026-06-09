import type { Variants, Transition } from "framer-motion"

// Soft spring with a gentle overshoot — the "bubbly but sleek" settle.
export const springSoft: Transition = { type: "spring", bounce: 0.3, duration: 0.7 }

// Standard entry: fade + rise + a light scale pop.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: springSoft },
}

// A slightly larger rise, for hero / headline elements.
export const fadeUpLg: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: springSoft },
}

// Parent that cascades its children in, one after another.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

// Tighter cascade for dense lists (timeline steps, grids).
export const staggerContainerTight: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}
