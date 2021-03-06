import { useRef, KeyboardEvent, useState, FormEvent } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import AuthError from './AuthError';
import AuthComponent from '../Types/AuthComponent';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn({ setAuthType }: AuthComponent) {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [errorField, setErrorField] = useState<string>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            passwordRef.current?.focus();
        }
    }

    const signIn = (e: FormEvent) => {
        e.preventDefault();

        if (!isDisabled && emailRef.current?.value && passwordRef.current?.value) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).catch((error) => {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                    setErrorField('Invalid email or password.');
                } else if (error.code === 'auth/too-many-requests') {
                    setErrorField('Too many requests.');
                } else {
                    setErrorField('Unknown Error.');
                }
            });
        }
    }

    return (
        <div className="bg-neutral-100 dark:bg-slate-700 w-fit py-5 px-20 rounded-md m-auto text-center shadow-md">
            <div className="text-2xl font-medium pb-2">Sign In</div>
            <AuthError message={errorField}/>
            <form className="flex flex-col" onSubmit={signIn}>
                <Input placeholder="Email" type="email" ref={emailRef} onKeyDown={handleKeyPress}  onChange={(e) => setIsDisabled(e.target.value === '' || passwordRef!.current!.value === '')}/>
                <Input placeholder="Password" type="password" ref={passwordRef} onChange={(e) => setIsDisabled(e.target.value === '' || emailRef!.current!.value === '')}/>
                <Button className="mx-1" disabled={isDisabled}>Sign In</Button>
                <div>or <span className="text-violet-400 cursor-pointer hover:underline" onClick={() => setAuthType('create')}>create an account</span>.</div>
            </form>
        </div>
    );
}