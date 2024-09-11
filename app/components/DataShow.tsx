import {MyBarChart} from "@/app/charts/components/MyBarChart";
import * as React from "react";
import {useState} from "react";
import More from "@/app/components/More";
import MyPieChart from "@/app/charts/components/MyPieChart";
import {mySort} from "@/lib/utils";


type Props = {
    title: string,
    subtitle: string,
    description: string,
    data: [string, number][]
    chartType?: string
}

export default function DataShow({title, subtitle, description, data, chartType = 'bar'}: Props) {
    const sortedProfesiones = data.sort(([, a], [, b]) => b - a)
    const [showMore, setShowMore] = useState(false)
    const [filter , setFilter] = useState<[string, number][]>([])
    return (
        <section>

            <div className={'flex lg:flex-row flex-col'}>
                <div className={'flex flex-col lg:w-1/2 w-full'}>
                    <div className={'flex flex-col lg:w-2/3 w-full text-pretty'}>
                        <h1 className={'font-bold text-3xl'}>{title} <span
                            className={'text-tuatara-500'}>{subtitle}</span>
                        </h1>
                        <p>{description}</p>
                    </div>
                    {showMore ?
                        <More filter={filter} setFilter={setFilter} setShowMore={setShowMore} data={data}/>
                        :
                        <div className={'flex flex-col justify-center items-center space-y-4 mt-10'}>
                            {
                                sortedProfesiones.slice(0, 3).map(([name, cantidad], index) => {
                                    return (
                                        <div key={index}
                                             className={'flex justify-between items-center w-2/3 lg:w-1/2 rounded-lg py-2 px-4 bg-white shadow'}>
                                            <h1 className={'font-extrabold'}>{index + 1}</h1>
                                            <h2 className={'font-bold'}>{name}</h2>
                                            <span
                                                className={'font-light text-sm border-2 border-blue-600 p-1 rounded-full size-8 text-center'}>{cantidad}</span>
                                        </div>
                                    )
                                })
                            }
                            <button onClick={() => setShowMore(true)}
                                    className={'flex font-bold justify-center items-center w-1/2 border-tuatara-950 py-2 px-4 bg-white rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-950 hover:text-tuatara-100 transition-all hover:scale-105'}>
                                Ver más
                            </button>
                        </div>}
                </div>
                {showMore ||
                    <div className={'lg:w-1/2 w-full lg:mt-0 mt-10'}>
                        {
                            chartType === 'bar' &&
                            (<MyBarChart name={title} description={title + " " + subtitle}
                                        data={filter.length !== 0? mySort(filter)  : sortedProfesiones.slice(0, 10)}/>)
                        }
                        {
                            chartType === 'pie' &&
                            (<MyPieChart name={title} description={title + " " + subtitle}
                                        data={filter.length !== 0? mySort(filter) : sortedProfesiones.slice(0, 10)}/>
                            )
                        }
                    </div>
                }
            </div>


        </section>
    )
}