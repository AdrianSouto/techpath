"use client"

import MyHome from "@/app/components/MyHome";
import {useEffect, useState} from "react";
import {makeData} from "@/lib/procesaData";
import * as React from "react";
import DataShow from "@/app/components/DataShow";
import {ArrowRight, Code, Instagram} from "lucide-react";
import Link from "next/link";
import TelegramIcon from '@/public/telegram.svg'
import Image from "next/image";

export default function Main() {
    const [dataIndex, setDataIndex] = useState({
        profesionesIndex: {},
        tecnologiasIndex: {},
        camposIndex: {},
        modalidadesIndex: {},
        salaryRangesIndex: {},
        experienciasIndex: {},
        paisesIndex: {},
        empleadoresIndex: {},
        idiomasIndex: {},
        salarysIndex: {},
        total: 0
    })
    useEffect(() => {
        async function fetchData() {
            const result = await makeData()
            setDataIndex(result)
        }

        fetchData()
    }, [])

    const dataCount = {
        profesiones: Object.entries<Set<number>>(dataIndex.profesionesIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        tecnologias: Object.entries<Set<number>>(dataIndex.tecnologiasIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        campos: Object.entries<Set<number>>(dataIndex.camposIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        modalidades: Object.entries<Set<number>>(dataIndex.modalidadesIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        salaryRanges: Object.entries<Set<number>>(dataIndex.salaryRangesIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        experiencias: Object.entries<Set<number>>(dataIndex.experienciasIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        paises: Object.entries<Set<number>>(dataIndex.paisesIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        empleadores: Object.entries<Set<number>>(dataIndex.empleadoresIndex).map(([name, set]) => [name, set.size]) as [string, number][],
        idiomas: Object.entries<Set<number>>(dataIndex.idiomasIndex).map(([name, set]) => [name, set.size]) as [string, number][],

    }


    return (
        <>
            <div className={'p-8 flex flex-col'}>
                <MyHome/>
                <DataShow title={"Profesiones"} subtitle={"más solicitadas"}
                          description={"Como podemos observar el campo de la programación es el mas solicitado en el sector tecnológico a día de hoy"}
                          data={dataCount.profesiones}/>

                <DataShow id='tecnologias' title={"Tecnologías"} subtitle={"más demandadas"}
                          description={"En el ámbito de las tecnologías, las correspondientes al desarrollo web tienen una mayor demanda"}
                          data={dataCount.tecnologias}/>

                <DataShow title={"Campos"} subtitle={"más demandados"}
                          description={"Estos datos reflejan lo visto anteriormente, que ya permitían hacer una predicción bastante de por donde se mueve este sector mayormente"}
                          data={dataCount.campos}/>

                <DataShow title={"Modalidades de trabajo"} subtitle={"más comunes"}
                          description={"En el ámbito de las tecnologías, las correspondientes al desarrollo web tienen una mayor demanda"}
                          data={dataCount.modalidades} chartType={'pie'}/>

                <DataShow title={"Rangos de salarios"} subtitle={"más comunes"}
                          description={"El sector tecnológico es un sector muy bien remunerado con salarios que alcanzan hasta los 4mil usd en nuestro país"}
                          data={dataCount.salaryRanges}/>

                <DataShow title={"Experiencia"} subtitle={"más solicitada"}
                          description={"La experiencia es un factor muy importante en el sector tecnológico, como podemos observar la mayoría de las ofertas requieren entre 2 y 5 años de experiencia"}
                          data={dataCount.experiencias}/>

                {/*<Personalizado dataIndex={dataIndex} dataCount={dataCount}/>*/}

            </div>
            <footer className={'flex bg-tuatara-900 text-tuatara-50 h-svh p-20 m-0 relative'}>
                <div className={'flex flex-col justify-between'}>
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
                <div className={'h-full flex flex-col justify-center items-center'}>
                    <Code width={300} height={300} color={"#e5e5e2"}/>
                    <h1 className={"font-semibold text-3xl"}>TECH PATH</h1>
                </div>

            </footer>
        </>


    );
}