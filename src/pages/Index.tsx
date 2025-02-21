
import React, { useState } from 'react';
import { Brain, Coins, Users, GamepadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const features = [
    {
      icon: <Brain />,
      title: "AI-Native Gaming",
      description: "Experience immersive gameplay with intelligent AI agents that evolve and adapt to your actions."
    },
    {
      icon: <Users />,
      title: "Social AI Agents",
      description: "Interact with NPCs powered by advanced AI, creating unique and dynamic social experiences."
    },
    {
      icon: <GamepadIcon />,
      title: "Open Platform",
      description: "Build and customize your own AI-powered games on our open-source platform."
    },
    {
      icon: <Coins />,
      title: "TAOGIMON Token",
      description: "Power the ecosystem's economy with our native cryptocurrency for seamless transactions."
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Digimon Engine
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            The Future of AI-Native Gaming
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => setIsWaitlistOpen(true)}
          >
            Join Waitlist
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Token Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">TAOGIMON Token</h2>
          <p className="text-xl text-gray-300 mb-8">
            The native cryptocurrency powering the next generation of AI gaming experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-primary mb-2">Gaming</h3>
              <p>Purchase in-game assets and unlock premium features</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-primary mb-2">AI Agents</h3>
              <p>Compensate AI agents for their services and interactions</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-primary mb-2">Governance</h3>
              <p>Participate in platform decisions and earn rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join?</h2>
          <Button 
            className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6"
            onClick={() => setIsWaitlistOpen(true)}
          >
      {/* Footer */}
      <Footer />

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default Index;
