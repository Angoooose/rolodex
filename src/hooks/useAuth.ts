import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../index';
import AuthData from '../Types/AuthData';

export default function useAuth(): [AuthData|undefined, () => Promise<void>] {
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

    return [authData, realSignOut];
}