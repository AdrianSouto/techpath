import * as React from "react";
import More from "@/app/components/More";
import {getSortedSliced} from "@/lib/utils";
import {useState} from "react";
import {Search} from "lucide-react";
import {dataEnum} from "@/app/components/Personalizado";

type Props = {
    title: string
    filter: [string, number][];
    setFilter: (value: (((prevState: [string, number][]) => [string, number][]) | [string, number][])) => void;
    data: Record<string, number>;
    mainCampo: dataEnum
    campo: dataEnum
    setMainCampo: React.Dispatch<React.SetStateAction<dataEnum>>
}

export default function SectionGeneral({
                                           title,
                                           filter,
                                           setFilter,
                                           data,
                                           mainCampo,
                                           campo,
                                           setMainCampo
                                       }: Props) {
    const [searchText, setSearchText] = useState('')
    const [showMore, setShowMore] = useState(false)
    return <div className={'flex flex-col p-5 mt-5 space-y-3 '}>
        <div className={'flex justify-between'}>
            <div className={'flex space-x-5 items-center'}>
                <h2 className={' font-bold text-xl '}>{title}</h2>
                <div
                    className={`rounded-full size-5 border-2 border-tuatara-900 hover:cursor-pointer hover:border-4 transition-all ${campo === mainCampo && 'border-8'}`}
                    onClick={() => setMainCampo(campo)}
                />
            </div>
            {showMore || <div className={"relative"}>
                <input
                    className={"flex font-semibold text-sm justify-center items-center border-tuatara-950 py-1 px-4 bg-white rounded-full border-2 pr-10"}
                    placeholder={"Buscar"}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Search className={"absolute right-3 top-1/2 transform -translate-y-1/2"}/>
            </div>}
        </div>

        {showMore ?
            <More filter={filter} setFilter={setFilter} setShowMore={setShowMore} data={data}/>
            :
            <div className={"flex flex-col space-y-4 items-center"}>
                <div className={"grid grid-cols-5 gap-5"}>
                    {
                        getSortedSliced(data, 20).map(([name, cantidad], index) => {
                            return (
                                name.match(new RegExp(searchText, 'i')) &&
                                <div
                                    key={index}
                                    onClick={() => {
                                        if (!filter.some(([filteredName]) => filteredName === name)) {
                                            setFilter([...filter, [name, cantidad]]);
                                        } else {
                                            setFilter(filter.filter(([filteredName]) => filteredName !== name));
                                        }
                                    }}
                                    className={`flex items-center rounded-lg px-4 hover:cursor-pointer ${filter.some(([filteredName]) => filteredName === name) && "border-2 border-green-700"}`}
                                >
                                    <h1 className={"font-extrabold"}>{index + 1}</h1>
                                    <div className={"flex flex-col ms-5"}>
                                        <h2 className={"text-sm font-bold uppercase"}>{name}</h2>
                                        <p className={"text-sm"}>{cantidad} anuncios</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <button onClick={() => setShowMore(true)}
                        className={"w-1/2 font-bold border-tuatara-950 py-2 px-4 bg-white rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-950 hover:text-tuatara-100 transition-all hover:scale-105"}>
                    Ver más
                </button>
            </div>

        }
    </div>;
}