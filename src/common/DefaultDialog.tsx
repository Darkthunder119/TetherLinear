import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, DownloadIcon } from '@radix-ui/react-icons';
import './default.css';

interface DialogProps {
    triggerText: string;
    dialogTitle: string;
    dialogDescription: string;
}

const DefaultDialog = ({ triggerText, dialogTitle, dialogDescription }: DialogProps) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="text-isabelline text-xl bg-secondaryMango rounded-md p-2">{triggerText}</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="dialogOverlay" />
            <Dialog.Content className="dialogContent">
                <Dialog.Title className="text-shadesBlack text-lg my-2 pr-4">{dialogTitle}</Dialog.Title>
                <Dialog.Description className="text-shadesBlack text-sm my-1 pr-4">
                    {dialogDescription}
                </Dialog.Description>
                <div className="flex justify-end mt-4">
                    <Dialog.Close asChild>
                        <button className="successButtonWithIcon">
                            <DownloadIcon />
                            <span>Save Changes</span>
                        </button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                    <button className="closeButton" aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DefaultDialog;
