"use client"

import * as React from "react";
import {useEffect, useState} from "react";
import {makeData} from "@/lib/procesaData";

export default function Page() {

    const [data, setData] = useState({
        profesiones: {},
        tecnologias: {},
        campos: {},
        modalidades: {},
        salaryRanges: {},
        experiencias: {},
        paises: {},
        empleadores: {},
        idiomas: {}
    })

    useEffect(() => {
        async function fetchData() {
            const result = await makeData()
            setData(result)
        }

        fetchData()
    }, [])
    const profesionesArray = Object.entries(data.profesiones as Record<string, number>)
    const sortedProfesiones = profesionesArray.sort(([, a], [, b]) => b - a)
    return (
        <section className={'mt-20'}>
            <div className={'absolute z-10'}>
                <div className={'grid grid-rows-8 gap-1 grid-flow-col '}>
                    {
                        sortedProfesiones.map(([name, cantidad], index) => {
                            return (
                                <div key={index}
                                     className={`flex items-center rounded-lg ms-5 px-4`}>
                                    <h1 className={'font-extrabold'}>{index + 1}</h1>
                                    <div className={'flex flex-col ms-5'}>
                                        <h2 className={'font-bold'}>{name}</h2>
                                        <span
                                            className={'font-light text-sm '}>{cantidad}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}