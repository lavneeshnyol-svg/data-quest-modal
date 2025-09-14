import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, User, Building2 } from "lucide-react";

interface NavigationProps {
  onExploreExperts: () => void;
  userType: "Customer" | "Expert";
  onUserTypeChange: (type: "Customer" | "Expert") => void;
}

export function Navigation({ onExploreExperts, userType, onUserTypeChange }: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TI</span>
            </div>
            <span className="text-xl font-bold text-foreground">TIAI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Solutions</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Industries</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">About Us</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Insights</a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* User Type Switcher */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2"
              >
                {userType === "Customer" ? <Building2 className="w-4 h-4" /> : <User className="w-4 h-4" />}
                <span>{userType}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border shadow-elegant rounded-lg overflow-hidden">
                  <button
                    onClick={() => {
                      onUserTypeChange("Customer");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Customer</span>
                    {userType === "Customer" && <Badge variant="secondary" className="ml-auto">Active</Badge>}
                  </button>
                  <button
                    onClick={() => {
                      onUserTypeChange("Expert");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <User className="w-4 h-4" />
                    <span>Expert</span>
                    {userType === "Expert" && <Badge variant="secondary" className="ml-auto">Active</Badge>}
                  </button>
                </div>
              )}
            </div>

            {/* Login Button */}
            <Button variant="outline" size="sm">
              Login
            </Button>

            {/* Explore Experts Button */}
            <Button 
              onClick={onExploreExperts}
              className="bg-gradient-primary hover:shadow-glow transition-smooth"
              size="sm"
            >
              Explore Experts
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}