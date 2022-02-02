import { ButtonHTMLAttributes } from 'react';

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button 
        {...props}
        className="bg-teal-600 text-white py-1 rounded-md transition-all my-1 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed">{props.children}
    </button>
}