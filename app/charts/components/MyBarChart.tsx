import {Bar, BarChart, XAxis, YAxis} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
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

export const description = "A mixed bar chart"

type Props = {
    name: string,
    description?: string,
    data: [string, number][]
}

export function MyBarChart(props: Props) {
    const chartData: {
        name: string,
        cantidad: number,
        fill: string
    }[] = props.data.map(([name, cantidad]) => (
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
        <Card className={'flex-col flex h-svh lg:h-fit'}>
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
                        <Bar dataKey="cantidad" layout="vertical" radius={5}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}