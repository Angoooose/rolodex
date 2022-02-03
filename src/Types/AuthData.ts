import Contact from './Contact';

export default interface AuthData {
    status: boolean,
    uid?: string,
    contacts?: Contact[],
}