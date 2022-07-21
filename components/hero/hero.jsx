/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from '../navbar/navbar';
import heroImage from '../../images/HeroImage.png'
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
     
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight text-[#4a50fd] sm:text-3xl md:text-4xl">
              Más que un repositorio,
              </h1>
              <h1 className="text-4xl tracking-tight text-[#4a50fd] sm:text-5xl md:text-6xl">
               UN BUSCADOR INTELIGENTE
               </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
               Sorprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Solicitar Cotizacion
                  </a>
                </div>

              </div>
            </div>
          </main>
        </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image src={heroImage} className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  )
}