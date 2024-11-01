import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import auth from '@/lib/firebase';
import { useAuth } from '@/lib/helpers/useAuth';

const GoogleLogin: FC = () => {
    const { signIn } = useAuth();

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Google</CardTitle>
                    <CardDescription>Use your Google Account to Login</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="outline" className="bg-gray-50" onClick={() => signIn(auth, 'GOOGLE')}>
                        Login with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default GoogleLogin;
