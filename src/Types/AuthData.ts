import Contact from './Contact';

export default interface AuthData {
    status: boolean,
    uid?: string,
    email?: string,
    contacts?: Contact[],
}

export type AddContact = (newContact: Contact) => void;
export type UpdateContact = (id: number, newValues: Partial<Contact>) => void;
export type DeleteContact = (id: number) => void;

export interface Auth {
    authData: AuthData|undefined,
    signOut: () => void,
    addContact: AddContact,
    updateContact: UpdateContact,
    deleteContact: DeleteContact, 
}