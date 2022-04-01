import { InputHTMLAttributes, forwardRef } from 'react';

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input {...props} className={`bg-inherit outline-none placeholder-gray-300 ${props.className}`} ref={ref}/>
});