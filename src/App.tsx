import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';

import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Settings from './Settings/Settings';
import ThemeContext from './contexts/ThemeContext';
import NotFound from './NotFound';

export default function App() {
  const { authData } = useContext(AuthContext);
  const { theme, useSystemTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark' || (useSystemTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, useSystemTheme]);

  if (authData === undefined) return <div/>;

  return (
    <div className="min-h-screen bg-neutral-300 py-14 px-10 dark:bg-slate-800 dark:text-white">
      {authData?.status ? (
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      ) : (
        <Auth/>
      )}
    </div>
  );
}