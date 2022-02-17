import { FunctionComponent } from 'react';

const SettingsCard: FunctionComponent = ({ children }) => {
    return (
        <div className="shadow-md rounded-md bg-white my-10 px-5 py-3 mx-3 w-full">
            {children}
        </div>
    )
}

export default SettingsCard;