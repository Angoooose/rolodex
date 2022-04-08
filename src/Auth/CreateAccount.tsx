import { useRef, useState, KeyboardEvent, FormEvent } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import AuthError from './AuthError';
import AuthComponent from '../Types/AuthComponent';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { database } from '../index';

export default function CreateAccount({ setAuthType }: AuthComponent) {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [errorField, setErrorField] = useState<string>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            passwordRef.current?.focus();
        }
    }

    const createAccount = (e: FormEvent) => {
        e.preventDefault();

        if (!isDisabled && emailRef.current?.value && passwordRef.current?.value) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(res => {
                setDoc(doc(database, 'users', res.user.uid), {
                    uid: res.user.uid,
                    contacts: [],
                });
            }).catch((error) => {
                if (error.code === 'auth/weak-password') {
                    setErrorField('Password too weak.');
                } else if (error.code === 'auth/email-already-in-use') {
                    setErrorField('Account already exists.');
                }  else {
                    setErrorField('Unknown Error.');
                }
            });
        }
    }

    return (
        <div className="bg-neutral-100 dark:bg-slate-700 w-fit py-5 px-20 rounded-md m-auto text-center shadow-md">
            <div className="text-2xl font-medium pb-2">Create Account</div>
            <AuthError message={errorField}/>
            <form className="flex flex-col" onSubmit={createAccount}>
                <Input placeholder="Email" type="email" ref={emailRef} onKeyDown={handleKeyPress} onChange={(e) => setIsDisabled(e.target.value === '' || passwordRef!.current!.value === '')}/>
                <Input placeholder="Password" type="password" ref={passwordRef} onChange={(e) => setIsDisabled(e.target.value === '' || emailRef!.current!.value === '')}/>
                <Button className="mx-1" type="submit" disabled={isDisabled}>Create Account</Button>
                <div>or <span className="text-violet-400 cursor-pointer hover:underline" onClick={() => setAuthType('signIn')}>login</span>.</div>
            </form>
        </div>
    );
}