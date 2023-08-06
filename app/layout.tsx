import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'feColorMatrix Playground',
  description: 'feColorMatrix Playground',
}

export default function RootLayout(props: {
  children?: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
