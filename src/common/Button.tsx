import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary'|'secondary'|'danger',
}

export default function Button(props: ButtonProps) {
    return <button 
        {...props}
        className={`${props.className} py-1 px-2 rounded-md transition-all my-1 disabled:opacity-50 disabled:cursor-not-allowed
            ${props.color === 'secondary' ? (
                'text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-slate-700'
            ) : (`
                text-white
                ${props.color === 'danger' ? (
                    'bg-red-600 hover:bg-red-700'
                ) : (
                    'bg-violet-500 hover:bg-violet-600'
                )}
            `)}
        `}>{props.children}
    </button>
}