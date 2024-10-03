import {Check} from "lucide-react";

type Props = {
    checked: boolean
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MyCheckBox({checked, setChecked}: Props) {
    return (
        <div
            className={`relative transition-all rounded-sm border-green-900 border-2 size-5 hover:cursor-pointer ${checked && 'bg-green-900'}`}
            onClick={() => {
                setChecked(!checked)

            }}>
            {
                checked &&
                    <Check className={'text-green-100 size-3/4 absolute top-0.5 start-0.5'}/>

            }
        </div>
    )
}