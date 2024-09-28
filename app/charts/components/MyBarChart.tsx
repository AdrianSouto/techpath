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
import {getRandomColor} from "@/lib/utils";
import {useEffect, useState} from "react";
import * as React from "react";
import MyRadioButton from "@/components/MyRadioButton";


export enum DataShowType {
    PERCENT = "Porcentaje",
    MOUNT = "Cantidad",
}

type Props = {
    name: string,
    description?: string,
    footerText?: string,
    data: [string, number][],
    className?: string,
    dataType?: string
    dataRecord: Record<string, Set<number>>
    total: number
}

export function MyBarChart(props: Props) {
    const [dataShowType, setDataShowType] = useState<DataShowType>(DataShowType.MOUNT)
    const [chartData, setChartData] = useState<{
        name: string,
        cantidad: number,
        fill: string
    }[]>(props.data.map(([name, cantidad]) => (
        {
            name: name,
            cantidad: dataShowType === DataShowType.MOUNT ? cantidad : (props.dataRecord[name].size * 100) / props.total,
            fill: getRandomColor()
        }
    )));
    useEffect(() => {
        const x = props.data.map(([name, cantidad]) => (
            {
                name: name,
                cantidad: dataShowType === DataShowType.MOUNT ? cantidad : (props.dataRecord[name].size * 100) / props.total,
                fill: getRandomColor()
            }
        ))
        setChartData(x.sort((a, b) => b.cantidad - a.cantidad).slice(0, 10));

    }, [dataShowType]);
    const chartConfig: ChartConfig = {};
    chartData.forEach(item => {
        chartConfig[item.name] = {
            label: item.name,
            color: item.fill
        };
    })
    return (
        <div className={`${props.className ? props.className : 'h-[80vh] lg:h-fit'}`}>
            <Card className={'flex-col flex h-full'}>
                <CardHeader>
                    <CardTitle>{props.name}</CardTitle>
                    <CardDescription>{props.description || `${props.name} mas usadas`} </CardDescription>
                </CardHeader>
                <CardContent className={'size-full'}>
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
                            <XAxis dataKey="cantidad" type="number" hide/>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel/>}
                            />
                            <Bar dataKey="cantidad" name={props.dataType || 'cantidad: '} layout="vertical" radius={5}/>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className={'flex flex-col space-y-3 items-start'}>
                    <CardDescription>{props.footerText}</CardDescription>
                    <div className={'flex space-x-6 flex-wrap'}>

                        {

                            Object.values(DataShowType).map((name, index) => {
                                return (
                                    <article key={index} className={'flex space-x-3 items-center'}>
                                        <h2>{name}</h2>
                                        <MyRadioButton className={'size-4'}
                                                       isEnabled={dataShowType == Object.entries(DataShowType)[index][1]}
                                                       onClick={() => {
                                                           setDataShowType(Object.entries(DataShowType)[index][1] as DataShowType)
                                                       }}/>
                                    </article>
                                )
                            })
                        }
                    </div>

                </CardFooter>
            </Card>
        </div>


    )
}