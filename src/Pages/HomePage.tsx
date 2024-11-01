import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '@/components/NavBar/NavBar';
import { useAuth } from '@/lib/helpers/useAuth';

import Login from './Login';

const HomePage: FC = () => {
    const { currentUser } = useAuth();

    return (
        <>
            {currentUser ? (
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            ) : (
                <Login />
            )}
        </>
    );
};

export default HomePage;
