import * as React from "react";
import { ArrowLeft, Search } from "lucide-react";
import { getSortedSliced } from "@/lib/utils";
import {useState} from "react";

type Props = {
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
    data: [string, number][];
    filter: [string, number][];
    setFilter: React.Dispatch<React.SetStateAction<[string, number][]>>;
};

export default function More({ setShowMore, data, filter, setFilter }: Props) {
    const sortedProfesiones = getSortedSliced(data, 50);
    const [searchText, setSearchText] = useState('')
    return (
        <section className={"mt-20 w-[90svw]"}>
            <div className={"flex flex-col lg:flex-row items-center justify-between w-full px-10 space-y-2"}>
                
                <button
                    onClick={() => setShowMore(false)}
                    className={"flex font-bold justify-center items-center border-tuatara-950 py-2 px-4 bg-white rounded-full border-2 hover:cursor-pointer hover:bg-tuatara-950 hover:text-tuatara-100 transition-all hover:scale-105"}
                >
                    <ArrowLeft size={24} className={"mr-2"} />
                    Ir atrás
                </button>
                <h1 className={"lg:ms-10 font-bold uppercase lg:absolute lg:end-1/2 border-b-2 border-blue-600"}>TOP {sortedProfesiones.length}</h1>
                <div className={"flex flex-col space-y-2"}>
                    <h2 className={"ms-10 font-semibold text-green-700"}>Seleccionados: {filter.length} </h2>
                    <div className={"relative"}>
                        <input
                            className={"flex font-semibold text-sm justify-center items-center border-tuatara-950 py-1 px-4 bg-white rounded-full border-2 pr-10"}
                            placeholder={"Buscar"}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Search className={"absolute right-3 top-1/2 transform -translate-y-1/2"} />
                    </div>
                </div>
            </div>

            <div className={"flex justify-center mt-5"}>
                <div className={"grid grid-cols-2 lg:grid-cols-5 gap-5"}>
                    {sortedProfesiones.map(([name, cantidad], index) => {
                        return (
                            name.toLowerCase().includes(searchText) &&
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}