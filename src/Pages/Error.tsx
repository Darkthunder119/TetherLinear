import { Link, useRouteError, ErrorResponse } from 'react-router-dom';

const Error = () => {
    const error = useRouteError() as ErrorResponse;

    return (
        <div className="bg-shadesBlack w-screen h-screen text-offWhite text-xl flex justify-center items-center flex-col">
            <div className="flex justify-center items-center gap-2">
                <div>{error.statusText || 'Oops! An unexpected error occurred'}</div>
            </div>
            <Link to="/" className="underline">
                Return to Home Page
            </Link>
        </div>
    );
};

export default Error;
