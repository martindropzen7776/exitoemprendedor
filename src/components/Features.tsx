import React from 'react';
import { CheckCircle, Zap, Target, Clock, DollarSign, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Resultados Inmediatos',
    description: 'Empieza a vender en menos de 24 horas con nuestras páginas optimizadas'
  },
  {
    icon: Target,
    title: 'Conversión Garantizada',
    description: 'Templates probados con tasas de conversión de hasta 23%'
  },
  {
    icon: Clock,
    title: 'Ahorra 100+ Horas',
    description: 'Olvídate de diseñar y programar. Todo está listo para usar'
  },
  {
    icon: DollarSign,
    title: 'ROI Comprobado',
    description: 'Nuestros clientes recuperan su inversión en la primera semana'
  },
  {
    icon: Shield,
    title: 'Sin Riesgo',
    description: 'Garantía de devolución de 30 días sin preguntas'
  },
  {
    icon: CheckCircle,
    title: 'Soporte Premium',
    description: 'Asistencia personalizada 24/7 para maximizar tus resultados'
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            ¿Por Qué Elegir Nuestro Pack?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a miles de emprendedores que están generando ventas consistentes con nuestras landing pages probadas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-purple-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}