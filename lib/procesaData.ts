import data from "@/lib/data.json";
import {dataType, frameworkLanguage, tecnoCampo} from "@/lib/utils";

export async function makeData() {
    const profesionesIndex: Record<string, Set<number>> = {}
    const tecnologiasIndex: Record<string, Set<number>> = {}
    const camposIndex: Record<string, Set<number>> = {}
    const modalidadesIndex: Record<string, Set<number>> = {}
    const salaryRangesIndex: Record<string, Set<number>> = {}
    const salarysIndex: Record<string, Set<number>> = {}
    const experienciasIndex: Record<string, Set<number>> = {}
    const paisesIndex: Record<string, Set<number>> = {}
    const empleadoresIndex: Record<string, Set<number>> = {}
    const idiomasIndex: Record<string, Set<number>> = {}
    data.forEach((item: dataType, index) => {
        if (item.Profesion) {
            if (profesionesIndex[item.Profesion])
                profesionesIndex[item.Profesion].add(index)
            else
                profesionesIndex[item.Profesion] = new Set([index])
        }
        if (item.Tecnologias) {
            item.Tecnologias.forEach((tecnologia: string) => {
                tecnologia = tecnologia.toLowerCase()
                if (tecnologiasIndex[tecnologia])
                    tecnologiasIndex[tecnologia].add(index)
                else
                    tecnologiasIndex[tecnologia] = new Set([index])

                if (tecnoCampo[tecnologia]) {
                    if (camposIndex[tecnoCampo[tecnologia]])
                        camposIndex[tecnoCampo[tecnologia]].add(index)
                    else
                        camposIndex[tecnoCampo[tecnologia]] = new Set([index])
                }
                if (frameworkLanguage[tecnologia]) {
                    if (tecnologiasIndex[frameworkLanguage[tecnologia]])
                        tecnologiasIndex[frameworkLanguage[tecnologia]].add(index)
                    else
                        tecnologiasIndex[frameworkLanguage[tecnologia]] = new Set([index])
                }
            })
        }
        if (item["Modalidad de Trabajo"]) {
            if (item["Modalidad de Trabajo"] === 'Remoto') {
                if (modalidadesIndex['Remoto'])
                    modalidadesIndex['Remoto'].add(index)
                else
                    modalidadesIndex['Remoto'] = new Set([index])
            } else {
                if (modalidadesIndex['Presencial'])
                    modalidadesIndex['Presencial'].add(index)
                else
                    modalidadesIndex['Presencial'] = new Set([index])

            }
        }

        if (item.Salario) {
            const salario = typeof item.Salario === 'string' ? parseFloat(item.Salario) : item.Salario
            if (!isNaN(salario)) {
                const range = `(${Math.floor(salario / 100) * 100}-${Math.floor(salario / 100) * 100 + 99}) USD`
                if (salaryRangesIndex[range])
                    salaryRangesIndex[range].add(index)
                else
                    salaryRangesIndex[range] = new Set([index])

                if (salarysIndex[salario])
                    salarysIndex[salario.toString()].add(index)
                else
                    salarysIndex[salario.toString()] = new Set([index])

            }
        }
        if (item.Experiencia) {
            const numberXP = typeof item.Experiencia === 'string' ? parseInt(item.Experiencia) : item.Experiencia
            if (!isNaN(numberXP)) {
                if (experienciasIndex[numberXP.toString() + " años"])
                    experienciasIndex[numberXP.toString() + " años"].add(index)
                else
                    experienciasIndex[numberXP.toString() + " años"] = new Set([index])
            }
        }

        if (item.Pais) {
            if (paisesIndex[item.Pais])
                paisesIndex[item.Pais].add(index)
            else
                paisesIndex[item.Pais] = new Set([index])
        }
        if (item.Empleador) {
            if (empleadoresIndex[item.Empleador])
                empleadoresIndex[item.Empleador].add(index)
            else
                empleadoresIndex[item.Empleador] = new Set([index])

        }
        if (item.Idiomas) {
            if (idiomasIndex['Inglés'])
                idiomasIndex['Inglés'].add(index)
            else
                idiomasIndex['Inglés'] = new Set([index])


        } else {
            if (idiomasIndex['Español'])
                idiomasIndex['Español'].add(index)
            else
                idiomasIndex['Español'] = new Set([index])
        }
    })
    return {
        profesionesIndex,
        tecnologiasIndex,
        camposIndex,
        modalidadesIndex,
        salaryRangesIndex,
        experienciasIndex,
        paisesIndex,
        empleadoresIndex,
        idiomasIndex,
        salarysIndex,
        total: Object.values(data).length
    }
}