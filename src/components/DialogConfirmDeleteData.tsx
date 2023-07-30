import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import deleteRegisterData from "../repository/deleteRegisterData.ts";
import deleteDocumentData from "../repository/deleteDocumentData.ts";
import supabase from "../db/DatabaseClient.ts";
import React, {Dispatch} from "react";
import {toast, ToastContainer} from "react-toastify";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    dataUser?: RegisterData;
    registerDatas?: RegisterData[];
    setRegisterDatas?: Dispatch<React.SetStateAction<RegisterData[] | undefined>>;
}

const DialogConfirmDeleteData = (props: DialogProps) => {

    const deleteData = async () => {
        const supabaseClient = supabase;
        const id: number = props.dataUser?.id!;
        deleteDocumentData(supabaseClient, id).then(() => deleteRegisterData(supabaseClient, id).then(value => value));

    }

    const handleConfirm = () => {
        deleteData().then(() => {
            const newData = props.registerDatas?.filter((value) => value.id != props.dataUser?.id);
            props.setRegisterDatas?.(newData);
            props.onClose();
            toast.success("Berhasil hapus data.");
        });
    }

    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Apakah anda yakin ingin menghapus data dengan NPM {props.dataUser?.npm}?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Setelah konfirmasi, maka seluruh data biodata
                        dan kelengkapan berkas akan dihapus secara permanent dari
                        database.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} autoFocus>Batal</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Konfirmasi
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer/>
        </>
    );
};

export default DialogConfirmDeleteData;