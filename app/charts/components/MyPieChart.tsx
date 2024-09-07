import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {Label, Pie, PieChart} from "recharts";
import * as React from "react";
import {getRandomColor} from "@/lib/utils";


const chartConfig = {
    cantidad: {
        label: "Total",
    },
    programador: {
        label: "Programador",
        color: "#264de4",
    },
    designer: {
        label: "Diseñador",
        color: "#68217a",
    },
} satisfies ChartConfig

type Props = {
    name: string,
    description?: string,
    footerText?: string,
    data: [string, number][]
}


export default function MyPieChart(props: Props) {
    const chartData: {
        profesion: string,
        cantidad: number,
        fill: string
    }[] = props.data.map(([profesion, cantidad]) => (
        {
            profesion: profesion,
            cantidad: cantidad,
            fill: getRandomColor()
        }
    ));

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.cantidad, 0)
    }, [chartData])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{props.name}</CardTitle>
                <CardDescription>{props.description || `${props.name} mas usadas`} </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Pie
                            data={chartData}
                            dataKey="cantidad"
                            nameKey="profesion"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <CardDescription>{props.footerText}</CardDescription>
            </CardFooter>
        </Card>
    )
}