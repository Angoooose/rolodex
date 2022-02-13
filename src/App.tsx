import useAuth from './hooks/useAuth';
import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext';

export default function App() {
  const { authData } = useContext(AuthContext);
  if (authData === undefined) return <div/>;

  return (
    <div className="h-full bg-neutral-300 py-14 px-10">
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