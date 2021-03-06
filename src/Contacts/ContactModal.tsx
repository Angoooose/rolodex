import { Dispatch, useState, useEffect, useRef, useContext } from 'react';
import Modal from 'react-modal';
import Contact from '../Types/Contact';
import Input from '../common/Input';
import AuthContext from '../contexts/AuthContext';
import { StarIcon, PencilIcon, TrashIcon, PhoneIcon, MailIcon, HomeIcon, CakeIcon, DocumentTextIcon, CheckIcon } from '@heroicons/react/outline';
import ThemeContext from '../contexts/ThemeContext';
import TransparentInput from '../common/TransparentInput';

interface ContactModalProps {
    contact: Contact|null,
    setContact: Dispatch<Contact|null>,
}

export default function ContactModal({ contact, setContact }: ContactModalProps) {
    const { updateContact, deleteContact } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const editNameRef = useRef<HTMLInputElement>(null);
    const editCompanyRef = useRef<HTMLInputElement>(null);
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
            name: editNameRef.current?.value ? editNameRef.current?.value : contact.name,
            company: editCompanyRef.current?.value,
            email: editEmailRef.current?.value,
            phone: editPhoneRef.current?.value,
            address: editAddressRef.current?.value,
            birthday: editBirthdayRef.current?.value,
            notes: editNotesRef.current?.value,
        });
    }

    const handleDelete = () => {
        if (contact === null) return;

        setIsOpen(false);
        setIsEdit(false);
        setContact(null);
        deleteContact(contact.id);
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
          backgroundColor: document.documentElement.classList.contains('dark') ? '#1e293b' : 'white',
          color: document.documentElement.classList.contains('dark') ? 'white' : '',
        },
    };

    if (!contact) return <div/>;

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose} overlayClassName="w-full h-full fixed inset-0 bg-neutral-300 bg-opacity-60 dark:bg-slate-700 dark:bg-opacity-60">
            <div className="py-3 px-5 bg-violet-500 text-white flex align-center justify-between">
                {isEdit ? (
                    <div className="flex flex-col justify-center bg-violet-500">
                        <TransparentInput className="text-2xl font-medium" defaultValue={contact.name} placeholder="Name" ref={editNameRef}/>
                        <TransparentInput className="text-neutral-200" defaultValue={contact.company} placeholder="Company" ref={editCompanyRef}/>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center">
                        <div className="text-2xl font-medium">{contact?.name}</div>
                        {contact?.company && <div className="text-neutral-200">{contact.company}</div>}
                    </div>
                )}
                <div className="flex items-center">
                    <StarIcon className={`p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600 ${contact.isFavorited ? 'text-yellow-400' : ''}`} onClick={() => updateContact(contact.id, { isFavorited: !contact.isFavorited })} />
                    {!isEdit ? (
                        <PencilIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600" onClick={() => setIsEdit(true)}/>
                    ) : (
                        <CheckIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer hover:bg-violet-600" onClick={handleEditSave}/>
                    )}
                    <TrashIcon className="p-2 w-10 h-fit rounded-md transition-all cursor-pointer text-red-500 hover:bg-violet-600" onClick={handleDelete}/>
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
                    <div className="flex items-center">
                        <DocumentTextIcon className="w-5 mr-1 text-gray-500"/>
                        Notes
                    </div>
                    {!isEdit ? (
                            <div className="bg-neutral-100 dark:bg-slate-700 dark:border-slate-600 dark: p-2 rounded-md mt-1 border">
                                {contact.notes ? (
                                    <div>{contact.notes}</div>
                                ) : (
                                    <div className="text-center">None.</div>
                                )}
                            </div>
                        ) : (
                            <textarea
                                className="dark:bg-slate-700 dark:border-slate-500 w-full border shadow-sm border-neutral-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all rounded-md outline-none py-1 px-2"
                                defaultValue={contact.notes}
                                ref={editNotesRef}
                            />
                    )}
                </div>
            </div>
        </Modal>
    );
}