"use client"

import MyHome from "@/app/components/MyHome";
import {useEffect, useState} from "react";
import {makeData} from "@/lib/procesaData";
import * as React from "react";
import DataShow from "@/app/components/DataShow";
import Personalizado from "@/app/components/Personalizado";

enum DataType{
    porciento = 'porciento',
    cantidad = 'cantidad'
}

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
        salarysIndex: {}
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
        <div className={'p-8 flex flex-col space-y-56'}>
            <MyHome/>
            <DataShow title={"Profesiones"} subtitle={"más solicitadas"}
                      description={"Como podemos observar el campo de la programación es el mas solicitado en el sector tecnológico a día de hoy"}
                      data={dataCount.profesiones}/>

            <DataShow title={"Tecnologías"} subtitle={"más demandadas"}
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

            <Personalizado dataIndex={dataIndex} dataCount={dataCount}/>
        </div>

    );
}