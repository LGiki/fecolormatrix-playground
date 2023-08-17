import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

export default function HelpDialog(props: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) {
    return (
        <Dialog
            open={props.open}
            onOpenChange={props.onOpenChange}
        >
            <DialogContent className='rounded-xl max-h-screen overflow-y-auto text-justify'>
                <DialogHeader>
                    <DialogTitle>Learn More</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col gap-2 overflow-y-auto'>
                    <p>The &lt;feColorMatrix&gt; filter changes colors based on a 4 x 5 transformation matrix.</p>
                    <img src='/fe-color-matrix.svg' width={180} alt='feColorMatrix'/>
                    <p>Every pixel&apos;s color value (represented by an [R,G,B,A] vector) is matrix multiplied to
                        create a new color.</p>
                    <p>Assuming [R&apos;, G&apos;, B&apos;, A&apos;] represents the transformed pixel, the operation of
                        feColorMatrix can be expressed as follows:</p>
                    <img src='/fe-color-matrix-equation.svg' alt='feColorMatrix equation'/>
                    <p>Read more about feColorMatrix on <a
                        target='_blank'
                        className='underline underline-offset-4'
                        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix"
                    >
                        MDN
                    </a>.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}