import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import {Toaster} from "@/components/ui/toaster";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
    title: 'feColorMatrix Playground',
    description: 'feColorMatrix Playground',
    icons: {
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💄</text></svg>'
    }
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
