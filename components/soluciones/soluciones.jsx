import workflowLogo from '../../images/soluciones/WorkflowLogo.svg';
import jornalYaLogo from '../../images/soluciones/JornalYaLogo.svg';
import signBoxLogo from '../../images/soluciones/SignBoxLogo.svg';
import background from '../../images/solutionsbackground.webp'
import Image from "next/image";

export default function Soluciones() {
    return (
        <>
        <div class={`w-full bg-[#4a50fd] mt-10 columns-1  justify-center py-4 mt-[-20px]`}>
        <h1 className="text-center text-2xl tracking-tight font-thin text-white sm:text-3xl md:text-4xl">
        Conoce nuestras soluciones
        </h1>
            <div class="flex flex-col md:flex-row  justify-center mt-4 ">
            <Image src={jornalYaLogo} alt="JornalYa" class="mr-6" />
            <Image src={signBoxLogo} alt="SignBox" class="mr-6"/>
            <Image src={workflowLogo} alt="WorkFlow" class="mr-6" />
            </div>
        </div>
        </>
    )
}