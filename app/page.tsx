"use client"

import MyHome from "@/app/components/MyHome";
import {useEffect, useState} from "react";
import {makeData} from "@/lib/procesaData";
import {getSortedSliced} from "@/lib/utils";
import * as React from "react";
import Profesiones from "@/app/components/Profesiones";

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
        <div className={'p-8'}>

            <MyHome/>
            <Profesiones profesiones={data.profesiones}/>

        </div>

    );
}