import React from 'react';
import { Timer, Shield, Gift, CheckCircle } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    minutes: 29,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 29, seconds: 59 }; // Reset timer when it reaches 0
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 text-3xl font-bold text-red-600">
      <Timer className="w-8 h-8" />
      <span>
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id="pricing" className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto p-8 border-2 border-purple-100">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold mb-6 animate-pulse">
            ¡ÚLTIMA OPORTUNIDAD - PRECIO ESPECIAL!
          </div>
          
          <div className="text-3xl font-bold mb-2">¡50% DE DESCUENTO EXPIRA PRONTO!</div>
          <div className="text-xl text-gray-600 mb-6">Esta oferta termina en:</div>
          
          <div className="mb-8">
            <CountdownTimer />
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl text-gray-500 line-through">Precio Normal</div>
              <div className="text-4xl font-bold text-gray-400">$60 USD</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-green-600 font-bold">Precio HOY</div>
              <div className="text-5xl font-bold text-purple-900">$30 USD</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-4">Lo que otros cobran:</h4>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span>Landing Page Básica</span>
                  <span className="text-gray-500">$200-500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Diseño Personalizado</span>
                  <span className="text-gray-500">$300-800</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Optimización</span>
                  <span className="text-gray-500">$200-400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Soporte Mensual</span>
                  <span className="text-gray-500">$100-200</span>
                </div>
                <div className="border-t-2 border-purple-200 pt-3">
                  <div className="flex items-center justify-between font-bold">
                    <span>Total por página:</span>
                    <span className="text-red-600">$800-1900</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-4">Lo que tú recibes:</h4>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span>300+ Landing Pages</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Diseños Premium</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Optimización CRO</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Soporte de por Vida</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="border-t-2 border-green-200 pt-3">
                  <div className="flex items-center justify-between font-bold">
                    <span>Precio Total:</span>
                    <span className="text-green-600">$30 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="#checkout"
              className="group relative block w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 px-8 rounded-xl text-xl transition-all transform hover:scale-105 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform"></div>
              <span className="relative">
                OBTENER ACCESO AHORA (50% OFF)
              </span>
            </a>
            
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">Garantía de satisfacción de 7 días o te devolvemos tu dinero</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h4 className="font-bold text-xl flex items-center gap-2 justify-center text-purple-600">
              <Gift className="w-6 h-6" />
              Bonos Exclusivos de Tiempo Limitado:
            </h4>
            <div className="space-y-3 text-left">
              {[
                'Pack de 50 Ebooks PLR en Español ($197 valor)',
                'Pack de 25 Ebooks PLR de Marketing Digital ($147 valor)',
                'Pack de 30 Ebooks PLR de Desarrollo Personal ($97 valor)',
                'Guía de Monetización de Productos PLR',
                'Actualizaciones Gratuitas de por Vida'
              ].map((bonus, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}