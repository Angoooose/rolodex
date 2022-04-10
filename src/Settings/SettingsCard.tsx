import { FunctionComponent } from 'react';

const SettingsCard: FunctionComponent = ({ children }) => {
    return (
        <div className="shadow-md rounded-md bg-white dark:bg-slate-700 mt-5 px-5 py-3 flex-grow">
            {children}
        </div>
    )
}

export default SettingsCard;