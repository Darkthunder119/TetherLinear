import { FC } from 'react';

import { Link, Outlet } from 'react-router-dom';

import { useAuth } from '@/lib/helpers/useAuth';

const Navbar: FC = () => {
    const { signOut, currentUser } = useAuth();

    return (
        <div className="bg-shadesBlack w-screen h-screen">
            <div className="flex w-full h-full gap-2">
                <div className="text-offWhite text-xl w-1/12 flex flex-col border-r-4 border-secondaryWheat-500 px-4 justify-between">
                    <div className="py-4">
                        <div>Hi {currentUser?.displayName}</div>
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
