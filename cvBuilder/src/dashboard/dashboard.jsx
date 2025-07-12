import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log(resp.data.data);
        setResumeList(resp.data.data);
      });
  };

  return (
    <div className='p-4 sm:p-6 md:px-10 lg:px-16 xl:px-24'>
      <h2 className='font-bold text-2xl sm:text-3xl'>My Resume</h2>
      <p className='mt-2 text-sm sm:text-base'>Start Creating AI resumes for your next job role</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-8'>
        <AddResume />
        {resumeList.length > 0 ? resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
        )) : [1, 2, 3, 4].map((item, index) => (
          <div key={index} className='h-[220px] sm:h-[260px] md:h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
