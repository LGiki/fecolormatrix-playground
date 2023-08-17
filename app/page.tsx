'use client'

import FeColorMatrixEditor from "@/components/fe-color-matrix-editor";
import {useState} from "react";
import {Separator} from "@/components/ui/separator";
import FeColorMatrixCode from "@/components/fe-color-matrix-code";
import NavBar from "@/components/nav-bar";
import {Card} from "@/components/ui/card";
import FeColorMatrixImage from "@/components/fe-color-matrix-image";
import {Button} from "@/components/ui/button";
import {RotateCcw} from "lucide-react";

const DEFAULT_FE_COLOR_MATRIX = [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0
]

export default function Home() {
    const [feColorMatrix, setFeColorMatrix] = useState<number[]>(DEFAULT_FE_COLOR_MATRIX)

    return (
        <div className="flex flex-col h-screen">
            <NavBar/>
            <div className='h-0 flex-grow p-1 md:px-6 md:p-3'>
                <Card className='h-full w-full flex flex-col md:flex-row'>
                    <div className='flex flex-col gap-3 flex-1 p-2 overflow-auto md:p-5 md:gap-5'>
                        <div className='flex justify-between'>
                            <h1 className='text-lg'>Edit feColorMatrix Here:</h1>
                            <Button
                                variant='secondary'
                                title='Reset feColorMatrix'
                                className='h-8 px-2 md:h-10 md:px-4'
                                onClick={() => {
                                    setFeColorMatrix(DEFAULT_FE_COLOR_MATRIX)
                                }}
                            >
                                <RotateCcw className="mr-2 h-4 w-4"/>
                                Reset
                            </Button>
                        </div>
                        <FeColorMatrixEditor
                            feColorMatrix={feColorMatrix}
                            onChange={setFeColorMatrix}
                            onReset={(index) => {
                                const feColorMatrixCopy = [...feColorMatrix]
                                feColorMatrixCopy[index] = DEFAULT_FE_COLOR_MATRIX[index]
                                setFeColorMatrix(feColorMatrixCopy)
                            }}
                        />
                        <Separator className='mt-2'/>
                        <FeColorMatrixCode feColorMatrix={feColorMatrix}/>
                    </div>
                    <div className='flex-1 p-2 h-0 md:h-full'>
                        <FeColorMatrixImage
                            feColorMatrix={feColorMatrix}
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}
