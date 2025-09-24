import { ShortsPlayer } from "@/components/ShortsPlayer";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import thumbCoding from "@/assets/thumb-coding.jpg";
import thumbTravel from "@/assets/thumb-travel.jpg";
import thumbCooking from "@/assets/thumb-cooking.jpg";
import thumbGaming from "@/assets/thumb-gaming.jpg";

const shortsData = [
  {
    id: "1",
    title: "60 second coding tips that will blow your mind! #coding #programming",
    creator: "QuickCode",
    likes: "12.3K",
    comments: "892",
    thumbnail: thumbCoding,
  },
  {
    id: "2",
    title: "This view took my breath away 😍 #travel #mountains #nature",
    creator: "AdventureSeeker",
    likes: "25.7K",
    comments: "1.2K",
    thumbnail: thumbTravel,
  },
  {
    id: "3",
    title: "Making the perfect pasta in 30 seconds! #cooking #pasta #foodhack",
    creator: "FastFood",
    likes: "18.9K",
    comments: "654",
    thumbnail: thumbCooking,
  },
  {
    id: "4",
    title: "When your gaming setup costs more than your car 💀 #gaming #setup",
    creator: "GamerLife",
    likes: "34.1K",
    comments: "2.1K",
    thumbnail: thumbGaming,
  },
];

export const Shorts = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % shortsData.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + shortsData.length) % shortsData.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Shorts Player */}
      <div className="shorts-container h-full">
        <ShortsPlayer video={shortsData[currentVideo]} />
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <Button
          variant="ghost"
          size="lg"
          onClick={prevVideo}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
        
        <div className="flex flex-col gap-2">
          {shortsData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-8 rounded-full transition-all ${
                index === currentVideo
                  ? "bg-primary"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="lg"
          onClick={nextVideo}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>

      {/* Swipe Instructions */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
        Swipe up/down or use arrows to navigate
      </div>
    </div>
  );
};