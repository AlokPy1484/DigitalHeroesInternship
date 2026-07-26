"use client"

import React from "react"
import { SiAdobeaftereffects, SiAdobepremierepro, SiFigma, SiCinema4D, SiFirebase, SiAdobe } from "react-icons/si"

import { Dock, DockIcon } from "../../components/ui/dock"

export function DockDemo() {
  return (
    <div className="relative top-[-30px]" >
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10">
          <SiAdobeaftereffects className="text-blue-500 size-[30px] hover:size-[35px] transition-all duration-150" />
        </DockIcon>
        <DockIcon className="bg-black/10 ">
          <SiAdobepremierepro className="text-violet-500 size-[30px] hover:size-[35px] transition-all duration-150" />
        </DockIcon>
        <DockIcon className="bg-black/10 ">
          <SiFigma className="text-orange-500 size-[30px] hover:size-[35px] transition-all duration-150" />
        </DockIcon>
        <DockIcon className="bg-black/10 ">
          <SiAdobe className="rounded-md text-red-500 size-[30px] hover:size-[35px] transition-all duration-150" />
        </DockIcon>
      </Dock>
    </div>
  )
}
