export default interface Contact {
    id: number,
    name: string,
    isFavorited: boolean,
    company?: string,
    email?: string,
    phone?: string,
    address?: string,
    birthday?: string,
    notes?: string,
}