import Image from "next/image";
import EntryImage from "./assets/entry-img.jpg";
import Cpp from "./assets/cpp.png";
import Java from "./assets/java.jpg";
import JavaScript from "./assets/javascript.png";
import Python from "./assets/python.png";
import CSharp from "./assets/csharp.png";
import Logo from "./assets/logo.jpg"

export default function Page() {
    return (
        <div className={'mt-20 p-5 justify-start lg:p-10 text-pretty'}>
            <div className={'flex lg:space-x-20 lg:flex-row flex-col'}>
                <div className={'lg:w-1/2 w-full'}>
                    <h1 className="font-bold text-xl"> ¿Te apaciona el mundo de la computación? </h1>
                    <p className="mt-5">
                        Muchas son las personas que decidieron dedicar su vida al apasionante y desafiante
                        mundo de la computación. Estas personas se han topado innumerables veces con la siguiente
                        interrogante
                        ¿Cúal es el mejor lugar para trabajar dada mis habailidades y conocimientos?. En cualquier parte
                        del
                        planeta encontramos personas en esa situación, incluso Cuba, donde hoy en día el mercado laboral
                        del
                        sector
                        tecnológico ha tenido un gran crecimiento.
                    </p>
                </div>
                <Image src={EntryImage} alt={'Mujer programando'} className=" rounded-lg" width={400} height={225}/>
            </div>


            <p className="mt-20">
                Si estas aquí, es porque tú también eres un cubano (o quizás no) apasionado de la computación y el
                desarrollo, pero como parte de la mayoría
                no sabes, o no tienes idea de que es lo mejor que deberías hacer con tus habilidades.
            </p>

            <h1 className="font-bold text-xl mt-10"> ¿Cómo debería buscar la mejor opción? </h1>
            <p className="mt-5">
                En tu mente sigue resonando la duda de cual es la mejor oferta de trabajo para tí dado tus preferencias
                y tus habilidades.
                Frustrado por no encontrar la respuestas decides abrir tu ordenador y comenzar a buscar en páginas que
                ofrecen una gran cantidad de empleos.
                El problema es que son demasiados los anuncios y las ofertas y muchos no son claras con los requisitos
                pedidos o los beneficios
                que aporta.
            </p>
            <p className="mt-3">
                Te aburres de mirar anuncios y ofertas y cambias tu objetivo en la búsqueda. Y si en vez de buscar
                ofertas sin una idea clara
                no buscas por ejemplo ¿Qué tecnología es la mejor pagada a nivel mundial?, si hiciese un ranking
                salarial, en que posición
                estarán las tecnologías que domino? Déjame decirte que buscar de esa forma es una buena idea para tener
                noción de como se desarrollará su trabajo
                y no aceptar cualquier anuncio así porque sí. En otras palabras, imagina que dominas 100% el lenguaje de
                programación C#, el promedio salarial
                digamos que es de 1000$ y sin embargo en las ofertas que buscaste el salario será de 200$, evidentemente
                es una estafa.
            </p>

            <div className={'flex lg:flex-row flex-col lg:space-x-20 mt-20'}>
                <div className={'lg:w-1/2 w-full'}>
                    <h1 className="font-bold text-xl">Mientras te quedas pensando en esto, te muestro los cinco
                        lenguajes de programación mas usados del
                        mundo.</h1>
                    <p className="mt-5">
                        Ya encontraste lo que estabas buscando, sabes que tan valiosa, económicamente hablando, es tu
                        habilidad
                        y ya estas preparado
                        para comenzar la búsqueda de una buena oferta de trabajo. Pero ¿Qué pasa con los otros
                        requisitos?
                        Digamos Experiencia, concocimiento de algún idioma,
                        por no hablar de las modalidades de trabajo. Ese tipo de interrogantes si es más díficil de
                        encontrar en
                        una página web y notas que debes regresar a la búsqueda
                        anuncio por anuncio.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    <Image src={JavaScript} alt="JavaScript" className={'rounded-lg'} title="JavaScript" width={100}
                           height={60}/>
                    <Image src={Python} alt="Python" title="Python" className={'rounded-lg'} width={100} height={60}/>
                    <Image src={Java} alt="Java" title="Java" className={'rounded-lg'} width={100} height={60}/>
                    <Image src={CSharp} alt="C#" title="C#" className={'rounded-lg'} width={100} height={60}/>
                    <Image src={Cpp} alt="C++" title="C++" className={'rounded-lg'} width={100} height={60}/>
                </div>
            </div>

            <p className="mt-10">
                El ser humano odia el trabajo tedioso, sería genial si en un solo lugar estuviese recopilada toda esa
                información. No hablo de las ofertas como tal. Imagina esto:
                Deseas saber cuantos lugares te exigen conocer un idioma en específico, dominar cierta tecnología y
                tener al menos un año de experiencia trabajando con dicha tecnología.
                Es realmente tedioso buscar primero las empresas brindan ofertas sobre esa tecnología que dominas, luego
                ver cuales de ellas te exigen un idioma y luego ver cuales te piden experiencia
                demostrable. Son demasiados búsquedas para distintos sitios.
            </p>

            <div className={'flex lg:flex-row flex-col lg:space-x-20 mt-20'}>
                <div className={'lg:w-1/2 w-full'}>
                    <h1 className="font-bold text-xl">Un poquito sobre nosotros</h1>
                    <p className="mt-5">
                        Abrumado ya, sin ganas de continuar. Tomas tu teléfono celular y abres el Whatsapp. Revisando
                        los
                        estados de tus amigos, notas que comenzaron
                        a trabajar en lugares muy buenos. Les escribes donde encontraron información, le explicas la
                        idea que
                        tuviste y ellos te responden que tuvieron
                        la misma idea y encontraron un sitio web muy bueno que recopilaba todos esos datos que tu
                        necesitabas.
                        Visitas rápidamente el sitio y ahora estás aquí
                        en el mejor sitio de infomación sobre el mercado laboral en Cuba, leyendo tu propia historia.
                        Espero que
                        encuentres lo que estás buscando dentro de los analisis que realizamos
                    </p>
                </div>
                <Image src={Logo} alt={'TechPath'} className=" rounded-lg" width={300} height={100}/>
            </div>

        </div>
    )
}