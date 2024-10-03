import * as React from "react";
import {useEffect, useState} from "react";
import {mySort} from "@/lib/utils";
import SectionGeneral from "@/app/components/SectionGeneral";
import {PersonalizadoChart} from "@/app/charts/components/PersonalizadoChart";
import MyRadioButton from "@/components/MyRadioButton";
import {MyDropDownMenu} from "@/components/MyDropDownMenu";

export enum DataEnum {
    profesiones = 'Profesion',
    tecnologias = 'Tecnologias',
    campos = 'Campos',
    modalidades = 'Modalidad de Trabajo',
    salaryRanges = 'Rangos de Salario',
    experiencias = 'Experiencia (Años)',
    paises = 'Pais',
    empleadores = 'Empleador',
    idiomas = 'Idiomas',
    salarys = 'Salario (USD)',
}

type Props = {
    dataIndex: {
        profesionesIndex: Record<string, Set<number>>
        tecnologiasIndex: Record<string, Set<number>>
        camposIndex: Record<string, Set<number>>
        modalidadesIndex: Record<string, Set<number>>
        salaryRangesIndex: Record<string, Set<number>>
        experienciasIndex: Record<string, Set<number>>
        paisesIndex: Record<string, Set<number>>
        empleadoresIndex: Record<string, Set<number>>
        idiomasIndex: Record<string, Set<number>>
        salarysIndex: Record<string, Set<number>>
        total: number
    }
    dataCount: {
        profesiones: [string, number][]
        tecnologias: [string, number][]
        campos: [string, number][]
        modalidades: [string, number][]
        salaryRanges: [string, number][]
        experiencias: [string, number][]
        paises: [string, number][]
        empleadores: [string, number][]
        idiomas: [string, number][]
    },
    className?: string
}

enum DataType {
    cantidad = 'Cantidad: ',
    porciento = 'Porciento respecto a eje Y: ',
    porcientoTotal = 'Porciento del Total: ',
}

