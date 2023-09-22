import { motion, useScroll } from "framer-motion"

const ScrollLinked = () => {

  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />  
  )
}
export default ScrollLinked;