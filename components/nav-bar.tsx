import {Button} from "@/components/ui/button";
import {Github, HelpCircle} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useState} from "react";
import {set} from "zod";
import HelpDialog from "@/components/help-dialog";

export default function NavBar() {
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false)

    return (
        <>
            <div
                className='flex flex-col space-y-2 shrink-0 p-3 items-center bg-white border-b md:flex-row md:justify-between md:space-y-0 md:h-16 md:px-6'>
                <div className='flex flex-1 space-x-5 md:space-x-10'>
                    <h2 className="text-lg font-semibold">feColorMatrix Playground</h2>
                </div>
                <div className='flex space-x-4 flex-shrink-0'>
                    <Button
                        variant='outline'
                        size='icon'
                        title='Help'
                        onClick={() => setIsHelpDialogOpen(true)}
                    >
                        <HelpCircle className="h-4 w-4"/>
                    </Button>
                    <Button
                        variant='outline'
                        size='icon'
                        title='Github'
                    >
                        <Github className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
            <HelpDialog open={isHelpDialogOpen} onOpenChange={setIsHelpDialogOpen}/>
        </>
    )
}