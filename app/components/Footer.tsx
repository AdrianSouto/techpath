import Link from "next/link";
import {ArrowRight, Code, Instagram} from "lucide-react";
import Image from "next/image";
import TelegramIcon from "@/public/telegram.svg";
import * as React from "react";

export default function Footer(){
    return (
        <footer className={'flex bg-tuatara-900 text-tuatara-50 h-svh p-20 m-0 relative'}>
            <div className={'lg:w-2/3 w-full flex flex-col justify-between'}>
                <div className={'flex flex-col w-full lg:w-1/2 text-pretty space-y-3'}>
                    <h1 className={'font-bold text-3xl'}>¿Aún no encuentra lo que buscaba?</h1>
                    <p>Visite nuestra sección de grafico personalizado, y cree el suyo propio con los
                        datos que necesite</p>
                    <Link href="/charts#personalizado">
                        <button
                            className="flex space-x-3 font-bold justify-center items-center border-tuatara-950 py-2 px-4 bg-tuatara-950 rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-100 hover:text-tuatara-950 transition-all ">
                            <span>Ir a gráfico personalizado</span>
                            <ArrowRight/>
                        </button>
                    </Link>
                </div>
                <div className={'flex flex-col w-full lg:w-1/2 text-pretty space-y-3'}>
                    <h1 className={'font-bold text-xl'}>Visite nuestras redes sociales:</h1>
                    <div className={'flex space-x-6'}>
                        <Link
                            href={'https://www.instagram.com/tech_path_information?igsh=MXN5YjlkdnI2a2dnOA=='}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={'flex space-x-3 border-2 rounded-sm w-fit px-3 py-1 font-semibold hover:cursor-pointer hover:bg-tuatara-700'}>
                            <p>Instagram</p>
                            <Instagram/>
                        </Link>

                        <Link
                            href={'https://t.me/TechPathInformation'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={'flex space-x-3 border-2 rounded-sm w-fit px-3 py-1 font-semibold hover:cursor-pointer hover:bg-tuatara-700'}>
                            <p>Telegram</p>
                            <Image src={TelegramIcon} alt={'Icono de telegram'} color={'#F7F7F7'}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'h-full invisible lg:visible flex flex-col justify-center items-center'}>
                <Code width={300} height={300} color={"#e5e5e2"}/>
                <h1 className={"font-semibold text-3xl"}>TECH PATH</h1>
            </div>

        </footer>
    )
}