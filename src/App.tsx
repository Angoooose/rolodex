import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Contact from './Types/Contact';

export default function App() {
  const [authData, signOut, addContact, updateContact, deleteContact] = useAuth();
  
  if (authData === undefined) return <div/>;

  return (
    <div className="h-full bg-neutral-300 py-14 px-10">
      {authData?.status ? (
        <div>
          <Header/>
          <Contacts authData={authData} addContact={addContact} updateContact={updateContact} deleteContact={deleteContact}/>
        </div>
      ) : (
        <Auth/>
      )}
    </div>
  );
}