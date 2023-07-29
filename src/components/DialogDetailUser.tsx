import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import {useState} from "react";
import TableDetailUser from "./TableDetailUser.tsx";
import TableDocumentUser from "./TableDocumentUser.tsx";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    isLoading: boolean;
    dataUser?: RegisterData;
    documentType?: DocumentData;
}

enum showDialog {
    Table = "Table", Document = "Document"
}

const DialogDetailUser = (props: DialogProps) => {

    const [showDialogSelect, setShowDialogSelect] = useState<showDialog>(showDialog.Table)

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth={"lg"}
            fullWidth
        >
            <DialogTitle id="responsive-dialog-title">
                {`Detail Pendaftar NPM #${props.dataUser?.npm}`}
                <div className="flex gap-5 text-sm mt-5">
                    <button onClick={() => setShowDialogSelect(showDialog.Table)}
                            className={showDialogSelect == showDialog.Table ? 'font-bold bg-black text-white p-2' : ''}>Detail
                        User
                    </button>
                    <button onClick={() => setShowDialogSelect(showDialog.Document)}
                            className={showDialogSelect == showDialog.Document ? 'font-bold bg-black text-white p-2' : ''}>Data
                        Berkas
                    </button>
                </div>
            </DialogTitle>

            <DialogContent>
                {props.isLoading == true ?
                    <div className="flex justify-center items-center mt-10">Loading....</div> : <>
                        {showDialogSelect == showDialog.Table ? TableDetailUser(props.dataUser) : TableDocumentUser(props.documentType, props.dataUser?.npm)}
                    </>
                }


            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} autoFocus>
                    Tutup
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogDetailUser;