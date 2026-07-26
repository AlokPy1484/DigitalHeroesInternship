'use client';

import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react"

const videos = [
  {
    id: 1,
    title: 'Brand Showcase',
    src: '/videos/Vertical.mp4',
    poster: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&fit=crop',
    aspect: '9/16'
  },
  {
    id: 2,
    title: 'Creative Process',
    src: '/videos/Horizontal_a.mp4',
    poster: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&fit=crop',
    aspect: '16/9'
  },
  {
    id: 3,
    title: 'Innovation',
    src: '/videos/Horizontal_b.mp4',
    poster: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&fit=crop',
    aspect: '16/9'
  },
  {
    id: 4,
    title: 'Digital Solutions',
    src: '/videos/Horizontal_c.mp4',
    poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&fit=crop',
    aspect: '16/9'
  }
];

export default function ShowcaseGrid() {
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const togglePlay = (e: React.MouseEvent, videoId: number) => {
    e.stopPropagation();
    const videoEl = videoRefs.current.get(videoId);
    if (!videoEl) return;

    if (playingVideos.has(videoId)) {
      videoEl.pause();
      setPlayingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    } else {
      videoEl.play();
      setPlayingVideos(prev => new Set(prev).add(videoId));
    }
  };

  const handleMouseEnter = (videoId: number) => {
    const videoEl = videoRefs.current.get(videoId);
    if (videoEl) videoEl.play();
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };

  const handleMouseLeave = (videoId: number) => {
    const videoEl = videoRefs.current.get(videoId);
    if (videoEl) videoEl.pause();
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };

  const handleVideoEnd = (videoId: number) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };

  const setVideoRef = (el: HTMLVideoElement | null, videoId: number) => {
    if (el) {
      videoRefs.current.set(videoId, el);
    } else {
      videoRefs.current.delete(videoId);
    }
  };


  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
  })

  const translateBlur = useTransform(scrollYProgress, [0, 0.3], [10, 0])

  return (
    <motion.section
      ref={ref}
      style={{ filter: useMotionTemplate`blur(${translateBlur}px)` }}


      className="bg-black px-4 pb-8 md:pb-16">
      <div className="mx-auto max-w-7xl grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#1A2E22] bg-neutral-900 aspect-9/16 md:row-span-2 cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[0].id)}
          onMouseLeave={() => handleMouseLeave(videos[0].id)}>
          {/* Video */}
          <video
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${playingVideos.has(videos[0].id) ? 'grayscale-0' : 'grayscale'}`}
            poster={videos[0].poster}
            muted
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[0].id)}
            ref={(el) => setVideoRef(el, videos[0].id)}
          >
            <source src={videos[0].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 transition-all duration-500 ${playingVideos.has(videos[0].id) ? 'bg-black/0' : 'bg-black/50'}`}></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
          </div>

          {/* Play/Pause Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={(e) => togglePlay(e, videos[0].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234F3A] text-white transition hover:bg-[#3F6B54]"
            >
              {playingVideos.has(videos[0].id) ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>


        <div
          className='
              md:col-span-2 group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#1A2E22] bg-neutral-900 aspect-[16/9] md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[1].id)}
          onMouseLeave={() => handleMouseLeave(videos[1].id)}>
          {/* Video */}
          <video
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${playingVideos.has(videos[1].id) ? 'grayscale-0' : 'grayscale'}`}
            poster={videos[1].poster}
            muted
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[1].id)}
            ref={(el) => setVideoRef(el, videos[1].id)}
          >
            <source src={videos[1].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 transition-all duration-500 ${playingVideos.has(videos[1].id) ? 'bg-black/0' : 'bg-black/50'}`}></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
          </div>

          {/* Play/Pause Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={(e) => togglePlay(e, videos[1].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234F3A] text-white transition hover:bg-[#3F6B54]"
            >
              {playingVideos.has(videos[1].id) ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>



        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#1A2E22] bg-neutral-900 aspect-video md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[2].id)}
          onMouseLeave={() => handleMouseLeave(videos[2].id)}>
          {/* Video */}
          <video
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${playingVideos.has(videos[2].id) ? 'grayscale-0' : 'grayscale'}`}
            poster={videos[2].poster}
            muted
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[2].id)}
            ref={(el) => setVideoRef(el, videos[2].id)}
          >
            <source src={videos[2].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 transition-all duration-500 ${playingVideos.has(videos[2].id) ? 'bg-black/0' : 'bg-black/50'}`}></div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
          </div>

          {/* Play/Pause Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={(e) => togglePlay(e, videos[2].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234F3A] text-white transition hover:bg-[#3F6B54]"
            >
              {playingVideos.has(videos[2].id) ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>
        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#1A2E22] bg-neutral-900 aspect-video md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[3].id)}
          onMouseLeave={() => handleMouseLeave(videos[3].id)}>
          {/* Video */}
          <video
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${playingVideos.has(videos[3].id) ? 'grayscale-0' : 'grayscale'}`}
            poster={videos[3].poster}
            muted
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[3].id)}
            ref={(el) => setVideoRef(el, videos[3].id)}
          >
            <source src={videos[3].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 transition-all duration-500 ${playingVideos.has(videos[3].id) ? 'bg-black/0' : 'bg-black/50'}`}></div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
          </div>

          {/* Play/Pause Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={(e) => togglePlay(e, videos[3].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234F3A] text-white transition hover:bg-[#3F6B54]"
            >
              {playingVideos.has(videos[3].id) ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
