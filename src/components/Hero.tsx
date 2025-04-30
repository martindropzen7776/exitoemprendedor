import React from 'react';
import { Laptop, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold mb-8 animate-bounce">
          ¡OFERTA ESPECIAL - HOY SOLAMENTE!
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 p-4 rounded-full">
            <Laptop size={48} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ¿QUIERES EMPEZAR A VENDER<br />
          PRODUCTOS DIGITALES Y NO SABES QUÉ?
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 animate-pulse">
          +300 PÁGINAS LISTAS PARA GENERAR VENTAS
        </p>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl mb-8">
            <span className="font-bold text-yellow-300">¿Cansado de perder tiempo y dinero</span> buscando productos para vender? 
            Nuestro pack premium de landing pages y productos PLR está <span className="underline decoration-yellow-300">diseñado para que empieces a vender HOY MISMO</span>, 
            sin crear nada desde cero.
          </p>
          
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-xl mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform"></div>
            <span className="relative">ASEGURA TU PACK CON 50% OFF</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform relative" />
          </a>
          
          <div className="bg-white/10 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Lo que obtienes HOY:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                'Diseños Probados y Optimizados',
                'Templates que Convierten al 23%',
                'Soporte Premium 24/7',
                'Actualizaciones de por Vida',
                'Garantía de 7 Días',
                'Bonus Exclusivos ($297 valor)'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-300 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-sm text-white/80">
            <span className="font-bold text-yellow-300">1,387 emprendedores</span> ya están generando ventas con nuestras plantillas
          </div>
        </div>
      </div>
    </div>
  );
}