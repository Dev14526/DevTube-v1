import { TrendingUp, Flame, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Flame className="w-16 h-16 text-muted-foreground mb-6" />
            <h3 className="text-xl font-semibold mb-2">No trending videos</h3>
            <p className="text-muted-foreground max-w-md">
              Trending videos will appear here as the developer community grows and shares content.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="gaming" className="space-y-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0016.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43L2.42 16.09c-.15 1.05.27 2.13 1.06 2.87.79.74 1.9 1.04 2.95.78l.7-.17c1.23-.3 2.56.36 2.97 1.48l.27.74c.18.5.65.87 1.18.95.06.01.12.01.18.01.47 0 .93-.19 1.26-.53l.81-.81c.39-.39 1.02-.39 1.41 0l.81.81c.33.34.79.53 1.26.53.06 0 .12 0 .18-.01.53-.08 1-.45 1.18-.95l.27-.74c.41-1.12 1.74-1.78 2.97-1.48l.7.17c1.05.26 2.16-.04 2.95-.78.79-.74 1.21-1.82 1.06-2.87zM9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 3c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No gaming content yet</h3>
            <p className="text-muted-foreground max-w-md">
              Gaming and tech review content will show up here as creators upload videos.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No music content yet</h3>
            <p className="text-muted-foreground max-w-md">
              Music production and audio development content will appear here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="top" className="space-y-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Award className="w-16 h-16 text-muted-foreground mb-6" />
            <h3 className="text-xl font-semibold mb-2">No top videos yet</h3>
            <p className="text-muted-foreground max-w-md">
              The most popular videos from the developer community will be featured here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};