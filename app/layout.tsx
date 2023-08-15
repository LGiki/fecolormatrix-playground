import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import {Toaster} from "@/components/ui/toaster";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
    title: 'feColorMatrix Playground',
    description: 'feColorMatrix Playground',
}

export default function RootLayout(props: {
    children?: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {props.children}
                    <Toaster/>
                </ThemeProvider>
            </body>
        </html>
    )
}
