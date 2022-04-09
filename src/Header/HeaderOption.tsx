import { ViewGridIcon, CogIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';


interface HeaderOptionProps {
    type: 'contacts'|'settings',
}

export default function HeaderOption({ type }: HeaderOptionProps) {
    const routePath = type === 'contacts' ? '/' : '/settings';
    const route = useLocation();

    return (
        <Link to={routePath} className={`py-2 w-3/6 flex justify-center items-center cursor-pointer transition-all hover:bg-violet-500 hover:bg-opacity-75 dark:hover:bg-opacity-30 hover:border-violet-500 dark:hover:border-violet-500 hover:text-white border-b-2 ${type === 'contacts' ? 'rounded-l-md' : 'rounded-r-md'} ${route.pathname === routePath ? 'border-violet-500' : 'text-gray-400 border-neutral-100 dark:border-slate-700'}`}>
            {type === 'contacts' ? (
                <div className="flex justify-center items-center">
                    <ViewGridIcon className="w-7 mr-1"/>
                    Contacts
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <CogIcon className="w-7 mr-1"/>
                    Settings
                </div>
            )}
        </Link>
    );
}