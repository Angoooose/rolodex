import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';

export default function App() {
  const [authData, signOut] = useAuth();
  
  if (authData === undefined) return <div/>;

  return (
    <div className="h-screen bg-neutral-300 py-14 px-10">
      {authData?.status ? (
        <div>
          <Header/>
          <Contacts/>
        </div>
      ) : (
        <Auth/>
      )}
    </div>
  );
}