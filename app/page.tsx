"use client"

import MyHome from "@/app/components/MyHome";
import {useEffect, useState} from "react";
import {makeData} from "@/lib/procesaData";
import * as React from "react";
import DataShow from "@/app/components/DataShow";

export default function Main() {
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
        <div className={'p-8 flex flex-col space-y-56'}>
            <MyHome/>
            <DataShow title={"Profesiones"} subtitle={"más solicitadas"}
                      description={"Como podemos observar el campo de la programación es el mas solicitado en el sector tecnológico a día de hoy"}
                      data={data.profesiones}/>

            <DataShow title={"Tecnologías"} subtitle={"más demandadas"}
                      description={"En el ámbito de las tecnologías, las correspondientes al desarrollo web tienen una mayor demanda"}
                      data={data.tecnologias}/>

            <DataShow title={"Campos"} subtitle={"más demandados"}
                      description={"Estos datos reflejan lo visto anteriormente, que ya permitían hacer una predicción bastante de por donde se mueve este sector mayormente"}
                      data={data.campos}/>

            <DataShow title={"Modalidades de trabajo"} subtitle={"más comunes"}
                      description={"En el ámbito de las tecnologías, las correspondientes al desarrollo web tienen una mayor demanda"}
                      data={data.modalidades} chartType={'pie'}/>

            <DataShow title={"Rangos de salarios"} subtitle={"más comunes"}
                      description={"El sector tecnológico es un sector muy bien remunerado con salarios que alcanzan hasta los 4mil usd en nuestro país"}
                      data={data.salaryRanges}/>

            <DataShow title={"Experiencia"} subtitle={"más solicitada"}
                      description={"La experiencia es un factor muy importante en el sector tecnológico, como podemos observar la mayoría de las ofertas requieren entre 2 y 5 años de experiencia"}
                      data={data.experiencias}/>


        </div>

    );
}