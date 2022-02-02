import { PhoneIcon, MailIcon, HomeIcon } from '@heroicons/react/outline';

export default function ContactCard() {
    return (
        <div className="bg-neutral-100 p-5 w-fit rounded-md m-4 shadow-md flex-grow basis-0">
            <div className="text-lg font-medium">John</div>
            <div className="text-gray-500">Generic Company</div>
            <hr className="my-2 border-1 border-gray-300 rounded-md" />
            <div className="flex flex-row items-center my-1">
                <MailIcon className="w-5 text-gray-500 mr-1"/>
                <div>john@example.com</div>
            </div>
            <div className="flex flex-row items-center my-1">
                <PhoneIcon className="w-5 text-gray-500 mr-1"/>
                <div>(123)-456-7891</div>
            </div>
            <div className="flex flex-row items-center my-1">
                <HomeIcon className="w-5 text-gray-500 mr-1"/>
                <div>1234 S. Main St.</div>
            </div>
        </div>
    );
}