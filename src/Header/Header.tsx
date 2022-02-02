import { ViewGridIcon, CogIcon } from '@heroicons/react/outline';

export default function Header() {
    return (
        <header className="bg-neutral-100 flex text-2xl font-medium rounded-md shadow-md select-none">
            <div className="flex py-2 w-3/6 justify-center items-center cursor-pointer transition-all rounded-l-md hover:bg-blue-400 hover:text-white border-blue-400 border-b-2">
                <ViewGridIcon className="w-7 mr-1"/>
                Contacts
            </div>
            <div className="flex py-2 w-3/6 justify-center items-center cursor-pointer transition-all rounded-r-md hover:bg-blue-400 hover:text-white">
                <CogIcon className="w-7 mr-1"/>
                Settings
            </div>
        </header>
    );
}