import HeaderOption from './HeaderOption';

export default function Header() {
    return (
        <header className="bg-white dark:bg-slate-700 flex text-2xl font-medium rounded-md shadow-md select-none">
            <HeaderOption type="contacts"/>
            <HeaderOption type="settings"/>
        </header>
    );
}