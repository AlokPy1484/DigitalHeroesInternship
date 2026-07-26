'use client';

import { Twitter, Instagram, Facebook, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black px-6 pt-24 pb-10 text-white">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex items-center gap-3 text-xl font-medium">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              ✦
            </span>
            Digital Heroes
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 text-white/70">
            <a href="#" className="transition hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="transition hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="transition hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="transition hover:text-white">
              <Dribbble size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-16">
          <ul className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/60">
            {['Services', 'Projects', 'Profile', 'Reviews', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <a href="https://digitalheroesco.com">Built for Digital Heroes Training Task</a>
        </div>
      </div>
    </footer>
  );
}
