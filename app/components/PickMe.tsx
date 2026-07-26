'use client';

import { Check, X } from 'lucide-react';

export default function PickMe() {
  return (
    <section id="projects" className="relative bg-black px-6 py-24 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#290A0A]/20" />

      <div className="relative mx-auto max-w-6xl">

        <div className='sticky top-[50px]'>
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#002113]/90 px-4 py-1 text-sm text-white">
              ⦿ Why choose us
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-center text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#3F6B54]">Why Digital Heroes</span>{' '}
            <span className="text-white/90">for Development Works</span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-center text-white/60">
            Why Partner with us for the Design Excellence
          </p>
        </div>

        {/* Comparison Card 1 */}
        <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5  p-8 backdrop-blur-3xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Pro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Custom Motion Design
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Tailored, fluid animations crafted specifically for your brand to captivate and engage your audience.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Stock Templates
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Rigid, cookie-cutter templates that lack personality and fail to make your brand stand out.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Card 2 */}
        <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Pro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Direct Communication
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                You work directly with the creator. Swift feedback loops, complete transparency, and no middlemen.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Traditional Agencies
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Messages lost in translation across accounts managers, slow turnaround times, and bloated budgets.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Card 3 */}
        <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-[#0E0E0E] p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Pro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Optimized Deliverables
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Files are delivered in perfectly optimized formats for web, social media, and apps to ensure smooth playback.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Messy Project Files
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Unorganized project structures, massive export sizes, and formats that cause lagging on your platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Card 4 */}
        <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Pro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Strategic Storytelling
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Every frame serves a purpose. We focus on pacing, rhythm, and narrative to drive your core message home.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Aimless Animation
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Movement just for the sake of movement, which distracts from your goals and loses the viewer's attention.
              </p>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
