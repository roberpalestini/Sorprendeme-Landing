import logoForm from '../../images/logo_header.svg'
import Image from "next/image";
import arrow from '../../images/contact/icon-material.svg'
import phone from '../../images/contact/material-phone-in-talk.svg'
import celphone from '../../images/contact/material-phonelink-ring.svg'
import mail from '../../images/contact/material-mail-outline.svg'
import flecha from '../../images/arrow.svg'

export default function Form() {
    return (
        <>
            <div class="container mx-auto mt-10 columns-1 ">


                <div class="text-center justify-center mt-10">
                    <Image src={logoForm} />
                    <h1 className="text-center tracking-tight font-normal text-[#2e4765] ">
                        Somos una compañia argentina apasionada por la innovación! Con más de 25 años de experiencia y trayectoria, nuestra unidad de negocio "Software as a Service" revoluciona y simplifica la gestión de tus procesos de negocio a través de  la digitalización.
                    </h1>
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Conocé nuestra empresa Box Custodia <Image src={flecha} /></h2>
                </div>




                <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8  tracking-tight text-gray-900 sm:text-4xl">
          ¿ Cómo podemos ayudarlo ?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Llene el formulario ó contáctese con nuestro asistente comercial.
          </p>
        </div>

        <div className="mt-10">
          
        <div class="container m-auto columns-1 md:columns-2 place-content-center justify-center">
                <div class="flex-col ml-10 ">
                    <p className="contact-p">
                    <Image src={celphone} />
                        (0351) 153 88 32 57
                        </p>
                        <p className="contact-p">
                        <Image src={phone} />
                        (0351) 496 1326 int. 1009
                        </p>

                    <p className="contact-p">
                    <Image src={mail} />
                       <span style={{maxWidth:"10px"}}> comercial@boxcustodia.com </span>
                    </p>
                    <p className="contact-p ">&nbsp;</p>
                    <p className="contact-p hidden md:block"> &nbsp;</p>
                    <p className="contact-p hidden md:block">&nbsp;</p>
                    <p className="contact-p hidden md:block"> &nbsp;</p>
                    <p className="contact-p hidden md:block">&nbsp;</p>
                    <p className="contact-p hidden md:block"> &nbsp;</p>
                    <p className="contact-p hidden md:block">&nbsp;</p>
                    <p className="contact-p hidden md:block"> &nbsp;</p>
                </div>

                <div class="flex-col ">
                    <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mb-2" placeholder="Nombre y Apellido" />
                    <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mb-2" placeholder="Telefono" />
                    <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mb-2" placeholder="Email" />
                    <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mb-2" placeholder="Empresa" />
                    <textarea type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mb-2" placeholder="Mensaje" />
                    <a
                        href="#"
                        className=" mb-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Enviar   <Image src={arrow} />
                </a>
                </div>
            </div>

        </div>
      </div>
    </div>
</div>

    



            



        </>
    )
}