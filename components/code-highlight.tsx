import {Highlight, PrismTheme, themes} from "prism-react-renderer";
import {Button} from "@/components/ui/button";
import {Copy} from "lucide-react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useToast} from "@/components/ui/use-toast";

export default function CodeHighlight(props: {
    code: string
    theme?: PrismTheme
    language: string
}) {
    const {toast} = useToast()

    return (
        <div className='relative'>
            <CopyToClipboard
                text={props.code}
                onCopy={() => toast({
                    title: '✅ Copied to clipboard.',
                })}
            >
                <Button
                    className='absolute top-3 right-3 h-8 w-8 md:h-10 md:w-10 opacity-60 hover:opacity-100 transition-opacity duration-100 ease-in-out'
                    size='icon'
                    title='Copy'
                >
                    <Copy className="h-4 w-4"/>
                </Button>
            </CopyToClipboard>
            <Highlight
                theme={props.theme ?? themes.vsDark}
                code={props.code}
                language={props.language}
            >
                {
                    ({className, style, tokens, getLineProps, getTokenProps}) => (
                        <pre style={style} className='rounded-xl overflow-x-auto py-2'>
                            {
                                tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({line})}>
                                        <span
                                            className={`select-none px-3 sticky left-0`}
                                            style={{
                                                background: style.backgroundColor,
                                            }}>
                                            {i + 1}
                                        </span>
                                        {
                                            line.map((token, key) => (
                                                <span key={key} {...getTokenProps({token})} />
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </pre>
                    )
                }
            </Highlight>
        </div>
    )
}