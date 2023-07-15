import { Outlet } from 'react-router-dom';

import DefaultDialog from '../common/DefaultDialog';

const user = 'userinfo'; // this needs to be a boolean check for permissions, in case of Firebase can be if user exists in context etc etc;

const HomePage = () => (
    <div className="bg-primaryPetrol w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full flex-col">
            <span className="text-offWhite text-xl">Boilerplate with Husky and TailwindCSS</span>
            <DefaultDialog
                triggerText="Click Me"
                dialogTitle="Test Modal"
                dialogDescription="testing modals with radix primitives. I like the extensibility and accessibility but holy crap it is TRULY unstyled. Need to do all styling myself using Tailwind"
            />
            {user ? <Outlet /> : <div>Login Container Goes here </div>}
        </div>
    </div>
);

export default HomePage;
