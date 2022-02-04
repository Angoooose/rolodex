import ContactCard from './ContactCard';
import CreateCard from './CreateCard';
import NewContactModal from './NewContactModal';

import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { AddContact } from '../Types/AuthData';
import Contact from '../Types/Contact';

interface ContactProps {
    contacts: Contact[],
    addContact: AddContact,
}

export default function Contacts({ contacts, addContact }: ContactProps) {
    const [viewType, setViewType] = useState<'grid'|'list'>('grid');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="py-10">
            <NewContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addContact={addContact}/>
            <div className="flex justify-between">
                <div className="text-3xl font-medium">Contacts</div>
                <div className="bg-neutral-100 flex p-1 rounded-md shadow-md">
                    <ViewGridIcon className={`w-8 cursor-pointer transition-all ${viewType === 'grid' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('grid')}/>
                    <ViewListIcon className={`w-8 cursor-pointer transition-all ${viewType === 'list' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('list')}/>
                </div>
            </div>
            <div className={`flex -mx-4 flex-wrap ${viewType === 'list' ? 'flex-col justify-center items-center' : ''}`}>
                {contacts.map(contact => <ContactCard contact={contact}/>)}
                <CreateCard setIsModalOpen={setIsModalOpen}/>
            </div>
        </div>
    )
}