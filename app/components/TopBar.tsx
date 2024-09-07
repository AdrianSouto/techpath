import logo from '@/public/logo-mini.svg'
import Image from "next/image";
import Link from "next/link";

export default function TopBar(){
    return(
        <nav className={'bg-black w-svw font-medium absolute'}>
            <div className={'flex select-none space-x-8 absolute start-12 top-6'}>
                <article className={'group'}>
                    <h2>Inicio</h2>
                    <div className={'rounded-full h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all'}/>
                </article>
                <article className={'group'}>
                    <h2>Blog</h2>
                    <div className={'rounded-full h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all'}/>
                </article>
                <article className={'group'}>
                    <Link href={'/charts'}>Gráficos</Link>
                    <div className={'rounded-full h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all'}/>
                </article>
            </div>
            <div className={'flex space-x-5 items-center absolute end-12 top-6'}>
                <Image src={logo} alt={'logo'} width={30} height={30}/>
                <h1 className={'text-2xl'}>techpath</h1>
            </div>
        </nav>
    )
}