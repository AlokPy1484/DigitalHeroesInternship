"use client";

import { DottedMap, Marker } from "@/components/ui/dotted-map";
import ContactCard from "./ContactCard";
import { Map } from "./Map";
import { Radar, IconContainer } from "./ui/Radar";
import { CaseSensitive, FingerprintPattern, Cpu, MonitorCog, Frame } from "lucide-react";


export default function ContactSection() {

    return (
        <section className="flex justify-center w-full mt-30 mb-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-4 items-start w-full md:w-2/3 p-4">
                    <div className="flex flex-col justify-center items-start w-full gap-4">
                        <h1 className="flex justify-start w-full text-[42px] md:text-5xl font-bold">Let's grow together</h1>
                        <span className="flex justify-start w-full text-sm md:text-md text-zinc-400">
                            Contact me if you have web development work where I can apply my skills to help build, improve, or scale your project effectively.
                        </span>
                    </div>
                    <div className="relative mt-10 w-full p-4 bg-black rounded-2xl border border-neutral-100/10 border-2">
                        <DottedMap dotRadius={0.1} className="bg-black p-4" markers={markers} pulse markerColor="#FF6900" />
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/3 flex justify-center md:justify-end ">
                    <ContactCard />
                </div>
            </div>
        </section>
    )
}



const markers: Marker[] = [
    {
        lat: 37.5665,
        lng: 126.978,
        size: 0.3,
    },
    {
        lat: 40.7128,
        lng: -74.006,
        size: 0.3,
    },
]