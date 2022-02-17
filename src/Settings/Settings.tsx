import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Button from '../common/Button';
import SettingsCard from './SettingsCard';
import Switch from '../common/Switch';
import { useState } from 'react';

export default function Settings() {
    const { authData, signOut } = useContext(AuthContext);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [useSystemTheme, setUseSystemTheme] = useState<boolean>(true);

    return (
        <div className="flex">
            <SettingsCard>
                <h1 className="text-2xl font-medium">Account</h1>
                <div>Email: <span className="text-gray-500">{authData?.email}</span></div>
                <Button color="danger" className="w-full" onClick={signOut}>Signout</Button> 
            </SettingsCard>
            <SettingsCard>
                <h1 className="text-2xl font-medium">Theme</h1>
                <Switch label="Dark Mode" switched={isDarkTheme} onSwitch={() => setIsDarkTheme(!isDarkTheme)}/>
                <Switch label="Use System Theme" switched={useSystemTheme} onSwitch={() => setUseSystemTheme(!useSystemTheme)}/>
            </SettingsCard>
        </div>
    );
}