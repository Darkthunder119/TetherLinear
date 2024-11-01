import { useState, useEffect, createContext, FC, ReactNode } from 'react';

import { User, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, Auth } from 'firebase/auth';

import SkeletonCard from '@/components/Skeleton/SkeletonCard';
import { useToast } from '@/hooks/use-toast';

import auth from '../firebase';

type AuthContextType = {
    currentUser: User | null;
    signIn: (auth: Auth, provider: string) => Promise<void>;
    signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

const returnedProvider = (provider: string) => {
    switch (provider) {
        case 'GOOGLE':
            return new GoogleAuthProvider();
        default:
            return new GithubAuthProvider();
    }
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signIn = async (auth: Auth, provider: string) => {
        try {
            await signInWithPopup(auth, returnedProvider(provider));
        } catch (error) {
            toast({
                title: 'An Error Occurred!',
                description: `${error}`,
            });
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            toast({
                title: 'An Error Occurred!',
                description: `${error}`,
            });
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <SkeletonCard />
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
