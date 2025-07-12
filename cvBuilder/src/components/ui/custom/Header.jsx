import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <Link to={'/'}>
        <img src='/logo.png' style={{height: 48, width: 'auto'}} alt='Logo' />
      </Link>

      {isSignedIn ? (
        <div className='flex gap-2 items-center'>
          <Link to={'/src/coverletter'}>
            <Button variant='outline'>Cover Letter</Button>
          </Link>
          <Link to={'/dashboard'}>
            <Button variant='outline'>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/sign-in'}>
          <Button>Get started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
