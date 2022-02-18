import { ViewGridAddIcon } from '@heroicons/react/outline'
import { Dispatch } from 'react';

interface CreateCardProps {
    setIsModalOpen: Dispatch<boolean>,
}

export default function CreateCard({ setIsModalOpen }: CreateCardProps) {
    return (
        <div onClick={() => setIsModalOpen(true)} className="p-5 w-fit rounded-md m-4 border-2 border-neutral-400 dark:border-slate-600 border-dashed text-neutral-600 dark:text-slate-600 flex flex-col justify-center items-center cursor-pointer transition-all hover:text-violet-500 hover:border-violet-500 dark:hover:text-violet-500 dark:hover:border-violet-500 hover:border-solid flex-grow basis-0">
            <ViewGridAddIcon className="w-6" />
            <div className="text-md font-medium select-none mt-1 whitespace-nowrap">New Contact</div>
        </div>
    );
}