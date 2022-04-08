export default function NotFound() {
    return (
        <div className="w-full mt-10 max-w-xs m-auto flex flex-col justify-center items-center">
            <div className="font-medium text-lg -mb-2 text-violet-600 dark:text-violet-500">Oops!</div>
            <div className="text-6xl font-bold">404</div>
            <hr className="border-neutral-400 dark:border-slate-500 w-full my-1"/>
            <div className="text-neutral-600 dark:text-gray-400">Looks like you typed in an invalid URL.</div>
        </div>
    );
}