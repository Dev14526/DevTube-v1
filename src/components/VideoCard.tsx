import { Play, MoreVertical, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  creator: string;
  views: string;
  duration: string;
  thumbnail: string;
  uploadTime: string;
  isShorts?: boolean;
}

export const VideoCard = ({
  title,
  creator,
  views,
  duration,
  thumbnail,
  uploadTime,
  isShorts = false
}: VideoCardProps) => {
  return (
    <Card className="video-card bg-card border-border overflow-hidden cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
            <Play className="w-8 h-8 text-white" />
          </Button>
        </div>

        {/* Shorts Badge */}
        {isShorts && (
          <div className="absolute top-2 left-2 bg-gradient-shorts text-white text-xs font-semibold px-2 py-1 rounded-full">
            SHORTS
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        <div className="flex gap-3">
          {/* Creator Avatar */}
          <div className="w-9 h-9 bg-creator-badge rounded-full flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {creator.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Video Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-card-foreground">
              {title}
            </h3>
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="hover:text-foreground cursor-pointer">{creator}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{views} views</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{uploadTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* More Options */}
          <Button variant="ghost" size="sm" className="flex-shrink-0">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};