import CodeHighlight from "@/components/code-highlight";

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

    return (
        <div className='flex flex-col gap-5'>
            <div className='space-y-2'>
                <h1 className='text-lg'>SVG Code:</h1>
                <CodeHighlight
                    code={svgCode}
                    language='svg'
                />
            </div>

            <div className='space-y-2'>
                <h1 className='text-lg'>CSS Code:</h1>
                <CodeHighlight
                    code={cssCode}
                    language='css'
                />
            </div>
        </div>
    )
}