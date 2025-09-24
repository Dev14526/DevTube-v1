import { VideoCard } from "@/components/VideoCard";
import thumbCoding from "@/assets/thumb-coding.jpg";
import thumbTravel from "@/assets/thumb-travel.jpg";
import thumbCooking from "@/assets/thumb-cooking.jpg";
import thumbGaming from "@/assets/thumb-gaming.jpg";

const sampleVideos = [
  {
    title: "Full Stack Development Tutorial: Building a Modern Web App",
    creator: "CodeMaster",
    views: "1.2M",
    duration: "28:45",
    thumbnail: thumbCoding,
    uploadTime: "2 days ago",
  },
  {
    title: "Epic Mountain Adventure: Hiking the Swiss Alps",
    creator: "WanderLust",
    views: "892K",
    duration: "15:32",
    thumbnail: thumbTravel,
    uploadTime: "1 week ago",
  },
  {
    title: "Perfect Homemade Pizza Recipe | Step by Step Guide",
    creator: "ChefLife",
    views: "2.4M",
    duration: "12:18",
    thumbnail: thumbCooking,
    uploadTime: "3 days ago",
  },
  {
    title: "INSANE Gaming Setup Tour 2024 | RGB Overload",
    creator: "TechGamer",
    views: "567K",
    duration: "18:05",
    thumbnail: thumbGaming,
    uploadTime: "5 days ago",
  },
  {
    title: "Learning React in 2024: Complete Beginner's Guide",
    creator: "DevTutorials",
    views: "834K",
    duration: "35:12",
    thumbnail: thumbCoding,
    uploadTime: "1 day ago",
  },
  {
    title: "Sunrise Time-lapse from Mount Everest Base Camp",
    creator: "NatureFilms",
    views: "3.1M",
    duration: "8:45",
    thumbnail: thumbTravel,
    uploadTime: "4 days ago",
  },
  {
    title: "5-Minute Chocolate Cake Recipe That Actually Works",
    creator: "QuickBites",
    views: "1.8M",
    duration: "6:23",
    thumbnail: thumbCooking,
    uploadTime: "2 days ago",
  },
  {
    title: "NEW GPU Benchmarks: RTX 4090 vs RTX 4080",
    creator: "TechReviews",
    views: "945K",
    duration: "22:17",
    thumbnail: thumbGaming,
    uploadTime: "6 days ago",
  },
];

export const Home = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Recommended</h1>
        <p className="text-muted-foreground">Videos we think you'll enjoy</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};