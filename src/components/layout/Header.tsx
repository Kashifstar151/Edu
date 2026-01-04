import { ShoppingCart, Bell, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">E</span>
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:inline-block">
            EduLearn
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses, tests..."
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 hover:border hover:border-primary hover:text-primary transition-all">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -right-0.5 -top-0.5 h-4 w-4 min-w-4 flex items-center justify-center rounded-full p-0 text-[10px] font-bold shadow-sm ring-2 ring-background"
            >
              3
            </Badge>
          </Button>

          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 hover:border hover:border-primary hover:text-primary transition-all">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -right-0.5 -top-0.5 h-4 w-4 min-w-4 flex items-center justify-center rounded-full p-0 text-[10px] font-bold shadow-sm ring-2 ring-background"
              >
                2
              </Badge>
            </Button>
          </Link>

          {/* Profile */}
          <Link to="/profile">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
                <Link to="/courses" className="text-lg font-medium hover:text-primary">
                  Courses
                </Link>
                <Link to="/tests" className="text-lg font-medium hover:text-primary">
                  Tests
                </Link>
                <Link to="/live-classes" className="text-lg font-medium hover:text-primary">
                  Live Classes
                </Link>
                <Link to="/categories" className="text-lg font-medium hover:text-primary">
                  Categories
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="border-t p-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses, tests..."
              className="pl-10 bg-muted/50"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
