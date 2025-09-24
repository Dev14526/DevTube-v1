import { Home } from "@/pages/Home";
import { Shorts } from "@/pages/Shorts";
import { Trending } from "@/pages/Trending";
import { Library } from "@/pages/Library";
import { UploadInterface } from "@/components/UploadInterface";
import { MobileNav } from "@/components/MobileNav";
import { useState } from "react";
import { Search, Upload, Menu, Home as HomeIcon, Compass, PlaySquare, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "trending", icon: Compass, label: "Trending" },
    { id: "shorts", icon: PlaySquare, label: "Shorts" },
    { id: "library", icon: Clock, label: "Library" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "trending":
        return <Trending />;
      case "shorts":
        return <Shorts />;
      case "library":
        return <Library />;
      case "upload":
        return <UploadInterface />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Top Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <PlaySquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">VidStream</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos..."
              className="pl-4 pr-12 bg-secondary border-border focus:ring-primary"
            />
            <Button
              size="sm"
              className="absolute right-0 top-0 h-full bg-secondary hover:bg-hover-accent border-l border-border rounded-l-none"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setCurrentPage("upload")}>
            <Upload className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Hidden on Shorts page */}
        {currentPage !== "shorts" && (
          <nav className="w-64 bg-background border-r border-border p-4 hidden md:block">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "secondary" : "ghost"}
                    className="w-full justify-start gap-3 h-10"
                    onClick={() => setCurrentPage(item.id)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </nav>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-16 md:pb-0">
          {renderPage()}
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Index;
