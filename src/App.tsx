import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from '@/Pages/Dashboard';
import Error from '@/Pages/Error';
import HomePage from '@/Pages/HomePage';
import LoggedOut from '@/Pages/LoggedOut';

// Router configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: 'dashboard',
                element: <Dashboard />,
            },
        ],
    },
    {
        path: '/logout',
        element: <LoggedOut />,
        errorElement: <Error />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
