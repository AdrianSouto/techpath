"use client"

import * as React from "react";
import {ArrowLeft} from "lucide-react";
import {getSortedSliced} from "@/lib/utils";

type Props = {
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>
    data: Record<string, number>,
    filter: [string, number][],
    setFilter: React.Dispatch<React.SetStateAction<[string, number][]>>
}
export default function More({setShowMore, data, filter, setFilter}: Props) {
    const sortedProfesiones = getSortedSliced(data, 50)
    return (
        <section className={'mt-20 w-[90svw] '}>
            <div className={'flex items-center justify-between w-full px-10'}>
                <button
                    onClick={() => setShowMore(false)}
                    className={'flex font-bold justify-center items-center border-tuatara-950 py-2 px-4 bg-white rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-950 hover:text-tuatara-100 transition-all hover:scale-105'}>
                    <ArrowLeft size={24} className={'mr-2'}/>
                    Ir atrás
                </button>
                <h1 className={'ms-10 font-bold uppercase absolute end-1/2 border-b-2 border-blue-600'}>TOP {sortedProfesiones.length}</h1>
                <h2 className={'ms-10 font-semibold text-green-700'}>Seleccionados: {filter.length} </h2>
            </div>

            <div className={'flex justify-center mt-5'}>
                <div className={'grid grid-cols-5 gap-5 '}>
                    {
                        sortedProfesiones.map(([name, cantidad], index) => {
                            return (
                                <div key={index}
                                     onClick={() => {
                                         if (!filter.some(([filteredName]) => filteredName === name)) {
                                             setFilter([...filter, [name, cantidad]]);
                                         }else {
                                                setFilter(filter.filter(([filteredName]) => filteredName !== name))

                                         }
                                     }}
                                     className={`flex items-center rounded-lg px-4 hover:cursor-pointer
                                        ${filter.some(([filteredName]) => filteredName === name) && 'border-2 border-green-700'}
                                     `}>
                                    <h1 className={'font-extrabold'}>{index + 1}</h1>
                                    <div className={'flex flex-col ms-5'}>
                                        <h2 className={' text-sm font-bold uppercase'}>{name}</h2>
                                        <p className={' text-sm'}>{cantidad} anuncios</p>
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