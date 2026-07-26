'use client';

import Image from 'next/image';
import { ArrowUpRight, Home } from 'lucide-react';
import { ReactElement } from 'react';
import { Globe } from "@/components/ui/globe"
import { AnimatedListDemo } from './AnimatedListDemo';

import { DockDemo } from './DockDemo';
import { AnimatedBeamDemo } from './AnimatedBeamDemo';


const items = [
  { icon: <Home size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <Home size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <Home size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <Home size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-black px-4 py-20 text-white">
      {/* background glow */}
      <div className="" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1A2E22] px-4 py-1 text-sm">
              ⦿ Digital Heroes
            </span>

            <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
              <span className="text-[#3F6B54]">Our</span> Services
            </h2>

            <p className="mt-4 text-white/70">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>

          <button className="self-start rounded-full bg-[#1A2E22] px-6 py-3 text-sm transition hover:bg-[#234F3A]">
            Contact Now
          </button>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 auto-rows-auto lg:grid-cols-2 lg:auto-rows-[220px] ">
          {/* Tall */}
          <ServiceCard
            tall
            title="Marketing that converts to leads"
            description="Designing breathtaking, user-centric websites that boost engagement, conversions, and growth."
            component={
              <AnimatedListDemo />
            }
          />

          {/* Short */}
          <ServiceCard
            title="Provide multi tool support"
            description="Crafting distinctive, scalable, and impactful logos that embody your brand's identity."
            component={<DockDemo />}
          />

          {/* Tall */}
          <ServiceCard
            tall
            title="We provide service around the globe"
            description="Crafting bold, engaging, and versatile graphic designs that elevate your brand."
            component={<Globe />}
          />

          {/* Short */}
          <ServiceCard
            title="Helping your company reach your audiance"
            description="Bringing ideas to life with interactive, user-centered Framer designs."
            component={<AnimatedBeamDemo />}

          />
        </div>
      </div>

    </section>
  );
}




function ServiceCard({
  title,
  description,
  image,
  tall = false,
  component
}: {
  title: string;
  description: string;
  image?: string;
  tall?: boolean;
  component?: ReactElement
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition border border-neutral-100/10 border-2 hover:border-4 transition-all duration-300 ease-in-out max-h-[250px] md:max-h-full ${tall ? 'min-h-[440px] lg:row-span-2' : 'h-full'
        }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A2E22] transition group-hover:bg-[#234F3A]">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <p className="mt-2 text-sm text-white/70">{description}</p>

      {image && (
        <div
          className={`relative mt-6 w-full overflow-hidden rounded-xl ${tall ? 'h-56' : 'h-40'
            }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {component &&
        (<div className='relative top-10'>{component}</div>)}
    </div>
  );
}
