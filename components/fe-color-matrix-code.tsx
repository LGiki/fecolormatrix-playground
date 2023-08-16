import {useTheme} from "next-themes";
import {themes} from "prism-react-renderer";
import dynamic from 'next/dynamic'

const CodeHighlight = dynamic(() => import('@/components/code-highlight'), {
    ssr: false,
})

export default function FeColorMatrixCode(props: {
    feColorMatrix: number[]
}) {
    const svgCode = `<svg>
    <filter id="your-filter-id-here">
        <feColorMatrix 
            type="matrix" 
            values="${props.feColorMatrix.join(' ')}">
        </feColorMatrix>
    </filter>
</svg>`

    const cssCode = `.your-class-name-here {
    filter: url(#your-filter-id-here);
}`

    const {theme} = useTheme()

    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-2'>
                <h1 className='text-lg'>SVG Code:</h1>
                <CodeHighlight
                    code={svgCode}
                    language='svg'
                    theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
                />
            </div>

            <div className='space-y-2'>
                <h1 className='text-lg'>CSS Code:</h1>
                <CodeHighlight
                    code={cssCode}
                    language='css'
                    theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
                />
            </div>
        </div>
    )
}