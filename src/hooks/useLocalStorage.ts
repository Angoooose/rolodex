import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T): [T|undefined, (newValue: T) => void] {
    const [value, setValue] = useState<T>();

    useEffect(() => {
        let value = localStorage.getItem(key);
        if (value === null) {
            localStorage.setItem(key, defaultValue as unknown as string);
            setValue(defaultValue);
        } else {
            if (typeof defaultValue === 'boolean') {
                let boolean = value === 'true';
                setValue(boolean as unknown as T);
            } else {
                setValue(value as unknown as T);
            }
        }
    }, []);

    const updateValue = (newValue: T): void => {
        localStorage.setItem(key, newValue as unknown as string);
        setValue(newValue);
    }

    return [value, updateValue];
}