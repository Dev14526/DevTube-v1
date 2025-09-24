import { PlaySquare } from "lucide-react";

export const Shorts = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-background">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="w-32 h-32 bg-gradient-shorts rounded-2xl flex items-center justify-center mb-8">
          <PlaySquare className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-4">No Shorts Available</h2>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          DevTube Shorts will appear here once creators start uploading vertical videos under 60 seconds. 
          Perfect for quick coding tips, tech demos, and developer insights.
        </p>
      </div>
    </div>
  );
};