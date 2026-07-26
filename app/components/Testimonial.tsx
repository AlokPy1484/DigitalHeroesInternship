'use client';

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Smile } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="testimonials" className="relative bg-black px-6 py-12 text-white w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#1A2E22]/30" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1A2E22] px-5 py-1.5 text-sm text-white">
            ⦿ How we worked
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-10 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-[#3F6B54]">What Clients</span>{' '}
          <span className="text-white/90">have to say</span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Simple, streamlined process is what get&apos;s you results
        </p>
      </div>


      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className=" py-10"
      />



      <div className="relative bg-black px-4 py-4">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#1A2E22]/20" />

        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl sm:flex-row sm:items-center sm:p-10">
            {/* Left content */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white">
                <Smile size={20} />
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  I am with you in every step
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  alongside you at each step for seamless experience
                </p>
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex  gap-3 ">
              <a href="https://x.com" target="*" className="rounded-full border border-white/10 bg-transparent px-4 md:px-6 py-3 text-sm text-[#3F6B54] transition hover:border-[#3F6B54] hover:bg-[#3F6B54]/10">
                See All Projects
              </a>

              <a href="mailto:plexmedia@gmail.com"  className="flex justify-center rounded-full bg-[#1A2E22] px-4 md:px-6 py-3 text-sm text-white transition hover:bg-[#234F3A]">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const testimonials = [
  {
    quote:
      "Plex transformed our brand visuals completely. Engagement increased almost instantly after launch, and the motion work feels premium and intentional.",
    name: "James Whitfield",
    title: "Creative Director, Novastream Labs",
  },
  {
    quote:
      "The attention to detail and motion design quality was exceptional. Our product now feels polished, modern, and far more trustworthy.",
    name: "Priya Nandani",
    title: "Head of Design, Orbitly",
  },
  {
    quote:
      "Working with Plex was seamless. The visuals perfectly matched our energy and helped us connect better with our fitness community.",
    name: "Marcus Delacroix",
    title: "Co-Founder, Peakform Studio",
  },
  {
    quote:
      "Plex understood our vision instantly. The final designs elevated our platform and made complex ideas feel simple and elegant.",
    name: "Sofia Andersson",
    title: "VP of Product, Luminary Tech",
  },
  {
    quote:
      "From concept to execution, everything felt strategic and refined. The motion design added real value to our brand experience.",
    name: "Leo Matsuda",
    title: "Brand Strategist, Kindred Co.",
  },
];


