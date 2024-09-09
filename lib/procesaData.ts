import data from "@/lib/data.json";
import {dataType, frameworkLanguage, tecnoCampo} from "@/lib/utils";

export async function makeData() {
    const profesiones: Record<string, number> = {}
    const tecnologias: Record<string, number> = {}
    const campos: Record<string, number> = {}
    const modalidades: Record<string, number> = {}
    const salaryRanges: Record<string, number> = {}
    const experiencias: Record<string, number> = {}
    const paises: Record<string, number> = {}
    const empleadores: Record<string, number> = {}
    const idiomas: Record<string, number> = {}
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
            if (item["Modalidad de Trabajo"] === 'Remoto') {
                if (modalidades['Remoto']) {
                    modalidades['Remoto']++
                } else {
                    modalidades['Remoto'] = 1
                }
            } else {
                if (modalidades['Presencial']) {
                    modalidades['Presencial']++
                } else {
                    modalidades['Presencial'] = 1
                }
            }
        }

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
        }
    )
        return {
            profesiones,
            tecnologias,
            campos,
            modalidades,
            salaryRanges,
            experiencias,
            paises,
            empleadores,
            idiomas
        }
    }
