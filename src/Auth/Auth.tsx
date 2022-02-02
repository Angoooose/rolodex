import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import { useState } from 'react';

export default function Auth() {
    const [authType, setAuthType] = useState<'signIn'|'create'>('signIn');

    return authType === 'signIn' ? <SignIn setAuthType={setAuthType}/> : <CreateAccount setAuthType={setAuthType}/>;
}