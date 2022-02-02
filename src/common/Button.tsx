import { ButtonHTMLAttributes } from 'react';

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button 
        {...props}
        className="bg-teal-400 text-white py-1 rounded-sm transition-opacity my-1 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed">{props.children}
    </button>
}