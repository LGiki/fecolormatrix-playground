import {Input} from "@/components/ui/input";
import {Slider} from "@/components/ui/slider";
import React from "react";

const TABLE_HEADER = ['R', 'G', 'B', 'A', 'Offset']

export default function FeColorMatrixEditor(props: {
    feColorMatrix: number[],
    onChange?: (feColorMatrix: number[]) => void
    onReset?: (index: number) => void
}) {
    return (
        <div className='grid grid-cols-fe-color-matrix gap-2 content-center md:gap-4'>
            <div></div>
            {
                TABLE_HEADER.map((value, index) => {
                    return (
                        <div className='text-gray-400 text-center' key={index}>{value}</div>
                    )
                })
            }
            {
                props.feColorMatrix.map((_, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                index % 5 === 0 && (
                                    <div
                                        className='text-gray-400 flex items-center justify-center'>{TABLE_HEADER[index / 5]}</div>
                                )
                            }
                            <div className='flex flex-col gap-4'>
                                <Input
                                    type='number'
                                    value={props.feColorMatrix[index]}
                                    step={0.1}
                                    className='h-8'
                                    onChange={(e) => {
                                        const feColorMatrix = [...props.feColorMatrix]
                                        feColorMatrix[index] = Number(e.target.value)
                                        props.onChange?.(feColorMatrix)
                                    }}
                                />
                                <Slider
                                    step={0.01}
                                    value={[props.feColorMatrix[index]]}
                                    min={-10}
                                    max={10}
                                    onValueChange={(value) => {
                                        const feColorMatrix = [...props.feColorMatrix]
                                        feColorMatrix[index] = value[0]
                                        props.onChange?.(feColorMatrix)
                                    }}
                                    onDoubleClick={() => {
                                        props.onReset?.(index)
                                    }}
                                />
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}