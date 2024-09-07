"use client"

import * as React from "react"
import {useEffect, useState} from "react"
import {MyBarChart} from "@/app/charts/components/MyBarChart"
import {
    getAverageGeneral,
    getAverageSalaryRange,
    getSortedSliced,
} from "@/lib/utils"
import MyPieChart from "@/app/charts/components/MyPieChart"
import {makeData} from "@/lib/procesaData";



export default function Charts() {
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

    return (
        <div className={'mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 p-10'}>
            <MyBarChart name={"Profesiones"} data={getSortedSliced(data.profesiones)}/>
            <MyBarChart name={"Tecnologias"} data={getSortedSliced(data.tecnologias)}/>
            <MyBarChart name={"Campos"} data={getSortedSliced(data.campos)}/>
            <MyBarChart name={"Modalidades"} data={getSortedSliced(data.modalidades)}/>
            <MyBarChart name={"Salarios (USD)"} description={"Rangos de salarios mas comunes"}
                        footerText={`Rango promedio de salarios: ${getAverageSalaryRange(data.salaryRanges)}`}
                        data={getSortedSliced(data.salaryRanges)}/>
            <MyBarChart name={"Experiencia"} footerText={`El promedio de experiencia solicitado es: ${getAverageGeneral(data.experiencias)}`}
                        data={getSortedSliced(data.experiencias)}/>
            <MyBarChart name={"Paises"} data={getSortedSliced(data.paises)}/>
            <MyBarChart name={"Empleadores"} data={getSortedSliced(data.empleadores)}/>
            <MyPieChart data={Object.entries(data.idiomas)} name={'Idiomas'}/>
        </div>
    )
}