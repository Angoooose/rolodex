import { Dispatch, FormEvent, useContext, useRef } from 'react';
import Modal from 'react-modal';
import Button from '../common/Button';
import Input from '../common/Input';
import AuthContext from '../contexts/AuthContext';

interface NewContactModalProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>,
}

export default function NewContactModal({ isOpen, setIsOpen }: NewContactModalProps) {
    const { authData, addContact } = useContext(AuthContext);

    const nameRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null); 
    const emailRef = useRef<HTMLInputElement>(null); 
    const phoneRef = useRef<HTMLInputElement>(null); 
    const addressRef = useRef<HTMLInputElement>(null); 
    const birthdayRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null); 

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
          boxShadow: '0px 3px 10px 3px rgba(0,0,0,0.4',
          border: 'none',
        },
    };
    
    const createContact = (e: FormEvent) => {
        e.preventDefault();

        if (authData?.contacts && nameRef.current?.value) {
            setIsOpen(false);
            addContact({
                id: authData.contacts.length + 1,
                name: nameRef.current.value,
                isFavorited: false,
                company: companyRef?.current?.value,
                email: emailRef?.current?.value,
                phone: phoneRef?.current?.value,
                address: addressRef?.current?.value,
                birthday: birthdayRef?.current?.value,
                notes: notesRef?.current?.value,
            });
        }
    }

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={() => setIsOpen(false)}>
            <div className="text-xl font-medium px-5 py-3 bg-violet-500 text-white">New Contact</div>
            <form onSubmit={(e) => createContact(e)}>
                <div className="px-5 py-2">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap">
                            <Input ref={nameRef} label="Name" placeholder="eg. John Doe" isRequired={true} className="mr-2"/>
                            <Input ref={companyRef} label="Company" placeholder="eg. Doe Computers" className="mr-2"/>
                            <Input ref={emailRef} label="Email" placeholder="eg. email@example.com" type="email" className="mr-2"/>
                            <Input ref={phoneRef} label="Phone" placeholder="eg. (123)-456-7891" type="tel" className="mr-2"/>
                            <Input ref={addressRef} label="Address" placeholder="eg. 123 S. Main St." className="mr-2"/>
                            <Input ref={birthdayRef} label="Birthday" type="date"/>
                        </div>
                        <div className="mt-3">
                            Notes
                            <textarea ref={notesRef} className="w-full border shadow-sm border-neutral-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all rounded-md outline-none py-1 px-2"/>
                        </div>
                    </div>
                </div>
                <div className="mt-3 pb-3 px-5 flex justify-end">
                    <Button className="mx-1" color="secondary" onClick={() => setIsOpen(false)} type="button">Close</Button>
                    <Button className="mx-1">Create Contact</Button>
                </div>
            </form>
        </Modal>
    );
}