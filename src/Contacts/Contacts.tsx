import ContactCard from './ContactCard';
import CreateCard from './CreateCard';
import NewContactModal from './NewContactModal';

import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import AuthData, { AddContact, UpdateContact } from '../Types/AuthData';
import Contact from '../Types/Contact';
import ContactModal from './ContactModal';

interface ContactProps {
    authData: AuthData,
    addContact: AddContact,
    updateContact: UpdateContact,
}

export default function Contacts({ authData, addContact, updateContact }: ContactProps) {
    const [viewType, setViewType] = useState<'grid'|'list'>('grid');
    const [isNewContactModalOpen, setIsNewContactModalOpen] = useState<boolean>(false);
    const [openedContact, setOpenedContact] = useState<Contact|null>(null);
    
    useEffect(() => {
        if (authData.status && authData.contacts) {
            if (openedContact !== null) {
                setOpenedContact(authData.contacts.find(c => c.id === openedContact.id) as Contact);
            }
        }
    }, [authData]);

    if (!authData.contacts) return <div/>;

    return (
        <div className="py-10">
            <NewContactModal isOpen={isNewContactModalOpen} setIsOpen={setIsNewContactModalOpen} addContact={addContact} contacts={authData.contacts}/>
            <ContactModal contact={openedContact} setContact={setOpenedContact} updateContact={updateContact}/>
            <div className="flex justify-between">
                <div className="text-3xl font-medium">Contacts</div>
                <div className="bg-neutral-100 flex p-1 rounded-md shadow-md">
                    <ViewGridIcon className={`w-8 cursor-pointer transition-all ${viewType === 'grid' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('grid')}/>
                    <ViewListIcon className={`w-8 cursor-pointer transition-all ${viewType === 'list' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('list')}/>
                </div>
            </div>
            <div className={`flex -mx-4 flex-wrap ${viewType === 'list' ? 'flex-col justify-center items-center' : ''}`}>
                {authData.contacts.sort(c => c.isFavorited ? -1 : 1).map(contact => <ContactCard contact={contact} setOpenedContact={setOpenedContact}/>)}
                <CreateCard setIsModalOpen={setIsNewContactModalOpen}/>
            </div>
        </div>
    )
}