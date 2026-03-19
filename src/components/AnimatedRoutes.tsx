import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Routes } from "react-router-dom";
import { type ReactNode, useEffect } from "react";

interface AnimatedRoutesProps {
  children: ReactNode;
}

export default function AnimatedRoutes({ children }: AnimatedRoutesProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.35,
          ease: [0.2, 0, 0, 1],
        }}
      >
        <Routes location={location}>
          {children}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
