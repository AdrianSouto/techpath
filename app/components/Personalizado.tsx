import {MyBarChart} from "@/app/charts/components/MyBarChart";
import * as React from "react";
import {useEffect, useState} from "react";
import {dataType, mySort} from "@/lib/utils";
import SectionGeneral from "@/app/components/SectionGeneral";
import json from "@/lib/data.json";

export enum DataEnum {
    profesiones = 'Profesion',
    tecnologias = 'Tecnologias',
    campos = 'Campos',
    modalidades = 'Modalidad de Trabajo',
    salaryRanges = 'Salario',
    experiencias = 'Experiencia',
    paises = 'Pais',
    empleadores = 'Empleador',
    idiomas = 'Idiomas'
}

type Props = {
    data: {
        profesiones: Record<string, number>
        tecnologias: Record<string, number>
        campos: Record<string, number>
        modalidades: Record<string, number>
        salaryRanges: Record<string, number>
        experiencias: Record<string, number>
        paises: Record<string, number>
        empleadores: Record<string, number>
        idiomas: Record<string, number>
    }
}


export default function Personalizado({data}: Props) {
    const [mainCampo, setMainCampo] = useState(DataEnum.profesiones)
    const [filterGeneral, setFilterGeneral] = useState<[string, number][]>([])

    const [filterProfesiones, setFilterProfesiones] = useState<[string, number][]>([])
    const [filterTecnologias, setFilterTecnologias] = useState<[string, number][]>([])
    const [filterCampos, setFilterCampos] = useState<[string, number][]>([])
    const [filterModalidades, setFilterModalidades] = useState<[string, number][]>([])
    const [filterSalaryRanges, setFilterSalaryRanges] = useState<[string, number][]>([])
    const [filterExperiencias, setFilterExperiencias] = useState<[string, number][]>([])
    const [filterPaises, setFilterPaises] = useState<[string, number][]>([])
    const [filterEmpleadores, setFilterEmpleadores] = useState<[string, number][]>([])
    const [filterIdiomas, setFilterIdiomas] = useState<[string, number][]>([])
    const mapper = {
        [DataEnum.profesiones]: filterProfesiones,
        [DataEnum.tecnologias]: filterTecnologias,
        [DataEnum.campos]: filterCampos,
        [DataEnum.modalidades]: filterModalidades,
        [DataEnum.salaryRanges]: filterSalaryRanges,
        [DataEnum.experiencias]: filterExperiencias,
        [DataEnum.paises]: filterPaises,
        [DataEnum.empleadores]: filterEmpleadores,
        [DataEnum.idiomas]: filterIdiomas
    }
    useEffect(() => {
        setFilterGeneral(mapper[mainCampo])
        setFilterCampos(mapper[mainCampo])
    }, [mainCampo, mapper])


    useEffect(() => {

            filterGeneral.forEach(([mainKey,], mainIndex) => {
                const salaryRanges: Record<string, number> = {}
                const experiencias: Record<string, number> = {}
                const paises: Record<string, number> = {}
                const empleadores: Record<string, number> = {}
                const idiomas: Record<string, number> = {}
                let count = 0;
                json.forEach((item: dataType) => {
                        const isOk: boolean[] = [false, false]
                        if (item.Profesion) {
                            if (mainCampo !== DataEnum.profesiones) {
                                let x = false
                                filterProfesiones.forEach(([key,]) => {
                                    if (item.Profesion?.toLowerCase() === key.toLowerCase()) {
                                        x = true
                                    }
                                })
                                isOk[0] = x
                            } else {
                                if (item.Profesion?.toLowerCase() === mainKey.toLowerCase()) {
                                    isOk[0] = true
                                }else{
                                    isOk[0] = false
                                }

                            }
                        }
                        if (item.Tecnologias) {
                            if (mainCampo !== DataEnum.tecnologias) {
                                let x = false
                                item.Tecnologias.forEach((tecnologia: string) => {
                                    tecnologia = tecnologia.toLowerCase()
                                    filterTecnologias.forEach(([key,]) => {
                                        if (tecnologia === key.toLowerCase()) {
                                            x = true
                                        }
                                    })
                                })
                                isOk[1] = x
                            } else {
                                if (item.Tecnologias.some((tecnologia) => tecnologia.toLowerCase() === mainKey.toLowerCase())) {
                                    isOk[1] = true
                                }else{
                                    isOk[0] = false
                                }
                            }
                        }
                        /*if (item["Modalidad de Trabajo"]) {
                            if(mainCampo !== DataEnum.modalidades){
                                let x = false
                                filterModalidades.forEach(([key,]) => {
                                    if (item["Modalidad de Trabajo"]?.toLowerCase() === key.toLowerCase()) {
                                        x = true
                                    }
                                })
                                isOk[2] = x
                            }

                        }*/

                        if (item.Salario) {
                            const salario = typeof item.Salario === 'string' ? parseFloat(item.Salario) : item.Salario
                            if (salario !== null && !isNaN(salario)) {
                                const range = `(${Math.floor(salario / 100) * 100}-${Math.floor(salario / 100) * 100 + 99}) USD`
                                if (salaryRanges[range]) {
                                    salaryRanges[range]++
                                } else {
                                    salaryRanges[range] = 1
                                }
                            }
                        }
                        if (item.Experiencia) {
                            const numberXP = typeof item.Experiencia === 'string' ? parseInt(item.Experiencia) : item.Experiencia
                            if (!isNaN(numberXP))
                                if (experiencias[numberXP.toString() + " años"])
                                    experiencias[numberXP.toString() + " años"]++
                                else
                                    experiencias[numberXP.toString() + " años"] = 1

                        }

                        if (item.Pais) {
                            if (paises[item.Pais]) {
                                paises[item.Pais]++
                            } else {
                                paises[item.Pais] = 1
                            }
                        }
                        if (item.Empleador) {
                            if (empleadores[item.Empleador]) {
                                empleadores[item.Empleador]++
                            } else {
                                empleadores[item.Empleador] = 1
                            }
                        }
                        if (item.Idiomas) {
                            if (idiomas['Inglés']) {
                                idiomas['Inglés']++
                            } else {
                                idiomas['Inglés'] = 1
                            }
                        } else {
                            if (idiomas['Español']) {
                                idiomas['Español']++
                            } else {
                                idiomas['Español'] = 1
                            }
                        }
                        let x = true
                        isOk.forEach((bool) => {
                            if (!bool) {
                                x = false
                            }
                        })
                        if (x) {
                            count++
                        }
                        console.log(count)
                        const temp = [...filterGeneral]
                        temp[mainIndex][1] = count;
                        setFilterGeneral(temp)
                    }
                )

            });
        }
        ,
        [filterTecnologias, filterProfesiones]
    )
    /*filterGeneral.forEach(([key,], index) => {
        let filteredItems: dataType[] = json.filter((item: dataType) => {
            return (
                (
                    item.Profesion?.toLowerCase() === key.toLowerCase() ||
                    item.Tecnologias?.some((tecnologia) => tecnologia.toLowerCase() === key.toLowerCase())
                )
            )
        });
        Object.entries(mapper).forEach(([key, value]) => {
            if (key !== mainCampo) {
                value.forEach(([filterKey,]) => {
                    filteredItems = filteredItems.filter((item: dataType) => {
                        return (
                            (
                                item.Profesion?.toLowerCase() === filterKey.toLowerCase() ||
                                item.Tecnologias?.some((tecnologia) => tecnologia.toLowerCase() === filterKey.toLowerCase())
                            )
                        )
                    })
                })
            }
        })
        console.log(filteredItems)
        const temp = [...filterGeneral]
        temp[index][1] = filteredItems.length;
        setFilterGeneral(temp)

    });*/


    return (
        <section>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-col w-1/3 text-pretty'}>
                    <h1 className={'font-bold text-3xl'}>Grafico Personalizado</h1>
                    <p>Seleccione la información que desee conocer y la pondremos a su disposición</p>
                </div>
                <SectionGeneral title={"Profesiones"} filter={filterProfesiones}
                                setFilter={setFilterProfesiones}
                                data={data.profesiones} mainCampo={mainCampo} campo={DataEnum.profesiones}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Tecnologias"} filter={filterTecnologias}
                                setFilter={setFilterTecnologias}
                                data={data.tecnologias} mainCampo={mainCampo} campo={DataEnum.tecnologias}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Rangos de Salario"} filter={filterSalaryRanges}
                                setFilter={setFilterSalaryRanges}
                                data={data.salaryRanges} mainCampo={mainCampo} campo={DataEnum.salaryRanges}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Modalidades"} filter={filterModalidades}
                                setFilter={setFilterModalidades}
                                data={data.modalidades} mainCampo={mainCampo} campo={DataEnum.modalidades}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Experiencias"} filter={filterExperiencias}
                                setFilter={setFilterExperiencias}
                                data={data.experiencias} mainCampo={mainCampo} campo={DataEnum.experiencias}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Paises"} filter={filterPaises} setFilter={setFilterPaises}
                                data={data.paises} mainCampo={mainCampo} campo={DataEnum.paises}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Empleadores"} filter={filterEmpleadores}
                                setFilter={setFilterEmpleadores}
                                data={data.empleadores} mainCampo={mainCampo} campo={DataEnum.empleadores}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Idiomas"} filter={filterIdiomas} setFilter={setFilterIdiomas}
                                data={data.idiomas} mainCampo={mainCampo} campo={DataEnum.idiomas}
                                setMainCampo={setMainCampo}/>

                <MyBarChart name={'General'} description={'Grafico generado a partir de los filtros anteriores'}
                            data={mySort(filterGeneral)}/>
            </div>
        </section>
    )
}