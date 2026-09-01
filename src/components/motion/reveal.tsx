"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type StaggerListProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerList({ children, className }: StaggerListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
};

export function StaggerItem({ children, className, hoverLift = false }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={hoverLift ? { y: -2 } : undefined}
      whileTap={hoverLift ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Unlike StaggerList/StaggerItem (which share one visibility check across the
// whole group - only correct when every item sits in the same viewport),
// RevealItem tracks its own visibility independently. Use this for lists
// that span multiple screens, so each item animates in as it's actually
// scrolled to, rather than all firing together as soon as the list's top
// edge appears.
type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
};

export function RevealItem({ children, className, hoverLift = false }: RevealItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={hoverLift ? { y: -2 } : undefined}
      whileTap={hoverLift ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}
