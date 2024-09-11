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
    const mapperData = {
        [DataEnum.profesiones]: dataCount.profesiones,
        [DataEnum.tecnologias]: dataCount.tecnologias,
        [DataEnum.campos]: dataCount.campos,
        [DataEnum.modalidades]: dataCount.modalidades,
        [DataEnum.salaryRanges]: dataCount.salaryRanges,
        [DataEnum.experiencias]: dataCount.experiencias,
        [DataEnum.paises]: dataCount.paises,
        [DataEnum.empleadores]: dataCount.empleadores,
        [DataEnum.idiomas]: dataCount.idiomas
    }

    useEffect(() => {
        const temp: [string, number][] = []
        mapperFilter[mainCampo].forEach(([key,]) => {
            let count = mapperIndex[mainCampo][key].size;
            mapperIndex[mainCampo][key].forEach((index) => {

                if (filterTecnologias.length > 0 && mainCampo !== DataEnum.tecnologias) {
                    if (count === mapperIndex[mainCampo][key].size) count = 0
                    let tecnologiaSet = new Set<number>
                    filterTecnologias.forEach(([tecnologia,]) => {
                        tecnologiaSet = tecnologiaSet.union(dataIndex.tecnologiasIndex[tecnologia])
                    })
                    if (tecnologiaSet.has(index)) count++
                }
                if (filterProfesiones.length > 0 && mainCampo !== DataEnum.profesiones) {
                    if (count === mapperIndex[mainCampo][key].size) count = 0
                    let profesionSet = new Set<number>
                    filterProfesiones.forEach(([profesion,]) => {
                        profesionSet = profesionSet.union(dataIndex.profesionesIndex[profesion])
                    })
                    if (profesionSet.has(index)) count++
                }


            })
            temp.push([key, count])

        })
        setFilterGeneral(temp)
    }, [filterProfesiones, filterTecnologias, mainCampo]);


    return (
        <section>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-col w-1/3 text-pretty'}>
                    <h1 className={'font-bold text-3xl'}>Grafico Personalizado</h1>
                    <p>Seleccione la información que desee conocer y la pondremos a su disposición</p>
                </div>
                <SectionGeneral title={"Profesiones"} filter={filterProfesiones}
                                setFilter={setFilterProfesiones}
                                data={dataCount.profesiones} mainCampo={mainCampo} campo={DataEnum.profesiones}
                                setMainCampo={setMainCampo}/>
                <SectionGeneral title={"Tecnologias"} filter={filterTecnologias}
                                setFilter={setFilterTecnologias}
                                data={dataCount.tecnologias} mainCampo={mainCampo} campo={DataEnum.tecnologias}
                                setMainCampo={setMainCampo}/>
                {/*<SectionGeneral title={"Rangos de Salario"} filter={filterSalaryRanges}
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
                                setMainCampo={setMainCampo}/>*/}

                <MyBarChart name={'General'} description={'Grafico generado a partir de los filtros anteriores'}
                            data={mySort(filterGeneral)}/>
            </div>
        </section>
    )
}