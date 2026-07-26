"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "../../components/ui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  time: string
}

let notifications = [
  {
    name: "New Notification",
    description: "Great product, would love to know more",
    time: "15m ago",
    icon: "/insta.png",
  },
  {
    name: "Project Inquiry",
    description: "Hi! Are you available for a new motion design project?",
    time: "10m ago",
    icon: "/insta.png",
  },
  {
    name: "New message",
    description: "How can I place an order for a custom animation?",
    time: "5m ago",
    icon: "/whatsapp.png",
  },
  {
    name: "Payment Received",
    description: "Invoice #1042 has been paid in full.",
    time: "2m ago",
    icon: "/gmail.png",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // glassmorphic background - dark with subtle gradient
        "bg-gradient-to-br from-[#1a1a1a]/90 via-[#1f1f1f]/90 to-[#1a1a1a]/90",
        "backdrop-blur-xl",
        "border border-white/10",
        "[box-shadow:0_8px_32px_0_rgba(0,0,0,0.37)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 p-1">
          <img src={icon} alt={name} className="size-full object-contain" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
    </div>
  )
}
