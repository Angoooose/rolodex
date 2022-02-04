import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../index';
import AuthData, { AddContact } from '../Types/AuthData';
import Contact from '../Types/Contact';

export default function useAuth(): [AuthData|undefined, () => Promise<void>, AddContact] {
    const [authData, setAuthData] = useState<AuthData>();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userData = await getDoc(doc(database, 'users', user.uid)).then(d => d.data());
                setAuthData({
                    status: true,
                    uid: user.uid,
                    contacts: userData?.contacts,
                });
            } else {
                setAuthData({ status: false });
            }
        });
    }, []);

    const realSignOut = () => signOut(auth);

    const addContact = (newContact: Contact) => {
        if (authData?.status !== true || !authData.uid || !authData.contacts) return;
        let newContacts = [...authData.contacts];
        newContacts.push(newContact);
        setAuthData({
            ...authData,
            contacts: newContacts,
        } as AuthData);

        updateDoc(doc(database, 'users', authData.uid), {
            contacts: newContacts,
        });
    }

    return [authData, realSignOut, addContact];
}