"use client"

import * as React from "react"
import data from "@/lib/data.json";
import {MyBarChart} from "@/app/charts/components/MyBarChart";
import {dataType, frameworkLanguage, tecnoCampo} from "@/lib/utils";


export default function Charts() {
    const profesiones: Record<string, number> = {}
    const tecnologias: Record<string, number> = {}
    const campos: Record<string, number> = {}
    const modalidades: Record<string, number> = {}
    const salaryRanges: Record<string, number> = {}
    const experiencias: Record<string, number> = {}

    data.forEach((item: dataType) => {
            if (item.Profesion) {
                if (profesiones[item.Profesion]) {
                    profesiones[item.Profesion]++
                } else {
                    profesiones[item.Profesion] = 1
                }
            }
            if (item.Tecnologias) {
                item.Tecnologias.forEach((tecnologia: string) => {
                    tecnologia = tecnologia.toLowerCase()
                    if (tecnologias[tecnologia]) {
                        tecnologias[tecnologia]++
                    } else {
                        tecnologias[tecnologia] = 1
                    }
                    if (tecnoCampo[tecnologia]) {
                        if (campos[tecnoCampo[tecnologia]]) {
                            campos[tecnoCampo[tecnologia]]++
                        } else {
                            campos[tecnoCampo[tecnologia]] = 1
                        }
                    }
                    if (frameworkLanguage[tecnologia]) {
                        if (tecnologias[frameworkLanguage[tecnologia]]) {
                            tecnologias[frameworkLanguage[tecnologia]]++
                        } else {
                            tecnologias[frameworkLanguage[tecnologia]] = 1
                        }
                    }
                })
            }
            if (item["Modalidad de Trabajo"]) {
                if (modalidades[item["Modalidad de Trabajo"]]) {
                    modalidades[item["Modalidad de Trabajo"]]++
                } else {
                    modalidades[item["Modalidad de Trabajo"]] = 1
                }
            }
            if (item.Salario) {
                const salario = typeof item.Salario === 'string' ? parseFloat(item.Salario) : item.Salario;
                if (salario !== null && !isNaN(salario)) {
                    const range = `${Math.floor(salario / 100) * 100}-${Math.floor(salario / 100) * 100 + 99}`;
                    if (salaryRanges[range]) {
                        salaryRanges[range]++
                    } else {
                        salaryRanges[range] = 1
                    }
                }
            }
            if (item.Experiencia) {
                const numberXP = typeof item.Experiencia === 'string' ? parseInt(item.Experiencia) : item.Experiencia;
                if (!isNaN(numberXP))
                    if (experiencias[numberXP.toString()])
                        experiencias[numberXP.toString()]++
                    else
                        experiencias[numberXP.toString()] = 1

            }
        }
    )
    console.log(modalidades)
    const topProfesiones = Object.entries(profesiones)
        .slice(0, 10)
        .sort(([, a], [, b]) => b - a)

    const topTecnologias = Object.entries(tecnologias)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)

    const topCampos = Object.entries(campos)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)

    const topModalidades = Object.entries(modalidades)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)

    const topSalaryRanges = Object.entries(salaryRanges)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)

    const topExperiencias = Object.entries(experiencias)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
    return (
        <div className={'mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 p-10'}>
            <MyBarChart name={"Profesiones"} data={topProfesiones}/>
            <MyBarChart name={"Tecnologias"} data={topTecnologias}/>
            <MyBarChart name={"Campos"} data={topCampos}/>
            <MyBarChart name={"Modalidades"} data={topModalidades}/>
            <MyBarChart name={"Salarios (USD)"} description={"Rangos de salarios mas comunes"} data={topSalaryRanges}/>
            <MyBarChart name={"Experiencia"} data={topExperiencias}/>
        </div>
    )
}