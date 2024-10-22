import { Link, Outlet } from 'react-router-dom';

const HomePage = () => (
    <div className="bg-primaryPetrol w-screen h-screen">
        <div className="flex w-full h-full gap-2">
            <div className="text-offWhite text-xl w-1/12 flex flex-col border-r-4 border-secondaryWheat-500 px-4 justify-between">
                <div className="py-4">
                    <div>Home</div>
                    <div>Page1</div>
                </div>
                <div className="py-4 underline">
                    <Link to="/logout">Log Out</Link>
                </div>
            </div>
            <Outlet />
        </div>
    </div>
);

export default HomePage;
