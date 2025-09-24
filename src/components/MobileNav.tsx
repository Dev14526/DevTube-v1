import { Home, Compass, PlaySquare, Clock, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const MobileNav = ({ currentPage, onPageChange }: MobileNavProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "trending", icon: Compass, label: "Trending" },
    { id: "shorts", icon: PlaySquare, label: "Shorts" },
    { id: "library", icon: Clock, label: "Library" },
    { id: "upload", icon: Upload, label: "Upload" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`h-full flex flex-col items-center justify-center gap-1 rounded-none ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => onPageChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};