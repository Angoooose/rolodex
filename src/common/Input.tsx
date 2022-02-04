import { forwardRef, InputHTMLAttributes, RefObject } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    isRequired?: boolean,
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <div className="my-0.5">
        {props.label && <div>{props.isRequired && <span className="text-red-600 font-bold">* </span>}{props.label}</div>}
        <input
            {...props}
            ref={ref}
            className={`${props.className} border shadow-sm border-teal-400 focus:ring-1 focus:ring-violet-500 focus:invalid:ring-red-500 focus:border-violet-500 invalid:border-red-500 focus:invalid:border-red-500 transition-all rounded-md outline-none py-1 px-2`}
        />
    </div>
});