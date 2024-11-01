import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const LoginContainer: FC = () => (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Google</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    </div>
);

export default LoginContainer;
