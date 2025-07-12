import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header  from './components/ui/custom/Header'; // Ensure this path is correct
import './App.css';
import { Toaster } from 'sonner';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  // Redirect to sign-in if the user is not signed in and the data is loaded
  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />;
  }

  return (
    <>
      <Header /> {/* Include the Header component here */}
      <Outlet /> {/* Render the current route's component */}
      <Toaster/>
    </>
  );
}

export default App;












