import ContactCard from './ContactCard';
import CreateCard from './CreateCard';

import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Contacts() {
    const [viewType, setViewType] = useState<'grid'|'list'>('grid');

    return (
        <div className="py-10">
            <div className="flex justify-between">
                <div className="text-3xl font-medium">Contacts</div>
                <div className="bg-neutral-100 flex p-1 rounded-md">
                    <ViewGridIcon className={`w-8 cursor-pointer transition-all ${viewType === 'grid' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('grid')}/>
                    <ViewListIcon className={`w-8 cursor-pointer transition-all ${viewType === 'list' ? 'text-black' : 'text-gray-500'}`} onClick={() => setViewType('list')}/>
                </div>
            </div>
            <div className={`flex -mx-4 flex-wrap ${viewType === 'list' ? 'flex-col justify-center items-center' : ''}`}>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <CreateCard/>
            </div>
        </div>
    )
}