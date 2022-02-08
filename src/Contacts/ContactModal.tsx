import { Dispatch } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Contact from '../Types/Contact';

import { StarIcon, PencilIcon, TrashIcon, PhoneIcon, MailIcon, HomeIcon, CakeIcon, DocumentTextIcon } from '@heroicons/react/outline';
import { UpdateContact } from '../Types/AuthData';

interface ContactModalProps {
    contact: Contact|null,
    setContact: Dispatch<Contact|null>,
    updateContact: UpdateContact,
}

export default function ContactModal({ contact, setContact, updateContact }: ContactModalProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(contact !== undefined && contact !== null);
    }, [contact]);

    const handleClose = () => {
        setIsOpen(false);
        setContact(null);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          maxWidth: 475,
          minWidth: 475,
          boxShadow: '0px 3px 10px 3px rgba(0,0,0,0.4)',
          border: 'none',
        },
    };

    if (!contact) return <div/>;

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
            <div className="py-3 px-5 bg-violet-500 text-white flex align-center justify-between">
                <div>
                    <div className="text-2xl font-medium">{contact?.name}</div>
                    {contact?.company && <div className="text-neutral-200">{contact.company}</div>}
                </div>
                <div className="flex items-center">
                    <StarIcon className={`p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600 ${contact.isFavorited ? 'text-yellow-400' : ''}`} onClick={() => updateContact(4, { isFavorited: !contact.isFavorited }).then((res) => setContact(res as Contact))} />
                    <PencilIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600"/>
                    <TrashIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer text-red-500 hover:bg-violet-600"/>
                </div>
            </div>
            <div className="py-3 px-5">
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
                <div className="mt-5">
                    <div className="flex items-center text-gray-500">
                        <DocumentTextIcon className="w-5 mr-1"/>
                        Notes
                    </div>
                    <div className="bg-neutral-100 p-2 rounded-md mt-1 border">
                        {contact.notes ? (
                            <div>{contact.notes}</div>
                        ) : (
                            <div className="text-center">None.</div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
}