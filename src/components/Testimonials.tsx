import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Coach de Negocios',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    text: 'Increíble pack de landing pages. Me ayudó a lanzar mi negocio online en tiempo récord. La calidad es excepcional.',
    stars: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Consultor Digital',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    text: 'Las plantillas son muy profesionales y fáciles de personalizar. Mi inversión se recuperó en la primera semana.',
    stars: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Creadora de Contenido',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    text: 'El mejor pack de landing pages que he encontrado. El soporte es excelente y las actualizaciones son muy útiles.',
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Lo Que Dicen Nuestros Clientes
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative">
          <Quote className="absolute text-purple-200 w-24 h-24 -top-6 -left-6 -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex mb-4">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg italic mb-6">{current.text}</p>
              
              <div>
                <h4 className="font-bold text-xl">{current.name}</h4>
                <p className="text-purple-600">{current.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}