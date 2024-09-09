import type {Metadata} from "next";
import "./globals.css";
import TopBar from "@/app/components/TopBar";
import {monserrat} from "@/app/fonts";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "TechPath",
    description: "TechPath es un sitio web que recopila ofertas laborales en el sector tecnológico en Cuba",

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <head>
            <meta charSet="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>TechPath</title>
        </head>
        <body
            className={`${monserrat.className} antialiased bg-tuatara-50 flex flex-col text-tuatara-950`}
        >
        <GoogleAnalytics gaId="G-WMBEV2KHNH" />
        <TopBar/>
        {children}
        </body>
        </html>
    );
}