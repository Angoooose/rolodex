interface SwitchProps {
    label: string,
    switched: boolean,
    onSwitch?: () => any,
}

export default function Switch({ label, switched, onSwitch }: SwitchProps) {
    return (
        <label className="flex items-center justify-between cursor-pointer text-lg select-none my-2">
            {label}
            <input type="checkbox" className="appearance-none peer" checked={switched} onChange={onSwitch}/>
            <span className="ml-2 w-14 h-8 bg-neutral-300 dark:bg-slate-900 shadow-sm flex items-center rounded-full p-1 transition-all duration-300 peer-checked:bg-green-400 after:bg-white after:dark:bg-slate-400 after:dark:peer-checked:bg-white after:w-6 after:h-6 after:rounded-full after:transition-all after:duration-300 after:peer-checked:translate-x-full"/>
        </label>
    );
}