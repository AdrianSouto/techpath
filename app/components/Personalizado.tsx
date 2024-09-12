import {MyBarChart} from "@/app/charts/components/MyBarChart";
import * as React from "react";
import {useEffect, useState} from "react";
import {mySort} from "@/lib/utils";
import SectionGeneral from "@/app/components/SectionGeneral";

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
    }
}


export default function Personalizado({dataIndex, dataCount}: Props) {
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
        [DataEnum.idiomas]: dataIndex.idiomasIndex
    }

    useEffect(() => {
        const temp: [string, number][] = []
        mapperFilter[mainCampo].forEach(([key,]) => {
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

            temp.push([key, interseccion.size])

        })
        setFilterGeneral(temp)
    }, [mainCampo, filterProfesiones, filterTecnologias, filterCampos, filterModalidades, filterSalaryRanges, filterExperiencias, filterPaises, filterEmpleadores, filterIdiomas]);


    return (
        <section>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-col w-full lg:w-1/3 text-pretty'}>
                    <h1 className={'font-bold text-3xl'}>Grafico Personalizado</h1>
                    <p>Seleccione la información que desee conocer y la pondremos a su disposición</p>
                </div>
                <div className={'w-full lg:p-28'}>
                    <MyBarChart name={'General'} description={'Grafico generado a partir de los filtros anteriores'}
                                data={mySort(filterGeneral)}/>

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