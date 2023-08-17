import {ImgComparisonSlider} from "@img-comparison-slider/react";
import {Button} from "@/components/ui/button";
import {Upload} from "lucide-react";
import {useRef, useState} from "react";

export default function FeColorMatrixImage(props: {
    feColorMatrix: number[]
}) {
    const [imageSrc, setImageSrc] = useState<string>('/cat.webp')
    const imageFileInputRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <div className='flex flex-col items-center gap-4 h-full md:p-5'>
                <Button
                    title='Upload Image'
                    onClick={() => {
                        imageFileInputRef.current?.click()
                    }}
                    className='h-8 px-2 md:h-10 md:px-4'
                >
                    <Upload className="mr-2 h-4 w-4"/> Upload Image
                </Button>
                <input
                    type='file'
                    accept='image/*'
                    className='hidden h-0 w-0'
                    ref={imageFileInputRef}
                    onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                            const reader = new FileReader()
                            reader.onload = (e) => {
                                const src = e.target?.result
                                if (typeof src === 'string') {
                                    setImageSrc(src)
                                }
                            }
                            reader.readAsDataURL(file)
                        }
                    }}
                />
                <div className='overflow-y-auto w-full'>
                    <ImgComparisonSlider>
                        <figure slot="first" className="relative flex items-center">
                            <img
                                slot="first"
                                src={imageSrc}
                                className='rounded-xl'
                            />
                            <figcaption
                                className='bg-white/50 px-2 py-1 text-lg shadow-lg rounded-lg backdrop-blur-xl text-gray-800 absolute left-2'>Before
                            </figcaption>
                        </figure>
                        <figure slot="second" className="relative flex items-center">
                            <img
                                slot="first"
                                src={imageSrc}
                                className='rounded-xl'
                                style={{
                                    filter: 'url(#fe-color-matrix)'
                                }}
                            />
                            <figcaption
                                className='bg-white/50 px-2 py-1 text-lg shadow-lg rounded-lg backdrop-blur-xl text-gray-800 absolute right-2'>After
                            </figcaption>
                        </figure>
                    </ImgComparisonSlider>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height='0' width='0'
                 className='absolute top-0 left-0 w-0 h-0 z-[-1]'>
                <filter id="fe-color-matrix">
                    <feColorMatrix
                        type="matrix"
                        values={props.feColorMatrix.join(' ')}>
                    </feColorMatrix>
                </filter>
            </svg>
        </>
    )
}