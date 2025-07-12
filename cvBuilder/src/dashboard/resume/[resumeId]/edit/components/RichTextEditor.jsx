import React, { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, LoaderCircle } from 'lucide-react';
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnUnderline, BtnStrikeThrough, Separator, BtnNumberedList, BtnBulletList, BtnLink } from 'react-simple-wysiwyg';
import { AIChatSession } from './../../../../../../service/AIModal';
import { toast } from 'sonner';
import { ResumeInfoContext } from '@/context/ResumeInfoContext'; // Import context

const PROMPT = 'Position title: {positionTitle}. Provide 2-3 concise bullet points for my experience in resume in plain text without any labels or JSON format.';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    const GenerateSummaryFromAI = async () => {
        if (!resumeInfo?.Experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }
        setLoading(true);
        const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);
        
        try {
            const result = await AIChatSession.sendMessage(prompt);
            const resp = result.response.text();
            setValue(resp.replace('[', '').replace(']', ''));
            onRichTextEditorChange(resp.replace('[', '').replace(']', '')); // Call callback with updated value
        } catch (error) {
            console.error('Error generating summary:', error);
            toast.error('Failed to generate summary from AI.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummaryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e.target.value); // Ensure correct value is passed
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
