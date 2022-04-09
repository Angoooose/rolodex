import { SearchIcon } from '@heroicons/react/outline';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

import Contact from '../Types/Contact';
import ContactModal from './ContactModal';
import ContactCard from './ContactCard';
import CreateCard from './CreateCard';
import NewContactModal from './NewContactModal';
import Input from '../common/Input';
import useDebounce from '../hooks/useDebounce';

export default function Contacts() {
    const [isNewContactModalOpen, setIsNewContactModalOpen] = useState<boolean>(false);
    const [openedContact, setOpenedContact] = useState<Contact|null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedSearchValue = useDebounce(searchValue, 500);
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
            <div className="flex justify-between flex-wrap">
                <span className="text-3xl font-medium">Contacts</span>
                <Input placeholder="Search" icon={SearchIcon} onChange={(el) => setSearchValue(el.target.value.toLowerCase())}/>
            </div>
            <div className="flex -mx-4 flex-wrap">
                {authData.contacts.filter(c => {
                    if (!debouncedSearchValue) return true;
                    let isValid: boolean = false;

                    Object.values(c).forEach((v) => {
                        if (typeof v !== 'string') return;
                        if (v.toLowerCase().includes(debouncedSearchValue)) isValid = true;
                    });

                    return isValid;
                }).sort(c => c.isFavorited ? -1 : 1).map(contact => <ContactCard contact={contact} setOpenedContact={setOpenedContact}/>)}
                <CreateCard setIsModalOpen={setIsNewContactModalOpen}/>
            </div>
        </div>
    );
}