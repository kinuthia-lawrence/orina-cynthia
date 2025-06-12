"use client"

import { motion, type Variants } from "framer-motion"

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -10,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: 0.2 }}
            className="flex justify-center items-center gap-2"
        >
            <motion.div 
                className="w-2 h-2 rounded-full bg-green-500" 
                variants={dotVariants} 
            />
            <motion.div 
                className="w-1 h-2 rounded-full bg-blue-500" 
                variants={dotVariants} 
            />
            <motion.div 
                className="w-2 h-2 rounded-full bg-green-500" 
                variants={dotVariants} 
            />
        </motion.div>
    )
}

export default LoadingThreeDotsJumping