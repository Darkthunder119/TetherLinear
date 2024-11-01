import React from 'react';

import { LogIn, Home, AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const LoggedOut = () => {
    // If you have auth state management, you might want to clear any remaining tokens/state here
    React.useEffect(() => {
        // Clear any auth tokens from localStorage if needed
        localStorage.removeItem('authToken');
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="max-w-md w-full space-y-6">
                {/* Status Alert */}
                <Alert className="border-blue-200 bg-blue-50">
                    <AlertCircle className="h-5 w-5" color="#005f69" />
                    <AlertTitle className="text-primaryPetrol">Successfully Logged Out</AlertTitle>
                    <AlertDescription className="text-primaryPetrol">
                        You have been securely logged out of your account.
                    </AlertDescription>
                </Alert>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primaryPetrol text-offWhite hover:bg-secondary/90 transition-colors"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Return Home
                    </a>
                </div>

                {/* Additional Information */}
                <div className="text-center mt-8 text-sm text-shadesVeryDarkGrey">
                    <p>Thank you for using our application.</p>
                    <p className="mt-2">
                        For security reasons, please close your browser if you&apos;re on a public computer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoggedOut;
