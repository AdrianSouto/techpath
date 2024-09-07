import laptopImage from '@/public/laptop.png';
import Image from "next/image";

export default function Home() {
  return (
        <main className={'h-svh flex justify-around items-center p-8'}>
            <div className={'flex flex-col space-y-5 -translate-y-16 w-1/3 p-5'}>
                <h1 className={'font-bold text-3xl'}>
                    Infórmate
                </h1>
                <p className={'font-light text-pretty'}>
                    Este sitio tiene el objetivo de informar sobre las <span className={'text-blue-500'}>ofertas laborales</span> en el <span className={'text-blue-500'}>sector tecnológico</span> en Cuba
                </p>
            </div>
            <div className={'w-1/3 flex justify-center items-center'}>
                <Image src={laptopImage} alt={'laptop'} width={400} height={400}/>
            </div>
            <div className={'flex flex-col space-y-5 translate-y-16 w-1/3 p-5'}>
                <h1 className={'font-bold text-3xl'}>
                    Confía
                </h1>
                <p className={'font-light text-pretty'}>
                    Toda la información mostrada proviene de ofertas laborales <span className={'text-blue-500'}>reales</span> para obtener la mayor <span className={'text-blue-500'}>fiabilidad </span>posible
                </p>
            </div>
        </main>
  );
}
