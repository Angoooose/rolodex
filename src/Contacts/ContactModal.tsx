import { Dispatch, useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Contact from '../Types/Contact';

import Input from '../common/Input';

import { StarIcon, PencilIcon, TrashIcon, PhoneIcon, MailIcon, HomeIcon, CakeIcon, DocumentTextIcon, CheckIcon } from '@heroicons/react/outline';
import { UpdateContact } from '../Types/AuthData';

interface ContactModalProps {
    contact: Contact|null,
    setContact: Dispatch<Contact|null>,
    updateContact: UpdateContact,
}

export default function ContactModal({ contact, setContact, updateContact }: ContactModalProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const editEmailRef = useRef<HTMLInputElement>(null);
    const editPhoneRef = useRef<HTMLInputElement>(null);
    const editAddressRef = useRef<HTMLInputElement>(null);
    const editBirthdayRef = useRef<HTMLInputElement>(null);
    const editNotesRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setIsOpen(contact !== undefined && contact !== null);
    }, [contact]);

    const handleClose = () => {
        setIsOpen(false);
        setIsEdit(false);
        setContact(null);
    }

    const handleEditSave = () => {
        if (contact === null) return;

        setIsEdit(false);
        updateContact(contact.id, {
            email: editEmailRef.current?.value,
            phone: editPhoneRef.current?.value,
            address: editAddressRef.current?.value,
            birthday: editBirthdayRef.current?.value,
            notes: editNotesRef.current?.value,
        });
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
                <div className="flex flex-col justify-center">
                    <div className="text-2xl font-medium">{contact?.name}</div>
                    {contact?.company && <div className="text-neutral-200">{contact.company}</div>}
                </div>
                <div className="flex items-center">
                    <StarIcon className={`p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600 ${contact.isFavorited ? 'text-yellow-400' : ''}`} onClick={() => updateContact(contact.id, { isFavorited: !contact.isFavorited })} />
                    {!isEdit ? (
                        <PencilIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600" onClick={() => setIsEdit(true)}/>
                    ) : (
                        <CheckIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600" onClick={() => handleEditSave()}/>
                    )}
                    <TrashIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer text-red-500 hover:bg-violet-600"/>
                </div>
            </div>
            <div className="py-3 px-5">
                {!isEdit ? (
                    <div>
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
                ) : (
                    <div>
                        <Input className="my-2" placeholder="Email" defaultValue={contact.email} icon={MailIcon} ref={editEmailRef}/>
                        <Input className="my-2" placeholder="Phone" defaultValue={contact.phone} icon={PhoneIcon} ref={editPhoneRef}/>
                        <Input className="my-2" placeholder="Address" defaultValue={contact.address} icon={HomeIcon} ref={editAddressRef}/>
                        <Input className="my-2" placeholder="Birthday" type="date" defaultValue={contact.birthday} icon={CakeIcon} ref={editBirthdayRef}/>
                    </div>
                )}
                <div className="mt-5">
                    <div className="flex items-center text-gray-500">
                        <DocumentTextIcon className="w-5 mr-1"/>
                        Notes
                    </div>
                    {!isEdit ? (
                            <div className="bg-neutral-100 p-2 rounded-md mt-1 border">
                                {contact.notes ? (
                                    <div>{contact.notes}</div>
                                ) : (
                                    <div className="text-center">None.</div>
                                )}
                            </div>
                        ) : (
                            <textarea
                                className="w-full border shadow-sm border-neutral-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all rounded-md outline-none py-1 px-2"
                                defaultValue={contact.notes}
                                ref={editNotesRef}
                            />
                    )}
                </div>
            </div>
        </Modal>
    );
}