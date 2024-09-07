import {MyBarChart} from "@/app/charts/components/MyBarChart";
import * as React from "react";
import Link from "next/link";


type Props = {
    profesiones: Record<string, number>
}

export default function Profesiones({profesiones}: Props) {
    const profesionesArray = Object.entries(profesiones)
    const sortedProfesiones = profesionesArray.sort(([, a], [, b]) => b - a)

    return (
        <section>

            <div className={'flex mt-10'}>
                <div className={'flex flex-col w-1/2 '}>
                    <div className={'flex flex-col w-2/3 text-pretty'}>
                        <h1 className={'font-bold text-3xl'}>Profesiones <span className={'text-tuatara-500'}>más solicitadas</span>
                        </h1>
                        <p>Como podemos observar el campo de la programación es el mas solicitado en el sector
                            tecnológico a
                            día de hoy</p>
                    </div>
                    <div className={'flex flex-col justify-center items-center space-y-4 mt-10'}>
                        {
                            sortedProfesiones.slice(0, 3).map(([name, cantidad], index) => {
                                return (
                                    <div key={index}
                                         className={'flex justify-between items-center w-1/2 rounded-lg py-2 px-4 bg-white shadow'}>
                                        <h1 className={'font-extrabold'}>{index + 1}</h1>
                                        <h2 className={'font-bold'}>{name}</h2>
                                        <span
                                            className={'font-light text-sm border-2 border-blue-600 p-1 rounded-full size-8 text-center'}>{cantidad}</span>
                                    </div>
                                )
                            })
                        }
                        <Link href={'/more'}
                            className={'flex font-bold justify-center items-center w-1/2 border-tuatara-950 py-2 px-4 bg-white rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-950 hover:text-tuatara-100 transition-all hover:scale-105'}>
                            Ver más
                        </Link>
                    </div>
                </div>
                <div className={'w-1/2'}>
                    <MyBarChart name={"Profesiones"} data={sortedProfesiones.slice(0,10)}/>
                </div>

            </div>


        </section>
    )
}