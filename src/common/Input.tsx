import { forwardRef, InputHTMLAttributes, ComponentType, ComponentProps } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    isRequired?: boolean,
    icon?: ComponentType<ComponentProps<'svg'>>,
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <div className="my-0.5 mx-1">
            {props.label && <div>{props.isRequired && <span className="text-red-600 font-bold">* </span>}{props.label}</div>}
            <div className={`w-full bg-white dark:bg-slate-700 flex items-center shadow-sm transition-all rounded-md border border-neutral-400 dark:border-slate-500 focus-within:ring-1 focus-within:ring-violet-500 focus-within:border-violet-500 ${props.className}`}>
                {props.icon && <props.icon className="w-5 ml-2 text-gray-500"/>}
                <input
                    {...props}
                    ref={ref}
                    className="w-full dark:bg-slate-700 dark:text-white rounded-md focus:invalid:ring-red-500 invalid:border-red-500 focus:invalid:border-red-500 outline-none py-1 px-2"
                />
            </div>
        </div>
    );
})