import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';

import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Settings from './Settings/Settings';

export default function App() {
  const { authData } = useContext(AuthContext);
  if (authData === undefined) return <div/>;

  return (
    <div className="h-full bg-neutral-300 py-14 px-10">
      {authData?.status ? (
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Routes>
        </div>
      ) : (
        <Auth/>
      )}
    </div>
  );
}