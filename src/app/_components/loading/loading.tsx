"use client";

import { motion } from "framer-motion";

type LoaderProps = {
  type?: "spinner" | "wave" | "orbit";
};

export default function Loader({ type = "spinner" }: LoaderProps) {
  if (type === "spinner") {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (type === "wave") {
    return (
      <div className="flex items-end justify-center h-screen bg-white space-x-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-6 bg-blue-600 rounded-full"
            animate={{ scaleY: [1, 2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "orbit") {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative w-20 h-20">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-blue-600 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                margin: "-0.5rem",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}
