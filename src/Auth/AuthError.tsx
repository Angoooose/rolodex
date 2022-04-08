interface AuthErrorProps {
    message: string|undefined,
}

export default function AuthError({ message }: AuthErrorProps) {
    return (
        <div>
            {message !== undefined && (
                <div className="py-1.5 px-2.5 m-1 rounded-md text-white bg-red-500 bg-opacity-50">
                    {message}
                </div>
            )}
        </div>
    );
}