// src/components/Loader.jsx
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  )
}