import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id="root" path="/" element={<HomePage />} errorElement={<Error />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="404" element={<Error type="404" />} />
            <Route path="*" element={<Error type="404" />} />
        </Route>,
    ),
);

const App = () => <RouterProvider router={router} />;

export default App;
