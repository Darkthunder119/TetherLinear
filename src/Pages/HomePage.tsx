import { Outlet } from 'react-router-dom';

const user = 'userinfo'; // this needs to be a boolean check for permissions, in case of Firebase can be if user exists in context etc etc;

const HomePage = () => (
    <div className="bg-primaryPetrol w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full flex-col">
            <span className="text-offWhite text-xl">Boilerplate with Husky and TailwindCSS updated for Oct 2024</span>

            {user ? <Outlet /> : <div>Login Container Goes here </div>}
        </div>
    </div>
);

export default HomePage;
