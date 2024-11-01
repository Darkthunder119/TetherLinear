import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { Button } from '../ui/button';

const GithubLogin: FC = () => (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>GitHub</CardTitle>
                <CardDescription>Use your GitHub Account to Login</CardDescription>
            </CardHeader>
            <CardContent>
                <Button>Login with GitHub</Button>
            </CardContent>
        </Card>
    </div>
);

export default GithubLogin;
