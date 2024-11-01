import { FC } from 'react';

import GithubLogin from '@/components/Login/GithubLogin';
import GoogleLogin from '@/components/Login/GoogleLogin';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';


const Login: FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <Tabs defaultValue="google" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="google">Login with Google</TabsTrigger>
                <TabsTrigger value="github">Login with GitHub</TabsTrigger>
            </TabsList>
            <TabsContent value="google">
                <GoogleLogin />
            </TabsContent>
            <TabsContent value="github">
                <GithubLogin />
            </TabsContent>
        </Tabs>
    </div>
);

export default Login;
