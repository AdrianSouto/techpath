import Image from "next/image";
import TecCuba from '@/app/blog/assets/tecCuba.png'
import StackOverflow from '@/app/blog/assets/stackoverflow.png'
import Pypl from '@/app/blog/assets/pypl.jpg'
import DevJobScanner from '@/app/blog/assets/devjobscanner.png'
import {CircleArrowOutUpRight} from "lucide-react";

export default function Page() {
    return (
        <div className={'mt-20 p-5 justify-start lg:p-10 text-pretty'}>
            <h1 className={'text-center font-bold text-xl'}>“Evolución Tecnológica: Cuba en el Contexto Global de la
                Programación”</h1>
            <p className="mt-10">
                Considero a la tecnología como un pilar esencial en la sociedad actual. Su impacto abarca múltiples
                áreas, desde la innovación y la productividad hasta la creación de empleo y el crecimiento económico.
                Esta ha transformado la forma de vivir y trabajar, facilitando la interconexión de mercados.
            </p>
            <p className="mt-3">
                Los cubanos hemos presenciado como nuestro sector tecnológico ha ganado gran relevancia en los últimos
                años, a pesar de los desafíos históricos que hemos enfrentado. Nuestra economía ha estado marcada por
                restricciones económicas y un acceso limitado a tecnologías avanzadas debido al embargo económico y la
                falta de infraestructura. Sin embargo, el gobierno cubano ha reconocido la importancia de la
                informatización y ha implementado políticas para impulsar el desarrollo tecnológico.
            </p>
            <p className="mt-3">
                En 2021, el estado cubano autorizó la creación de micro, pequeñas y medianas empresas (MIPYMES),
                permitiendo la existencia de empresas privadas en sectores como la tecnología. Entre las primeras
                empresas tecnológicas reconocidas se encuentran Ingenius, Dofleini, Pyxel Solutions, LOMABO Studio y
                Guajiritos. Esto ha permitido a emprendedores y desarrolladores locales explorar nuevas ideas y
                tecnologías, creado oportunidades de empleo y generado un impacto positivo en la economía cubana en
                general.
            </p>

            <p className="mt-3">
                Una de las profesiones que ha mostrado un crecimiento notable en este nuevo ecosistema es la
                programación. Pero, ¿Qué tan alineado esta este sector con las tendencias mundiales? Para entender mejor
                esta comparación, analizamos las 5 tecnologías de la programación más populares tanto en Cuba como a
                nivel global. Nuestro estudio en TechPath revela que en el país las más solicitadas entre las ofertas
                laborales son JavaScript, React, TypeScript, PHP y Python.

            </p>
            <div className={'my-5 text-center flex justify-center'}>
                <article>
                    <Image height={300} width={600} src={TecCuba}
                           alt={'Top 5 tecnologias mas demandadas en ofertas laborales cubanas'}/>
                    <a href={'/#tecnologias'}
                       target={'_blank'}
                       className="mt-3 text-blue-900">Top 5 tecnologías más demandadas en ofertas laborales cubanas
                        <span><CircleArrowOutUpRight className={'inline-block ms-1 -translate-y-1'} height={10}
                                                     width={10}/>
                        </span>
                    </a>
                </article>
            </div>
            <p className="mt-20">
                Por otra parte, analizamos los datos de varias fuentes. Stack Overflow, por ejemplo, realiza encuestas
                anuales a su vasta comunidad de desarrolladores basándose en la popularidad de las tecnologías . En su
                top 5 figuran JavaScript , SQL , HTML y CSS , Python y TypeScript. Usamos también para nuestra
                comparativa DevJobScanner, un sitio web especializado en el análisis de las ofertas de trabajo para
                programadores donde se muestra JavaScript/TypeScript , Python , Java , C# y PHP en ese orden .
                Finalmente el índice PYPL, que mide la popularidad de los lenguajes basándose en la frecuencia de
                búsquedas de tutoriales en Google. Su lista de 5 primeras tecnologías la conforman Python , Java ,
                JavaScript , C# y C/++.
            </p>

            <div className={' text-center flex flex-wrap justify-center space-x-5 my-10 space-y-5 items-center'}>
                <article>
                    <Image height={300} width={600} src={StackOverflow} alt={"StackOverflow"}/>
                    <a href={'https://survey.stackoverflow.co/2024/technology#most-popular-technologies-language-prof'}
                       target={'_blank'}
                       className="mt-3 text-blue-900">Top 5 tecnologias mas populares segun StackOverflow
                        <span><CircleArrowOutUpRight className={'inline-block ms-1 -translate-y-1'} height={10}
                                                     width={10}/>
                        </span>
                    </a>

                </article>
                <article>
                    <Image height={300} width={600} src={DevJobScanner} alt={"DevJobScanner"}/>
                    <a href={'https://www.devjobsscanner.com/blog/top-8-most-demanded-programming-languages/'}
                       target={'_blank'}
                       className="mt-3 text-blue-900">Top 5 tecnologias mas demandades segun DevJobScanner
                        <span><CircleArrowOutUpRight className={'inline-block ms-1 -translate-y-1'} height={10}
                                                     width={10}/>
                        </span>
                    </a>
                </article>
                <article>
                    <Image height={300} width={600} src={Pypl} alt={"Pypl"}/>
                    <a href={'https://pypl.github.io/PYPL.html'}
                       target={'_blank'}
                       className="mt-3 text-blue-900">Top 5 tecnologias del indice PYPL
                        <span><CircleArrowOutUpRight className={'inline-block ms-1 -translate-y-1'} height={10}
                                                     width={10}/>
                        </span>
                    </a>
                </article>
            </div>
            <p className="mt-3">
                Observando estos rankings se aprecian tanto similitudes como diferencias interesantes. JavaScript y
                Python destacan como lenguajes más populares y demandados en todas las listas, lo que refleja su
                versatilidad y amplia adopción en la industria global. En Cuba, JavaScript también lidera, lo que no es
                sorprendente dado su uso extensivo en el desarrollo web y su capacidad para crear aplicaciones de
                gestión de negocios y prestación de servicios online, tan populares en el país en los últimos tiempos.
            </p>
            <p className="mt-3">
                Python, por su parte gana relevancia especialmente debido a su importancia en nuevas tecnologías como la
                inteligencia artificial y las ciencias de datos. Su facilidad de uso y la gran cantidad de bibliotecas
                disponibles lo hacen ideal para el análisis de datos y el aprendizaje automático.
            </p>
            <p className="mt-3">
                El lenguaje PHP, aunque menos prominente en algunas listas globales, sigue siendo relevante en el
                mercado laboral cubano. Esto se debe en gran medida a la prevalencia de sitios web con estructuras más
                antiguas que aún dependen de este lenguaje. A pesar de que su popularidad global está en declive, sigue
                siendo una opción viable para muchos desarrolladores cubanos, especialmente aquellos que trabajan en la
                actualización y mantenimiento de sitios web existentes.
            </p>
            <p className="mt-3">
                Resulta evidente que el sector tecnológico cubano está experimentando una evolución significativa,
                obedeciendo a la globalización como era natural esperar. Las similitudes observadas entre las tendencias
                mundiales y las locales en Cuba se deben al crecimiento del mercado tecnológico cubano, que va en
                ascenso. Los programadores cubanos están bien posicionados para aprovechar las oportunidades tanto a
                nivel local como internacional. La capacidad de trabajar en proyectos extranjeros, gracias a la adopción
                de tecnologías y lenguajes de programación de uso común en todo el mundo, les permite competir en el
                mercado internacional. Además, la creciente conectividad y la disponibilidad de plataformas de trabajo
                remoto han abierto nuevas puertas. Estas ofertas laborales no solo son una fuente de empleo bien
                remunerado, sino también un motor de innovación y desarrollo económico para Cuba.
            </p>
        </div>
    )
}