import { ViewGridIcon, CogIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const route = useLocation();

    return (
        <header className="bg-neutral-100 flex text-2xl font-medium rounded-md shadow-md select-none">
            <Link to="/" className={`flex py-2 w-3/6 justify-center items-center cursor-pointer transition-all rounded-l-md hover:bg-violet-500 hover:border-violet-500 hover:text-white border-b-2 ${route.pathname === '/' ? 'border-violet-500 text-violet-500' : 'border-white'}`}>
                <ViewGridIcon className="w-7 mr-1"/>
                Contacts
            </Link>
            <Link to="/settings" className={`flex py-2 w-3/6 justify-center items-center cursor-pointer transition-all rounded-r-md hover:bg-violet-500 hover:border-violet-500 hover:text-white border-b-2 ${route.pathname === '/settings' ? 'border-violet-500 text-violet-500' : 'border-white'}`}>
                <CogIcon className="w-7 mr-1"/>
                Settings
            </Link>
        </header>
    );
}