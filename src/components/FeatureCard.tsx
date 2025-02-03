import React from 'react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-opacity-10 bg-white backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

export default FeatureCard;