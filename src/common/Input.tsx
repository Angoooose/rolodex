import { forwardRef, InputHTMLAttributes, RefObject } from 'react';

interface InputProps {
    ref: RefObject<HTMLInputElement>,
}

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input
        {...props}
        ref={ref}
        className="bg-neutral-200 border-b-2 border-b-teal-400 rounded-sm outline-none my-2 py-1 px-2"
    />
});