import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummary: '',
};

function Experience() {
    const [experienceList, setExperienceList] = useState([]);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const params = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (resumeInfo?.Experience?.length > 0) {
            setExperienceList(resumeInfo.Experience);
        }
    }, [resumeInfo]);

    const handleChange = (index, event) => {
        const newEntries = [...experienceList];
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    };

    const AddNewExperience = () => {
        setExperienceList([
            ...experienceList,
            { ...formField }
        ]);
    };

    const RemoveExperience = () => {
        setExperienceList(experienceList.slice(0, -1));
    };

    const handleRichTextEditorChange = (value, index) => {
        const newEntries = [...experienceList];
        newEntries[index].workSummary = value;
        setExperienceList(newEntries);
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            Experience: experienceList
        });
    }, [experienceList]);

    // Updated validation function
    const validateData = (data) => {
        return data.Experience.every(exp => {
            console.log('Validating experience:', exp);
            const requiredFields = ['title', 'companyName', 'startDate', 'city', 'state', 'workSummary'];
            for (const field of requiredFields) {
                if (!exp[field] || exp[field].trim() === '') {
                    console.log(`Invalid ${field}:`, exp[field]);
                    return false;
                }
            }

            // Optional: Validate dates (ensure endDate is after startDate)
            if (exp.endDate && new Date(exp.endDate) < new Date(exp.startDate)) {
                console.log('Invalid dates:', exp.startDate, exp.endDate);
                return false;
            }

            return true;
        });
    };

    const onSave = async () => {
        if (!validateData({ Experience: experienceList })) {
            toast.error('Invalid data. Please check your entries.');
            return;
        }

        setLoading(true);
        const data = {
            data: {
                Experience: experienceList.map(({ id, ...rest }) => rest)
            }
        };

        try {
            console.log('Sending data to API:', data);
            await GlobalApi.UpdateResumeDetail(params?.resumeId, data);
            toast('Details updated!');
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            toast.error('Failed to update details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Professional Experience</h2>
                <p>Add Your previous Job experience</p>
                <div>
                    {experienceList.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name="title"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Company Name</label>
                                    <Input name="companyName"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.companyName} />
                                </div>
                                <div>
                                    <label className='text-xs'>City</label>
                                    <Input name="city"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.city} />
                                </div>
                                <div>
                                    <label className='text-xs'>State</label>
                                    <Input name="state"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.state}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Start Date</label>
                                    <Input type="date"
                                        name="startDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.startDate} />
                                </div>
                                <div>
                                    <label className='text-xs'>End Date</label>
                                    <Input type="date" name="endDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <RichTextEditor
                                        index={index}
                                        defaultValue={item?.workSummary}
                                        onRichTextEditorChange={(value) => handleRichTextEditorChange(value, index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
                        <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                    </div>
                    <Button disabled={loading} onClick={onSave}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Experience;
