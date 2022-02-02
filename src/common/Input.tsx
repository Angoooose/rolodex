import { forwardRef, InputHTMLAttributes, RefObject } from 'react';

interface InputProps {
    ref: RefObject<HTMLInputElement>,
}

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input
        {...props}
        ref={ref}
        className="border shadow-sm border-teal-400 focus:ring-1 focus:ring-blue-400 focus:invalid:ring-red-500 focus:border-blue-400 invalid:border-red-500 focus:invalid:border-red-500 transition-all rounded-md outline-none my-2 py-1 px-2"
    />
});