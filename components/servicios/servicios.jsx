import boxTablet from '../../images/services/boxtablet.webp'

import IconOne from '../../images/services/network.svg'
import IconTwo from '../../images/services/analytics.svg'
import IconThree from '../../images/services/ux.svg'
import IconFour from '../../images/services/cloud-computing.svg'
import IconFive from '../../images/services/puzzle.svg'
import IconSix from '../../images/services/responsive-webpage.svg'
import IconSeven from '../../images/services/magnifying-glass.svg'
import IconEight from '../../images/services/workflow.svg'
import IconNine from '../../images/services/engranaje.svg'
import Encontra from '../../images/services/encontra.svg'
import Optimiza from '../../images/services/optimiza.svg'

import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function Servicios() {
    return (
        <>

            <div class="container mx-auto mt-10 columns-1 lg:columns-2 ">
                <div class="columns-2  md:columns-3 justify-center content-center ">

                    <div class="flex flex-col justify-items-center place-items-center">
                        <Image src={IconOne} alt=" " />
                        <p class="text-center mt-6">Integrable</p>
                    </div>

                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconTwo} alt=" " />
                        <p class="text-center mt-6">Reportes</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconThree} alt=" " />
                        <p class="text-center mt-6">Ux Design</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconFour} alt=" " />
                        <p class="text-center mt-6">Webservice</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconFive} alt=" " />
                        <p class="text-center mt-6">Customizable</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconSix} alt=" " />
                        <p class="text-center mt-6">Multidispositivo</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconSeven} alt=" " />
                        <p class="text-center mt-6">Busqueda Avanzada</p>
                    </div>
                    <div class="flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconEight} alt=" " />
                        <p class="text-center mt-6">Workflow</p>
                    </div>
                    <div class="flex hidden md:flex flex-col justify-items-center place-items-center mt-8">
                        <Image src={IconNine} alt=" " />
                        <p class="text-center mt-6">Configurable</p>
                    </div>


                </div>
                <div>
                    <Image src={boxTablet} alt=" " className={styles.services} />
                </div>
            </div>

            <div class="w-full bg-[#f4f6fa] h-150 mt-10 md:h-200 ">

        <div class="m-auto container columns-1 md:columns-2  ">
                <div class="flex">
                    <Image src={Encontra} class="inline-block" height={250} width={250} alt=" "/>
                    <div class="">
                        <h3 class=" text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Encontrá
                        </h3>
                        <p style={{width:"70%"}}>
                            Toda la información de manera efectiva con este gestor y repositorio de documentos.
                        </p>
                    </div>
                </div>

                <div class="flex">
                    <Image src={Optimiza} class="inline-block" height={250} width={250} alt=" "/>
                    <div class="">
                        <h3 class=" text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Optimizá
                </h3>
                        <p  style={{width:"80%"}}>
                            Optimizá procesos, reducí costos y mantené tu información segura.
                </p>
                    </div>
                </div>
        </div>
            </div>
        </>
    )
}