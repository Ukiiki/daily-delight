import { Rocket, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Build Something <span className="gradient-text">Amazing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
            Start your project with our beautiful, responsive, and customizable template.
            Perfect for modern web applications.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Rocket}
              title="Lightning Fast"
              description="Built with performance in mind to ensure your application loads quickly."
            />
            <FeatureCard
              icon={Shield}
              title="Secure by Default"
              description="Enterprise-grade security features to keep your data safe."
            />
            <FeatureCard
              icon={Zap}
              title="Easy to Use"
              description="Intuitive interface and components that just work out of the box."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;