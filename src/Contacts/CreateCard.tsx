import { ViewGridAddIcon } from '@heroicons/react/outline'

export default function CreateCard() {
    return (
        <div className="p-5 w-fit rounded-md m-4 border-2 border-neutral-400 border-dashed text-neutral-600 flex flex-col justify-center items-center cursor-pointer transition-all hover:text-blue-500 hover:border-blue-500 hover:border-solid flex-grow basis-0">
            <ViewGridAddIcon className="w-6" />
            <div className="text-md font-medium select-none mt-1">New Contact</div>
        </div>
    );
}