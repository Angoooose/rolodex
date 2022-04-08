import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Button from '../common/Button';
import SettingsCard from './SettingsCard';
import Switch from '../common/Switch';
import ThemeContext from '../contexts/ThemeContext';

import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

export default function Settings() {
    const { authData, signOut } = useContext(AuthContext);
    const { theme, updateTheme, useSystemTheme, updateUseSystemTheme } = useContext(ThemeContext);

    return (
        <div className="flex">
            <SettingsCard>
                <div className="flex items-center">
                    <h1 className="text-2xl font-medium">Account</h1>
                    <hr className="w-full ml-3 border-neutral-300 dark:border-slate-500"/>
                </div>
                <div className="flex items-center"><MailIcon className="w-5 mr-1 text-sky-500"/> <span className="text-gray-400">{authData?.email}</span></div>
                <div className="flex items-center"><LockClosedIcon className="w-5 mr-1 text-green-400"/> <span className="text-gray-400">Hidden</span></div>
                <Button color="danger" className="w-full" onClick={signOut}>Signout</Button> 
            </SettingsCard>
            <SettingsCard>
                <div className="flex items-center">
                    <h1 className="text-2xl font-medium">Theme</h1>
                    <hr className="w-full ml-3 border-neutral-300 dark:border-slate-500"/>
                </div>
                <Switch label="Dark Mode" switched={theme === 'dark'} onSwitch={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}/>
                <Switch label="Use System Theme" switched={useSystemTheme ? useSystemTheme : false} onSwitch={() => updateUseSystemTheme(!useSystemTheme)}/>
            </SettingsCard>
        </div>
    );
}