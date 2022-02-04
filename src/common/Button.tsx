import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary'|'secondary',
}

export default function Button(props: ButtonProps) {
    return <button 
        {...props}
        className={`${props.className} ${props.color === 'secondary' ? 'text-black hover:bg-neutral-200' : 'bg-violet-500 hover:bg-violet-600 text-white'} py-1 px-2 rounded-md transition-all my-1 disabled:opacity-50 disabled:cursor-not-allowed`}>{props.children}
    </button>
}