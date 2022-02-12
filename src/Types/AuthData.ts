import Contact from './Contact';

export default interface AuthData {
    status: boolean,
    uid?: string,
    contacts?: Contact[],
}

export type AddContact = (newContact: Contact) => void;

export type UpdateContact = (id: number, newValues: Partial<Contact>) => void;