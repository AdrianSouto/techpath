"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
    sectores: Array<string>
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    children: React.ReactNode
}

export function MyDropDownMenu({sectores, selected, setSelected, children}: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Selecciona una propiedad</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuRadioGroup value={selected || "Ninguno"} onValueChange={setSelected}>
                    <DropdownMenuRadioItem key={"Ninguno"} value={"Ninguno"}>Ninguno</DropdownMenuRadioItem>
                    {
                        sectores.map((item) => {
                            return <DropdownMenuRadioItem key={item} value={item}>{item}</DropdownMenuRadioItem>
                        })
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
