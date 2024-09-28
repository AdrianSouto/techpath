import {DataEnum} from "@/app/components/Personalizado";
import * as React from "react";

export default function MyRadioButton(props: { isEnabled: boolean, onClick: () => void, className?: string }) {
    return <div
        className={`rounded-full size-5 border-2 border-tuatara-900 hover:cursor-pointer hover:border-4 transition-all ${props.isEnabled && "border-[6px] hover:border-[6px]"} ${props.className}`}
        onClick={props.onClick}
    />;
}