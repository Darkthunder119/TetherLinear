import { Outlet } from 'react-router-dom';

import Login from './Login';
import Navbar from '../components/NavBar/NavBar';

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
