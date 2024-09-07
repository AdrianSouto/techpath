import type {Metadata} from "next";
import "./globals.css";
import TopBar from "@/app/components/TopBar";
import {monserrat} from "@/app/fonts";

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
            <link rel="icon" type="image/svg+xml" href="/logo-mini.svg"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>TechPath</title>
        </head>
        <body
            className={`${monserrat.className} antialiased bg-tuatara-50 flex flex-col text-tuatara-950`}
        >
        <TopBar/>
        {children}

        </body>
        </html>
    );
}
