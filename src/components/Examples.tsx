import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const examples = [
  {
    title: 'Landing Page Ventas',
    description: 'Template optimizado para venta de productos digitales',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg'
  },
  {
    title: 'Landing Servicios',
    description: 'Diseño profesional para servicios premium',
    image: 'https://images.pexels.com/photos/5076521/pexels-photo-5076521.jpeg'
  },
  {
    title: 'Landing Webinar',
    description: 'Optimizada para registro de eventos online',
    image: 'https://images.pexels.com/photos/5076522/pexels-photo-5076522.jpeg'
  }
];

export default function Examples() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExample = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ejemplos de Nuestras Landing Pages
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={examples[currentIndex].image}
              alt={examples[currentIndex].title}
              className="w-full aspect-video object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {examples[currentIndex].title}
              </h3>
              <p className="text-white/90">
                {examples[currentIndex].description}
              </p>
            </div>
            
            <button
              onClick={prevExample}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextExample}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {examples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}