import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import HomePage from './Pages/HomePage';

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
]);

const App = () => <RouterProvider router={router} />;

export default App;
