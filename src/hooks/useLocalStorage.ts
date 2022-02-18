import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {
    const [value, setValue] = useState<T>(localStorage.getItem(key) ? localStorage.getItem(key) as unknown as T : defaultValue);

    useEffect(() => {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, defaultValue as unknown as string);
        }
    });

    const updateValue = (newValue: T): void => {
        localStorage.setItem(key, newValue as unknown as string);
        setValue(newValue);
    }

    return [value, updateValue];
}