import { VideoCard } from "@/components/VideoCard";
import { TrendingUp, Flame, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import thumbCoding from "@/assets/thumb-coding.jpg";
import thumbTravel from "@/assets/thumb-travel.jpg";
import thumbCooking from "@/assets/thumb-cooking.jpg";
import thumbGaming from "@/assets/thumb-gaming.jpg";

const trendingVideos = [
  {
    title: "This AI Tool Will Replace Programmers (No Clickbait)",
    creator: "FutureTech",
    views: "4.2M",
    duration: "16:43",
    thumbnail: thumbCoding,
    uploadTime: "12 hours ago",
  },
  {
    title: "I Traveled to the Most DANGEROUS Place on Earth",
    creator: "ExtremeAdventures",
    views: "8.7M",
    duration: "24:18",
    thumbnail: thumbTravel,
    uploadTime: "1 day ago",
  },
  {
    title: "Gordon Ramsay Tries My Cooking (He Was SHOCKED)",
    creator: "HomeCook",
    views: "12.4M",
    duration: "19:55",
    thumbnail: thumbCooking,
    uploadTime: "6 hours ago",
  },
];

const gamingTrending = [
  {
    title: "New Game Breaks the Internet | First Look Gameplay",
    creator: "GameCentral",
    views: "6.1M",
    duration: "32:12",
    thumbnail: thumbGaming,
    uploadTime: "4 hours ago",
  },
  {
    title: "I Built the Ultimate Gaming Room for $50,000",
    creator: "SetupKing",
    views: "3.8M",
    duration: "21:34",
    thumbnail: thumbGaming,
    uploadTime: "2 days ago",
  },
];

const musicTrending = [
  {
    title: "Behind the Scenes: Making My New Song",
    creator: "MusicMaker",
    views: "2.9M",
    duration: "14:27",
    thumbnail: thumbCoding,
    uploadTime: "8 hours ago",
  },
];

export const Trending = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Trending</h1>
            <p className="text-muted-foreground">What's hot right now</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Flame className="w-4 h-4" />
            All
          </TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="top" className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            Top
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              Trending Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trendingVideos.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gaming" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Gaming Trending</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gamingTrending.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Music Trending</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {musicTrending.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="top" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Top Videos This Week
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trendingVideos.slice(0, 2).map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};