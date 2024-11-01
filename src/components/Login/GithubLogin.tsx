import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import auth from '@/lib/firebase';
import { useAuth } from '@/lib/helpers/useAuth';

import { Button } from '../ui/button';


const GithubLogin: FC = () => {
    const { signIn } = useAuth();

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Use your GitHub Account to Login</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => signIn(auth, 'GITHUB')}>Login with GitHub</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default GithubLogin;
