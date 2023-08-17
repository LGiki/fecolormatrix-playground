import {Button} from "@/components/ui/button";
import {Github, HelpCircle} from "lucide-react";
import {useState} from "react";
import HelpDialog from "@/components/help-dialog";
import DarkModeToggle from "@/components/dark-mode-toggle";

export default function NavBar() {
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false)

    return (
        <>
            <div
                className='flex flex-row gap-1 flex-shrink-0 py-2 px-3 items-center border-b justify-between md:h-16 md:px-6 md:py-3'>
                <div className='flex flex-1 space-x-5 md:space-x-10'>
                    <h2 className="text-lg font-semibold">feColorMatrix Playground</h2>
                </div>
                <div className='flex gap-2 flex-shrink-0'>
                    <Button
                        variant='outline'
                        title='Help'
                        size='icon'
                        onClick={() => setIsHelpDialogOpen(true)}
                        className='h-8 w-8 md:h-10 md:w-10'
                    >
                        <HelpCircle className="h-4 w-4"/>
                    </Button>
                    <DarkModeToggle/>
                    <a href='https://github.com/LGiki/fecolormatrix-playground' target='_blank'>
                        <Button
                            variant='outline'
                            size='icon'
                            title='Github'
                            className='h-8 w-8 md:h-10 md:w-10'
                        >
                            <Github className="h-4 w-4"/>
                        </Button>
                    </a>
                </div>
            </div>
            <HelpDialog open={isHelpDialogOpen} onOpenChange={setIsHelpDialogOpen}/>
        </>
    )
}