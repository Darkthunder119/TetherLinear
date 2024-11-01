import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'urql';

import { AuthProvider } from '@/lib/context/AuthContext';
import { client } from '@/lib/urqlClient';
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

const App = () => (
    <AuthProvider>
        <Provider value={client}>
            <RouterProvider router={router} />
        </Provider>
    </AuthProvider>
);

export default App;
