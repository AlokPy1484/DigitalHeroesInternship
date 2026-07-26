"use client"
import { CalendarDays, Phone, Pyramid, Smile } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"



export default function AnimatedNavbar() {


    const [hovered, setHovered] = useState<number | null>(3)


    return (
        <div className="fixed top-6  flex justify-center items-center w-full  z-100">
            <div className="flex md:justify-between items-center w-[95vw] mx-10 p-2 border border-white/10 bg-black/40  backdrop-blur-xl rounded-4xl w-full ">
                <div className="flex justify-start items-center gap-4">
                    <span className="p-1 rounded-full bg-white">
                        <Pyramid size={24} />
                    </span>
                    <a className="text-white md:text-2xl font-light whitespace-nowrap">
                        Digital Heroes
                    </a>
                </div>
                <nav
                    onMouseLeave={() => setHovered(3)}
                    className=" flex justify-end md:justify-start items-center md:gap-4 ">

                    {navItems.map((item, idx) => (


                        <Link
                            key={idx}
                            onMouseEnter={() => setHovered(idx)}
                            href={item.link} className="hidden md:flex relative  items-center justify-start gap-2 rounded-full  px-4 py-2 text-sm text-white px-4 h-full">

                            {hovered === idx && (
                                <motion.span
                                    layoutId="hover"
                                    className="hidden md:flex absolute inset-0  rounded-full border border-[#3F6B54]/20 bg-white/10  text-sm text-white "></motion.span>
                            )}

                            <span className='hidden md:flex justify-center items-center gap-2 w-full h-full whitespace-nowrap'>
                                {idx === 3 && <Phone size={16} />}
                                {item.lable}</span>

                        </Link>
                    ))}

                    {/* <Link className="flex md:hidden relative  items-center justify-start gap-2 rounded-full  px-4 py-2 text-sm text-white px-4 h-full"
                        href="/meeting">


                        <motion.span
                            layoutId="hover"
                            className="flex absolute inset-0  rounded-full border border-[#3F6B54]/20 bg-white/10  text-sm text-white "></motion.span>


                        <span className='flex justify-center items-center gap-2 w-full h-full whitespace-nowrap'>
                            <CalendarDays size={16} />
                            Book Meeting</span>
                    </Link> */}
                </nav>


            </div>
        </div>
    )
}

type navItemsTyoe = {
    lable: string;
    link: string;
}

const navItems: navItemsTyoe[] = [
    {
        lable: "Admin",
        link: "/admin"
    },
    {
        lable: "Services",
        link: "#services"
    },
    {
        lable: "About",
        link: "#projects"
    },
    {
        lable: "Contact",
        link: "#contact"
    }
]



//layout hover structure

{/* <nav>
    {
        <Link>
        
        {contitional <div/>}
        main <span/>
        </Link>
    }
</nav> */}