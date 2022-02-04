import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Contact from './Types/Contact';

export default function App() {
  const [authData, signOut, addContact] = useAuth();
  
  if (authData === undefined) return <div/>;

  return (
    <div className="h-screen bg-neutral-300 py-14 px-10">
      {authData?.status ? (
        <div>
          <Header/>
          <Contacts contacts={authData.contacts as Contact[]} addContact={addContact}/>
        </div>
      ) : (
        <Auth/>
      )}
    </div>
  );
}