import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Button from '../common/Button';
import SettingsCard from './SettingsCard';
import Switch from '../common/Switch';
import { useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function Settings() {
    const { authData, signOut } = useContext(AuthContext);
    const { theme, updateTheme, useSystemTheme, updateUseSystemTheme } = useContext(ThemeContext);

    return (
        <div className="flex">
            <SettingsCard>
                <h1 className="text-2xl font-medium">Account</h1>
                <div>Email: <span className="text-gray-500">{authData?.email}</span></div>
                <Button color="danger" className="w-full" onClick={signOut}>Signout</Button> 
            </SettingsCard>
            <SettingsCard>
                <h1 className="text-2xl font-medium">Theme</h1>
                <Switch label="Dark Mode" switched={theme === 'dark'} onSwitch={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}/>
                <Switch label="Use System Theme" switched={useSystemTheme} onSwitch={() => updateUseSystemTheme(!useSystemTheme)}/>
            </SettingsCard>
        </div>
    );
}