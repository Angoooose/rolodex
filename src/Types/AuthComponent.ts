import { Dispatch } from 'react';

export default interface AuthComponent {
    setAuthType: Dispatch<'signIn'|'create'>,
}