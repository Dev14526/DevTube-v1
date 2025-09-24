import { Heart, MessageCircle, Share, MoreVertical, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ShortsPlayerProps {
  video: {
    id: string;
    title: string;
    creator: string;
    likes: string;
    comments: string;
    thumbnail: string;
  };
}

export const ShortsPlayer = ({ video }: ShortsPlayerProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="shorts-item relative w-full h-screen bg-black flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Video Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-overlay">
        <div className="flex items-end justify-between">
          {/* Video Info */}
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-creator-badge rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {video.creator.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-white font-semibold">{video.creator}</span>
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Follow
              </Button>
            </div>
            <p className="text-white text-sm mb-2">{video.title}</p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{video.likes} likes</span>
              <span>{video.comments} comments</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              variant="ghost"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex flex-col gap-1 text-white"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              <span className="text-xs">{video.likes}</span>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex flex-col gap-1 text-white"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs">{video.comments}</span>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
            >
              <Share className="w-6 h-6" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
            >
              <MoreVertical className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>
    </div>
  );
};