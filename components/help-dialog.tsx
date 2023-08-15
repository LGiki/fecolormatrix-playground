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
            <DialogContent className='max-w-2xl'>
                <DialogHeader>
                    <DialogTitle>Learn More</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl'>Help:</h1>
                    <img src='/fe-color-matrix.svg' />
                    <h1 className='text-xl'>Docs:</h1>
                    <ul className='list-disc'>
                        <li>
                            <a
                                target='_blank'
                                className='underline underline-offset-4'
                                href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix"
                            >
                                &lt;feColorMatrix&gt; on MDN
                            </a>
                        </li>
                        <li>
                            <a
                                target='_blank'
                                className='underline underline-offset-4'
                                href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix"
                            >
                                &lt;feColorMatrix&gt; on MDN
                            </a>
                        </li>
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    )
}