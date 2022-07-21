import SearchIcon from '../../images/step/SearchIcon.svg'
import StepOne from '../../images/step/Step1.svg'
import StepTwo from '../../images/step/Step2.svg'
import StepThree from '../../images/step/Step3.svg'
import StepFour from '../../images/step/Step4.svg'
import StepFive from '../../images/step/Step5.svg'
import background from '../../images/stepswave-01.png'
import stepper from '../../images/step/Stepper.svg'
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import 'primeflex/primeflex.css';

const Steps = () => {
    return (
        <>


            <div class="container relative h-full block ">
                <div>
                    <div class="flex ">
                        <div className="step columns-5 place-content-center">
                            <div className="p-col p-d-flex">
                                <Image src={StepOne} className="" height={150} />
                                <div className="p-d-block">
                                    <h2>Paso 1</h2>
                                    <p>Relevamiento general de su documentación.</p>
                                </div>
                            </div>
                            <div className="p-col p-d-flex">
                                <Image src={StepTwo} className="" height={150} />
                                <div className="p-d-block">
                                    <h2>Paso 2</h2>
                                    <p className="step-p">Envíe las imágenes digitalizadas de sus documentos.</p>
                                </div>
                            </div>
                            <div className="p-col p-d-flex">
                                <Image src={StepThree} className="" height={150} />
                                <div className="p-d-block">
                                    <h2>Paso 3</h2>
                                    <p>Nosotros procesamos, clasificamos e indexamos las mismas.</p>
                                </div>
                            </div>
                            <div className="p-col p-d-flex">
                                <Image src={StepFour} className="" height={150} />
                                <div className="p-d-block">
                                    <h2>Paso 4 </h2>
                                    <p>Alta digital documental en sistema Sorprendeme.</p>
                                </div>
                            </div>
                            <div className="p-col p-d-flex">
                                <Image src={StepFive} className="absolute inset-0" height={150} />
                                <div className="p-d-block">
                                    <h2>Paso 5</h2>
                                    <p>Consulte digitalmente su documentación.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* 

            <div class="container relative h-screen hidden sm:block ">
                <div class="relative ...">


                    <div class="relative ...">
                        <Image src={SearchIcon} className=""
                        />
                        <div class="absolute left-20">
                            <Image src={StepOne} className="left-20" />
                        </div>
                        <div class="absolute left-40">
                            <Image src={StepTwo} className="" />
                        </div>
                        <div class="absolute left-60">
                            <Image src={StepThree} className="" />
                        </div>

                        <div class="absolute left-80">
                            <Image src={StepFour} className="" />
                        </div>

                        <div class="absolute left-20">
                            <Image src={StepFive} className="absolute inset-0" />
                        </div>

                        <div class="absolute bottom-0 left-0 ...">
                            <Image src={stepper} className=""
                            />
                        </div>
                    </div>

                </div>
                <div class="absolute bottom-0 left-0 ...">
                    <Image src={background} class="h-full w-full" />
                </div>
            </div> */}



        </>
    )
}

export default Steps