import { PhoneIcon, MailIcon, HomeIcon, CakeIcon } from '@heroicons/react/outline';
import Contact from '../Types/Contact';
import { Dispatch } from 'react';

interface ContactCardProps {
    contact: Contact,
    setOpenedContact: Dispatch<Contact>,
}

export default function ContactCard({ contact, setOpenedContact }: ContactCardProps) {
    return (
        <div className="bg-white dark:bg-slate-700 p-5 w-fit rounded-md m-4 shadow-md flex-grow basis-0 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1" onClick={() => setOpenedContact(contact)}>
            <div className="text-lg font-medium">{contact.name}</div>
            {contact.company && <div className="text-gray-500 dark:text-gray-400">{contact.company}</div>}
            {(contact.email || contact.address || contact.phone || contact.birthday) && <hr className="my-2 border-1 border-gray-300 dark:border-gray-500 rounded-md" />}
            {contact.email && (
                <div className="flex flex-row items-center my-1">
                    <MailIcon className="w-5 text-gray-500 mr-1"/>
                    <div>{contact.email}</div>
                </div>
            )}
            {contact.phone && (
                <div className="flex flex-row items-center my-1">
                    <PhoneIcon className="w-5 text-gray-500 mr-1"/>
                    <div>{contact.phone}</div>
                </div>
            )}
            {contact.address && (
                <div className="flex flex-row items-center my-1">
                    <HomeIcon className="w-5 text-gray-500 mr-1"/>
                    <div>{contact.address}</div>
                </div>
            )}
            {contact.birthday && (
                <div className="flex flex-row items-center my-1">
                    <CakeIcon className="w-5 text-gray-500 mr-1"/>
                    <div>{contact.birthday}</div>
                </div>
            )}
        </div>
    );
}