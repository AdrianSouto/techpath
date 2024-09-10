import Image from "next/image";
import EntryImage from "./assets/entry-img.jpg";
import Logo from "./assets/logo.jpg"

export default function Page() {
    return (
        <div className={'mt-20 p-5 justify-start lg:p-10 text-pretty'}>
            <div className={'flex lg:space-x-20 lg:flex-row flex-col'}>
                <div className={'lg:w-1/2 w-full'}>
                    <h1 className="font-bold text-xl"> ¿Cómo conseguir, de manera rápida, un trabajo como desarrollador
                        en Cuba? </h1>
                    <p className="mt-5">
                        En la actualidad, el campo del desarrollo web se ha convertido en uno de los más solicitados en
                        Cuba. Con un salario promedio de 918 USD, muchos profesionales buscan ingresar rápidamente a
                        esta industria. Aquí te ofrecemos algunos consejos para lograrlo.
                    </p>
                </div>
                <Image src={EntryImage} alt={'Mujer programando'} className=" rounded-lg" width={400} height={225}/>
            </div>

            <h1 className="font-bold text-lg mt-10"> Domina las tecnologías más usadas </h1>
            <p className="mt-2">
                Para destacar en el mercado laboral, es esencial tener un buen manejo de las tecnologías más demandadas.
                En Cuba, las más utilizadas son JavaScript, TypeScript y Python. Dedica tiempo a aprender y perfeccionar
                tus habilidades en estos lenguajes de programación.
            </p>
            <h1 className="font-bold text-lg mt-10"> Aprende inglés</h1>
            <p className="mt-2">
                El inglés es fundamental en el mundo del desarrollo web. Muchas de las mejores oportunidades laborales y
                recursos educativos están disponibles en este idioma. Además, la mayoría de las ofertas internacionales
                requieren un buen nivel de inglés.
            </p>
            <h1 className="font-bold text-lg mt-10"> Únete a grupos de Telegram y webs especializadas</h1>
            <p className="mt-2">
                Existen numerosos grupos de Telegram y sitios web dedicados a la publicación de ofertas de trabajo para
                desarrolladores. Participar activamente en estas comunidades te permitirá estar al tanto de las últimas
                oportunidades y conectar con otros profesionales del sector.
            </p>
            <h1 className="font-bold text-lg mt-10"> Crea un portafolio sólido</h1>
            <p className="mt-2">
                Un portafolio bien estructurado y con proyectos relevantes puede marcar la diferencia a la hora de
                conseguir un empleo. Asegúrate de incluir tus mejores trabajos y de mantenerlo actualizado.
            </p>
            <h1 className="font-bold text-lg mt-10"> Red de contactos </h1>
            <p className="mt-2">
                Construir una red de contactos en la industria puede abrirte muchas puertas. Asiste a eventos, participa
                en meetups y colabora en proyectos open source para ampliar tu red profesional.
            </p>
            <h1 className="font-bold text-lg mt-10">  Aplica a ofertas internacionales</h1>
            <p className="mt-2">
               No te limites al mercado local. Muchas empresas internacionales buscan talento en Cuba y publican sus ofertas en grupos de Telegram y webs especializadas. Estas oportunidades suelen ofrecer salarios competitivos y la posibilidad de trabajar de manera remota.
            </p>

            <div className={'flex lg:flex-row flex-col lg:space-x-20 mt-20'}>
                <div className={'lg:w-1/2 w-full'}>
                    <p className="mt-5">
                        Siguiendo estos consejos, estarás en una excelente posición para conseguir rápidamente un
                        trabajo como desarrollador en Cuba. ¡Buena suerte en tu búsqueda laboral!
                    </p>
                </div>
                <Image src={Logo} alt={'TechPath'} className=" rounded-lg" width={200} height={80}/>
            </div>

        </div>
    )
}