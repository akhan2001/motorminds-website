"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

interface VideoModalProps {
  children: React.ReactNode
  videoSrc: string
}

export function VideoModal({ children, videoSrc }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black border-none">
        <DialogTitle className="sr-only">
          Motorminds Demo Video
        </DialogTitle>
        <video
          controls
          autoPlay
          className="w-full h-full rounded-lg"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  )
} 