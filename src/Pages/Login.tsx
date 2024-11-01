import { FC } from 'react';

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

import LoginContainer from '../components/Login/LoginContainer';

const Login: FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <Tabs defaultValue="Login" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="Login">Login with SSO</TabsTrigger>
            </TabsList>
            <TabsContent value="Login">
                <LoginContainer />
            </TabsContent>
        </Tabs>
    </div>
);

export default Login;
