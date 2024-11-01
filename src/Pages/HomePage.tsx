import { Outlet } from 'react-router-dom';

import Navbar from '@/components/NavBar/NavBar';

import Login from './Login';

const test = false;

const HomePage = () => (
    <>
        {test ? (
            <div>
                <Navbar />
                <Outlet />
            </div>
        ) : (
            <Login />
        )}
    </>
);

export default HomePage;
