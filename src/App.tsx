import React from 'react';

import DefaultDialog from './common/DefaultDialog';

function App() {
    // testing linear's link
    return (
        <div className="bg-primaryPetrol w-screen h-screen">
            <header className="flex justify-center items-center w-full h-full flex-col">
                <span className="text-offWhite text-xl">Boilerplate with Husky and TailwindCSS</span>
                <DefaultDialog
                    triggerText="Click Me"
                    dialogTitle="Test Modal"
                    dialogDescription="testing modals with radix primitives. I like the extensibility and accessibility but holy crap it is TRULY unstyled. Need to do all styling myself using Tailwind"
                />
            </header>
        </div>
    );
}

export default App;
