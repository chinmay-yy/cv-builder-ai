import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'; // Adjust the import path
import { useUser } from '@clerk/clerk-react';
import { useNavigate, useParams } from 'react-router-dom';

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState('');
    const [resumeData, setResumeData] = useState(null);
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { documentId } = useParams(); // Retrieve documentId from URL parameters

    // Fetch resume data if documentId is available
    useEffect(() => {
        const fetchResume = async () => {
            if (documentId) {
                setLoading(true);
                try {
                    const response = await GlobalApi.GetResumeByDocumentId(documentId);
                    const fetchedData = response.data.data;
                    setResumeData(fetchedData);
                    setResumeTitle(fetchedData.title); // Set title in input field
                    console.log('Fetched Resume Data:', fetchedData);
                } catch (error) {
                    console.error('Error fetching resume:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchResume();
    }, [documentId]);

    const onCreate = async () => {
        setLoading(true);
        const uuid = uuidv4();

        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        };

        try {
            const resp = await GlobalApi.CreateNewResume(data);
            const newDocumentId = resp.data.data.documentId;

            console.log('Created Resume Document ID:', newDocumentId);

            if (resp) {
                setLoading(false);
                navigate(`/dashboard/resume/${newDocumentId}/edit`);
            }
        } catch (error) {
            console.error('Error creating resume:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='p-14 py-24 border 
                items-center flex 
                justify-center bg-secondary
                rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{documentId ? 'Edit Resume' : 'Create New Resume'}</DialogTitle>
                        <DialogDescription>
                            <p>{documentId ? 'Edit your resume' : 'Add a title for your new resume'}</p>
                            <Input className="my-2"
                                placeholder="Ex. Full Stack resume"
                                value={resumeTitle}
                                onChange={(e) => setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
                            <Button
                                disabled={!resumeTitle || loading}
                                onClick={onCreate} // Create or update the resume on click
                            >
                                {loading ?
                                    <Loader2 className='animate-spin' /> : (documentId ? 'Save Changes' : 'Create')
                                }
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
