import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const GoogleLogin: FC = () => (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Google</CardTitle>
                <CardDescription>Use your Google Account to Login</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="outline" className="bg-lightSeaGreen">
                    Login with Google
                </Button>
            </CardContent>
        </Card>
    </div>
);

export default GoogleLogin;