export default function Personalizado({dataIndex, dataCount, className}: Props) {
    const [mainCampo, setMainCampo] = useState(DataEnum.profesiones)
    const [promedio, setPromedio] = useState("Ninguno")
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
    const mapperFilter = {
        [DataEnum.profesiones]: filterProfesiones as [string, number][],
        [DataEnum.tecnologias]: filterTecnologias as [string, number][],
        [DataEnum.campos]: filterCampos as [string, number][],
        [DataEnum.modalidades]: filterModalidades as [string, number][],
        [DataEnum.salaryRanges]: filterSalaryRanges as [string, number][],
        [DataEnum.experiencias]: filterExperiencias as [string, number][],
        [DataEnum.paises]: filterPaises as [string, number][],
        [DataEnum.empleadores]: filterEmpleadores as [string, number][],
        [DataEnum.idiomas]: filterIdiomas as [string, number][],
        [DataEnum.salarys]: filterIdiomas as [string, number][],
    }
    const mapperIndex = {
        [DataEnum.profesiones]: dataIndex.profesionesIndex,
        [DataEnum.tecnologias]: dataIndex.tecnologiasIndex,
        [DataEnum.campos]: dataIndex.camposIndex,
        [DataEnum.modalidades]: dataIndex.modalidadesIndex,
        [DataEnum.salaryRanges]: dataIndex.salaryRangesIndex,
        [DataEnum.experiencias]: dataIndex.experienciasIndex,
        [DataEnum.paises]: dataIndex.paisesIndex,
        [DataEnum.empleadores]: dataIndex.empleadoresIndex,
        [DataEnum.idiomas]: dataIndex.idiomasIndex,
        [DataEnum.salarys]: dataIndex.salarysIndex
    }
    const [dataType, setDataType] = useState(DataType.cantidad)

    useEffect(() => {
        const temp: [string, number][] = []
        mapperFilter[mainCampo].forEach(([key]) => {
            let profesionSet = new Set<number>
            let tecnologiaSet = new Set<number>
            let campoSet = new Set<number>
            let modalidadSet = new Set<number>
            let salarioSet = new Set<number>
            let experienciaSet = new Set<number>
            let paisSet = new Set<number>
            let empleadorSet = new Set<number>
            let idiomaSet = new Set<number>

            let interseccion = mapperIndex[mainCampo][key]
            if (filterProfesiones.length > 0 && mainCampo !== DataEnum.profesiones) {
                filterProfesiones.forEach(([profesion,]) => {
                    profesionSet = profesionSet.union(dataIndex.profesionesIndex[profesion])
                })
                interseccion = interseccion.intersection(profesionSet)
            }

            if (filterTecnologias.length > 0 && mainCampo !== DataEnum.tecnologias) {
                filterTecnologias.forEach(([tecnologia,]) => {
                    tecnologiaSet = tecnologiaSet.union(dataIndex.tecnologiasIndex[tecnologia])
                })
                interseccion = interseccion.intersection(tecnologiaSet)
            }

            if (filterCampos.length > 0 && mainCampo !== DataEnum.campos) {
                filterCampos.forEach(([campo,]) => {
                    campoSet = campoSet.union(dataIndex.camposIndex[campo])
                })
                interseccion = interseccion.intersection(campoSet)
            }

            if (filterModalidades.length > 0 && mainCampo !== DataEnum.modalidades) {
                filterModalidades.forEach(([modalidad,]) => {
                    modalidadSet = modalidadSet.union(dataIndex.modalidadesIndex[modalidad])
                })
                interseccion = interseccion.intersection(modalidadSet)
            }

            if (filterSalaryRanges.length > 0 && mainCampo !== DataEnum.salaryRanges) {
                filterSalaryRanges.forEach(([salario,]) => {
                    salarioSet = salarioSet.union(dataIndex.salaryRangesIndex[salario])
                })
                interseccion = interseccion.intersection(salarioSet)
                console.log(interseccion)
            }

            if (filterExperiencias.length > 0 && mainCampo !== DataEnum.experiencias) {
                filterExperiencias.forEach(([experiencia,]) => {
                    experienciaSet = experienciaSet.union(dataIndex.experienciasIndex[experiencia])
                })
                interseccion = interseccion.intersection(experienciaSet)
            }

            if (filterPaises.length > 0 && mainCampo !== DataEnum.paises) {
                filterPaises.forEach(([pais,]) => {
                    paisSet = paisSet.union(dataIndex.paisesIndex[pais])
                })
                interseccion = interseccion.intersection(paisSet)
            }

            if (filterEmpleadores.length > 0 && mainCampo !== DataEnum.empleadores) {
                filterEmpleadores.forEach(([empleador,]) => {
                    empleadorSet = empleadorSet.union(dataIndex.empleadoresIndex[empleador])
                })
                interseccion = interseccion.intersection(empleadorSet)
            }

            if (filterIdiomas.length > 0 && mainCampo !== DataEnum.idiomas) {
                filterIdiomas.forEach(([idioma,]) => {
                    idiomaSet = idiomaSet.union(dataIndex.idiomasIndex[idioma])
                })
                interseccion = interseccion.intersection(idiomaSet)
            }
            if (promedio !== "Ninguno") {
                const indexPromedio: DataEnum = Object.values(DataEnum).find((value) => value === promedio) || DataEnum.salaryRanges
                let sum = 0
                let cant = 0
                if (indexPromedio === DataEnum.salarys) {
                    Object.entries(mapperIndex[indexPromedio]).forEach(([salary, set]) => {
                        sum += parseFloat(salary) * set.intersection(interseccion).size
                        cant+= set.intersection(interseccion).size
                    })
                    temp.push([key, sum / cant])

                }
                if (indexPromedio === DataEnum.experiencias) {
                    Object.entries(mapperIndex[indexPromedio]).forEach(([xp, set]) => {
                        sum += parseFloat(xp) * set.intersection(interseccion).size
                        cant+= set.intersection(interseccion).size
                    })
                    temp.push([key, sum / cant])
                }
                console.log(mapperIndex[indexPromedio])
            } else {
                switch (dataType) {
                    case DataType.cantidad:
                        temp.push([key, interseccion.size])
                        break
                    case DataType.porciento:
                        temp.push([key, interseccion.size * 100 / mapperIndex[mainCampo][key].size])
                        break
                    case DataType.porcientoTotal:
                        temp.push([key, interseccion.size * 100 / dataIndex.total])
                        break
                }
            }

        })
        setFilterGeneral(temp)
    }, [promedio, dataType, mainCampo, filterProfesiones, filterTecnologias, filterCampos, filterModalidades, filterSalaryRanges, filterExperiencias, filterPaises, filterEmpleadores, filterIdiomas]);

    return (
        <section className={className}>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-col w-full lg:w-1/3 text-pretty'}>
                    <h1 className={'font-bold text-3xl'}>Grafico Personalizado</h1>
                    <p>Seleccione abajo la información que desee mostrar y la pondremos a su disposición</p>

                </div>
                <div className={'w-full lg:p-10 flex flex-col space-y-4'}>
                    <div>
                        <h1 className={'font-bold'}>Tipo de gráfico:</h1>
                        <div className={'flex space-x-6 flex-wrap'}>

                            {

                                Object.values(DataType).map((name, index) => {
                                    return (
                                        <article key={index} className={'flex space-x-3 items-center'}>
                                            <h2>{name}</h2>
                                            <MyRadioButton className={'size-4'}
                                                           isEnabled={dataType == Object.entries(DataType)[index][1] && promedio === "Ninguno"}
                                                           onClick={() => {
                                                               setDataType(Object.entries(DataType)[index][1] as DataType)
                                                               setPromedio("Ninguno")
                                                           }}/>
                                        </article>
                                    )
                                })
                            }
                            <MyDropDownMenu sectores={["Salario (USD)", "Experiencia (Años)"]}
                                            selected={promedio}
                                            setSelected={setPromedio}>
                                <button className={'border-none outline-none'}>
                                    Ver promedio: {promedio}
                                </button>
                            </MyDropDownMenu>
                        </div>

                    </div>

                    <PersonalizadoChart name={'General'}
                                        description={'Grafico generado a partir de los filtros anteriores'}
                                        data={mySort(filterGeneral)}
                                        dataTypeName={promedio === "Ninguno" ? dataType : promedio + " promedio: "}/>

                </div>

                <SectionGeneral title={"Profesiones"} filter={filterProfesiones}
                                setFilter={setFilterProfesiones}
                                data={dataCount.profesiones} mainCampo={mainCampo} campo={DataEnum.profesiones}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Tecnologias"} filter={filterTecnologias}
                                setFilter={setFilterTecnologias}
                                data={dataCount.tecnologias} mainCampo={mainCampo} campo={DataEnum.tecnologias}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Rangos de Salario"} filter={filterSalaryRanges}
                                setFilter={setFilterSalaryRanges}
                                data={dataCount.salaryRanges} mainCampo={mainCampo} campo={DataEnum.salaryRanges}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Campos"} filter={filterCampos} setFilter={setFilterCampos}
                                data={dataCount.campos} mainCampo={mainCampo} campo={DataEnum.campos}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Modalidades"} filter={filterModalidades}
                                setFilter={setFilterModalidades}
                                data={dataCount.modalidades} mainCampo={mainCampo} campo={DataEnum.modalidades}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Experiencias"} filter={filterExperiencias}
                                setFilter={setFilterExperiencias}
                                data={dataCount.experiencias} mainCampo={mainCampo} campo={DataEnum.experiencias}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Paises"} filter={filterPaises} setFilter={setFilterPaises}
                                data={dataCount.paises} mainCampo={mainCampo} campo={DataEnum.paises}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Empleadores"} filter={filterEmpleadores}
                                setFilter={setFilterEmpleadores}
                                data={dataCount.empleadores} mainCampo={mainCampo} campo={DataEnum.empleadores}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Idiomas"} filter={filterIdiomas} setFilter={setFilterIdiomas}
                                data={dataCount.idiomas} mainCampo={mainCampo} campo={DataEnum.idiomas}
                                setMainCampo={setMainCampo}/>


            </div>
        </section>
    )
}