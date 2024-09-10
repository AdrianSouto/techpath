"use client"

import logo from '@/public/logo-mini.svg'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function TopBar() {
    const [currentRoute, setCurrentRoute] = useState<string>('/')

    return (
        <nav className={'bg-black w-svw font-medium'}>
            <div className={'flex select-none space-x-8 absolute start-12 top-6'}>
                <article className={'group'}>
                    <Link href={'/'} onClick={()=>setCurrentRoute('/')}>Inicio</Link>
                    <div className={`rounded-full h-0.5 w-${currentRoute === '/' ? 'full' : '0'} bg-blue-500 group-hover:w-full transition-all`}/>
                </article>
                <article className={'group'}>
                    <Link href={'/blog'} onClick={()=>setCurrentRoute('/blog')}>Artículo</Link>
                    <div className={`rounded-full h-0.5 w-${currentRoute === '/blog' ? 'full' : '0'} bg-blue-500 group-hover:w-full transition-all`}/>
                </article>
                <article className={'group'}>
                    <Link href={'/charts'} onClick={()=>setCurrentRoute('/charts')}>Gráficos</Link>
                    <div className={`rounded-full h-0.5 w-${currentRoute === '/charts' ? 'full' : '0'} bg-blue-500 group-hover:w-full transition-all`}/>
                </article>
            </div>
            <div className={'space-x-5 items-center absolute end-12 top-6 hidden lg:flex'}>
                <Image src={logo} alt={'logo'} width={30} height={30}/>
                <h1 className={'text-2xl'}>techpath</h1>
            </div>
        </nav>
    );
}