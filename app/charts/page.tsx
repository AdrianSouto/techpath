"use client"

import * as React from "react"
import data from "@/lib/data.json";
import MyPieChart from "@/app/charts/components/MyPieChart";
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
            if (item.Modalidad) {
                if (modalidades[item.Modalidad]) {
                    modalidades[item.Modalidad]++
                } else {
                    modalidades[item.Modalidad] = 1
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
            if (typeof item.Experiencia === 'number') {
                if (experiencias[item.Experiencia])
                    experiencias[item.Experiencia]++
                else
                    experiencias[item.Experiencia] = 1

            }
        }
    )
        console.log(experiencias)
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
            <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-4 p-10'}>
                <MyPieChart data={topProfesiones}/>
                <MyBarChart name={"Tecnologias"} data={topTecnologias}/>
                <MyBarChart name={"Campos"} data={topCampos}/>
                <MyBarChart name={"Modalidades"} data={topModalidades}/>
                <MyBarChart name={"Salarios"} data={topSalaryRanges}/>
                <MyBarChart name={"Experiencia"} data={topExperiencias}/>
            </div>
        )
    }