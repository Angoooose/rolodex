import { ViewGridIcon, ViewListIcon, SearchIcon } from '@heroicons/react/outline';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

import Contact from '../Types/Contact';
import ContactModal from './ContactModal';
import ContactCard from './ContactCard';
import CreateCard from './CreateCard';
import NewContactModal from './NewContactModal';
import Input from '../common/Input';

export default function Contacts() {
    const [viewType, setViewType] = useState<'grid'|'list'>('grid');
    const [isNewContactModalOpen, setIsNewContactModalOpen] = useState<boolean>(false);
    const [openedContact, setOpenedContact] = useState<Contact|null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const { authData } = useContext(AuthContext);
    
    useEffect(() => {
        if (authData?.status && authData.contacts) {
            if (openedContact !== null) {
                setOpenedContact(authData.contacts.find(c => c.id === openedContact.id) as Contact);
            }
        }
    }, [authData]);

    if (!authData?.contacts) return <div/>;

    return (
        <div className="py-10">
            <NewContactModal isOpen={isNewContactModalOpen} setIsOpen={setIsNewContactModalOpen}/>
            <ContactModal contact={openedContact} setContact={setOpenedContact}/>
            <div className="flex justify-between">
                <span className="text-3xl font-medium">Contacts</span>
                <div className="flex items-center">
                    <Input placeholder="Search" icon={SearchIcon} className="mr-5" onChange={(el) => setSearchValue(el.target.value)}/>
                    <div className="bg-white dark:bg-slate-700 flex p-1 rounded-md shadow-md">
                        <ViewGridIcon className={`w-8 cursor-pointer transition-all ${viewType === 'grid' ? 'text-black dark:text-white' : 'text-gray-500'}`} onClick={() => setViewType('grid')}/>
                        <ViewListIcon className={`w-8 cursor-pointer transition-all ${viewType === 'list' ? 'text-black dark:text-white' : 'text-gray-500'}`} onClick={() => setViewType('list')}/>
                    </div>
                </div>
            </div>
            <div className={`flex -mx-4 flex-wrap ${viewType === 'list' ? 'flex-col items-center' : ''}`}>
                {authData.contacts.filter(c => searchValue === '' || c.name.toLowerCase().includes(searchValue)).sort(c => c.isFavorited ? -1 : 1).map(contact => <ContactCard contact={contact} setOpenedContact={setOpenedContact}/>)}
                <CreateCard setIsModalOpen={setIsNewContactModalOpen}/>
            </div>
        </div>
    )
}