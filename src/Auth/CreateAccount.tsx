import { useRef, useState, KeyboardEvent, FormEvent } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import AuthComponent from '../Types/AuthComponent';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccount({ setAuthType }: AuthComponent) {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
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
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        }
    }

    return (
        <div className="bg-neutral-100 w-fit py-5 px-20 rounded-md m-auto text-center shadow-md">
            <div className="text-2xl font-medium pb-2">Create Account</div>
            <form className="flex flex-col" onSubmit={createAccount}>
                <Input placeholder="Email" type="email" ref={emailRef} onKeyDown={handleKeyPress} onChange={(e) => setIsDisabled(e.target.value === '' || passwordRef!.current!.value === '')}/>
                <Input placeholder="Password" type="password" ref={passwordRef} onChange={(e) => setIsDisabled(e.target.value === '' || emailRef!.current!.value === '')}/>
                <Button type="submit" disabled={isDisabled}>Create Account</Button>
                <div>or <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setAuthType('signIn')}>login</span>.</div>
            </form>
        </div>
    );
}