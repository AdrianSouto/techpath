"use client"

import * as React from "react"
import {useEffect, useState} from "react"
import {MyBarChart} from "@/app/charts/components/MyBarChart"
import {
    getAverageGeneral, getAverageSalary,
    getAverageSalaryRange,
    getSortedSliced,
} from "@/lib/utils"
import MyPieChart from "@/app/charts/components/MyPieChart"
import {makeData} from "@/lib/procesaData";


export default function Charts() {
    const [data, setData] = useState({
        profesionesIndex: {},
        tecnologiasIndex: {},
        camposIndex: {},
        modalidadesIndex: {},
        salaryRangesIndex: {},
        experienciasIndex: {},
        paisesIndex: {},
        empleadoresIndex: {},
        idiomasIndex: {},
        total: 0
    })

    useEffect(() => {
        async function fetchData() {
            const result = await makeData()
            setData(result)
        }

        fetchData()
    }, [])
    const profesiones: [string, number][] = Object.entries<Set<number>>(data.profesionesIndex).map(([name, set]) => [name, set.size])
    const tecnologias: [string, number][] = Object.entries<Set<number>>(data.tecnologiasIndex).map(([name, set]) => [name, set.size])
    const campos: [string, number][] = Object.entries<Set<number>>(data.camposIndex).map(([name, set]) => [name, set.size])
    const modalidades: [string, number][] = Object.entries<Set<number>>(data.modalidadesIndex).map(([name, set]) => [name, set.size])
    const salaryRanges: [string, number][] = Object.entries<Set<number>>(data.salaryRangesIndex).map(([name, set]) => [name, set.size])
    const experiencias: [string, number][] = Object.entries<Set<number>>(data.experienciasIndex).map(([name, set]) => [name, set.size])
    const paises: [string, number][] = Object.entries<Set<number>>(data.paisesIndex).map(([name, set]) => [name, set.size])
    const empleadores: [string, number][] = Object.entries<Set<number>>(data.empleadoresIndex).map(([name, set]) => [name, set.size])
    const idiomas: [string, number][] = Object.entries<Set<number>>(data.idiomasIndex).map(([name, set]) => [name, set.size])

    const salarioTec: [string, number][] = Object.entries<Set<number>>(data.tecnologiasIndex).filter(([,q])=>q.size > 50).map(([nameTec, setTec]) => {
            const tecSal: [string, number][] = Object.entries<Set<number>>(data.salaryRangesIndex).map(([name, set]) => [name, set.intersection(setTec).size]);
            return [nameTec, getAverageSalary(tecSal)];
    })

    console.log(salarioTec)

    return (
        <div className={'mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 p-10'}>
            <MyBarChart name={"Profesiones"} description={'Profesiones más solicitadas'}
                        data={getSortedSliced(profesiones)}/>
            <MyBarChart name={"Tecnologías"} description={'Tecnologias más demandadas'}
                        data={getSortedSliced(tecnologias)}/>
            <MyBarChart name={"Campos más requeridos"} data={getSortedSliced(campos)}/>
            <MyPieChart name={"Modalidades más solicitadas"} data={getSortedSliced(modalidades)}/>
            <MyBarChart name={"Salarios (USD)"} description={"Rangos de salarios más comunes"}
                        footerText={`Rango promedio de salarios: ${getAverageSalaryRange(salaryRanges)}`}
                        data={getSortedSliced(salaryRanges)}/>
            <MyBarChart name={"Experiencia"} description={"Años de experiecia más solcitados"}
                        footerText={`El promedio de experiencia solicitado es: ${getAverageGeneral(experiencias)}`}
                        data={getSortedSliced(experiencias)}/>
            <MyBarChart name={"Paises"} description={'Paises que más solicitan'} data={getSortedSliced(paises)}/>
            <MyBarChart name={"Empleadores"} description={'Empresas que más solicitan'}
                        data={getSortedSliced(empleadores)}/>
            <MyPieChart data={idiomas} description={'idiomas más demandados'} name={'idiomas'}/>

            <MyBarChart name={'Salarios por tecnologia'} description={'Salarios promedios por tecnologia'}
                        data={getSortedSliced(salarioTec)} dataType={'promedio: '}/>
        </div>
    )
}