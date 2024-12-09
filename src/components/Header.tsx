import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl gradient-text">YourBrand</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;