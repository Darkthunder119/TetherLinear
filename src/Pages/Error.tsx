import { Link, useRouteError, ErrorResponse } from 'react-router-dom';

const Error = () => {
    const error = useRouteError() as ErrorResponse;

    console.error(error);

    return (
        <div className="bg-primaryPetrol w-screen h-screen text-offWhite text-xl flex justify-center items-center flex-col">
            <div>{error.statusText || 'Oops! An unexpected error occurred'}</div>
            <Link to="/" className="underline">
                Return to Home Page
            </Link>
        </div>
    );
};

export default Error;
