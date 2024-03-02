import { motion } from 'framer-motion'

interface RevealOneByOneProps {
    children: string
}

const animationVariants = {
    animate: {y: 0}
    transition
  }

const RevealOneByOne = ({children}: RevealOneByOneProps) => {
    const textArray = children.split(" ")
  return (
    <div className="">
        {textArray.map((text) => {
           return <motion.span variants={animationVariants} whileInView="animate"  initial={{
            y: '100px'
           }}>{text}{" "}</motion.span>
        })}
    </div>
  )
}

export default RevealOneByOne