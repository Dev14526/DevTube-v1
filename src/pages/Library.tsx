import { History, Clock, ThumbsUp, PlaySquare, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const libraryItems = [
  {
    icon: History,
    title: "Watch History",
    count: "0 videos",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    title: "Watch Later",
    count: "0 videos",
    color: "text-yellow-500",
  },
  {
    icon: ThumbsUp,
    title: "Liked Videos",
    count: "0 videos",
    color: "text-green-500",
  },
  {
    icon: PlaySquare,
    title: "Your Videos",
    count: "0 videos",
    color: "text-primary",
  },
  {
    icon: Download,
    title: "Downloads",
    count: "0 videos",
    color: "text-purple-500",
  },
];

export const Library = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Your Library</h1>
        <p className="text-muted-foreground">Your videos, playlists, and watch history</p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {libraryItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="bg-card border-border hover:bg-accent cursor-pointer transition-colors">
              <CardContent className="p-6 text-center">
                <Icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.count}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <History className="w-5 h-5 text-primary" />
          Recently Watched
        </h2>
        <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
          <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No watch history</h3>
          <p className="text-muted-foreground">
            Videos you watch will appear here for easy access later.
          </p>
        </div>
      </div>

      {/* Watch Later Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-500" />
          Watch Later
        </h2>
        <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
          <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No videos saved for later</h3>
          <p className="text-muted-foreground">
            Save videos to watch them later by clicking the "Watch Later" button
          </p>
        </div>
      </div>
    </div>
  );
};