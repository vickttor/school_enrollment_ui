import { motion } from "framer-motion";
import Link from "next/link";
import { SHeader } from "./styles";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Header() {
  return (
    <SHeader variants={container} initial="hidden" animate="visible">
      <motion.img
        src="assets/logo.png"
        alt="logo"
        variants={item}
        initial="hidden"
        animate="visible"
      />

      <motion.h1 variants={item} initial="hidden" animate="visible">
        School Enrollments
      </motion.h1>

      <motion.div
        whileTap={{ scale: 0.9 }}
        variants={item}
        initial="hidden"
        animate="visible"
      >
        <Link href="/forms">ADICIONAR</Link>
      </motion.div>
    </SHeader>
  );
}
