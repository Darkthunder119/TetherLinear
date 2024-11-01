import { FC } from 'react';

import { Link, Outlet } from 'react-router-dom';

import { useAuth } from '@/lib/helpers/useAuth';

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

const Navbar: FC = () => {
    const { signOut, currentUser } = useAuth();

    return (
        <div className="bg-shadesOffWhite w-screen h-screen">
            <div className="flex w-full h-full gap-2">
                <div className="text-shadesBlack text-xl w-1/12 flex flex-col border-r-4 border-shadesBlack px-4 justify-between">
                    <div className="py-4 flex gap-4 items-center">
                        <Avatar className="cursor-pointer">
                            <AvatarImage src={currentUser?.photoURL || undefined} />
                            <AvatarFallback>{currentUser?.displayName?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>{currentUser?.displayName}</div>
                    </div>
                    <div className="py-4 underline">
                        <Link
                            to="/logout"
                            onClick={async () => {
                                await signOut();
                            }}
                            className="cursor-pointer"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;
