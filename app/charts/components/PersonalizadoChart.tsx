import {Bar, BarChart, XAxis, YAxis} from "recharts"
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {getRandomColor, getSortedSliced} from "@/lib/utils";
import {useState} from "react";

export const description = "A mixed bar chart"

type Props = {
    name: string,
    description?: string,
    footerText?: string,
    data: [string, number][],
    className?: string
    dataTypeName: string
}

export function PersonalizadoChart(props: Props) {
    const [slice, setSlice] = useState(10)
    const data = getSortedSliced(props.data, slice)
    const chartData: {
        name: string,
        cantidad: number,
        fill: string
    }[] = data.map(([name, cantidad]) => (
        {
            name: name,
            cantidad: cantidad,
            fill: getRandomColor()
        }
    ));
    const chartConfig: ChartConfig = {};
    chartData.forEach(item => {
        chartConfig[item.name] = {
            label: item.name,
            color: item.fill
        };
    });

    return (
        <div className={' lg:h-fit'}>
            <Card className={'flex-col flex h-fit'}>
                <CardHeader className={'relative'}>
                    <CardTitle>{props.name}</CardTitle>
                    <CardDescription>{props.description || `${props.name} mas usadas`} </CardDescription>
                    <div  className={'absolute right-4 top-4 flex space-x-3'}>
                        <h2 className={'text-sm font-bold'}>Mostrar TOP: </h2>
                        <input className={'w-20 '} value={slice} type={"number"} onChange={(e) => setSlice(parseFloat(e.target.value))}/>
                    </div>
                </CardHeader>
                <CardContent className={'h-fit w-full'}>
                    <ChartContainer config={chartConfig} className={'size-full'}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            layout="vertical"
                            margin={{
                                left: 0,
                            }}
                        >
                            <YAxis
                                dataKey="name"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                width={100}  // Aumentar el espacio del texto del eje Y
                                axisLine={false}
                                tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label || value}
                            />
                            <XAxis dataKey="cantidad" type="number"/>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel/>}
                            />
                            <Bar dataKey="cantidad" name={props.dataTypeName} layout="vertical" radius={5}/>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <CardDescription>{props.footerText}</CardDescription>

                </CardFooter>
            </Card>
        </div>


    )
}