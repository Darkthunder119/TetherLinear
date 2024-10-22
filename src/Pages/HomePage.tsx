import { Outlet } from 'react-router-dom';

const HomePage = () => (
    <div className="bg-primaryPetrol w-screen h-screen">
        <div className="flex w-full h-full gap-2">
            <div className="text-offWhite text-xl w-1/5 flex items-center flex-col border-r-4 border-secondaryWheat-500">
                <div>Boilerplate updated for Oct 2024</div>
                <div>Testing left hand pane</div>
            </div>
            <Outlet />
        </div>
    </div>
);

export default HomePage;
