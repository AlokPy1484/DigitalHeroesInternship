"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react"
import { useRef } from "react"


export default function PreviewVideo() {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const translateContent = useTransform(scrollYProgress, [0, 0.5, 1], [80, 100, 90])
    const translateBlur = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [10, 0, 0, 10])

    return (
        <div

            className="w-screen h-screen flex justify-center items-center ">

            <motion.div
                ref={ref}
                style={{
                    width: useMotionTemplate`${translateContent}%`,
                    height: useMotionTemplate`${translateContent}%`,
                    filter: useMotionTemplate`blur(${translateBlur}px)`
                }}

                className="flex w-full h-full rounded-2xl border border-neutral-100/10 border-4">

                <video
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105  rounded-2xl `}
                    src="https://digitalheroesco.com/assets/fire.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    {/* <source src="https://digitalheroesco.com/assets/fire.mp4" type="video/mp4" /> */}
                </video>
            </motion.div>


        </div>
    )
}