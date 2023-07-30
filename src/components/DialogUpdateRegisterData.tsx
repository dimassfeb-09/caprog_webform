import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import React, {useState} from "react";
import TableUpdateRegisterData from "./TableUpdateRegisterData.tsx";
import updateRegisterData from "../repository/updateRegisterData.ts";
import {toast} from "react-toastify";
import {ClipLoader} from "react-spinners";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    isLoading: boolean;
    dataUser?: RegisterData;
    setNewRegisterDatas: React.Dispatch<React.SetStateAction<RegisterData[] | undefined>>
    registerDatas: RegisterData[] | undefined,
}


const DialogUpdateRegisterData = (props: DialogProps) => {

    const [newData, setNewData] = useState<RegisterData | null>(null);

    const handleSubmit = () => {
        if (newData != null) {
            updateRegisterData(newData.id, newData).then(() => {
                const index: number = props.registerDatas?.findIndex(value => value.id == props.dataUser?.id)!;
                props.registerDatas![index] = newData;
                props.setNewRegisterDatas(props.registerDatas!);
                props.onClose();
                toast.success("Berhasil update data");
            }).catch((e) => {
                toast.error(`Terjadi kesalahan update: ${e}`);
            });
        }
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth={"lg"}
            fullWidth
        >
            <DialogTitle id="responsive-dialog-title">
                {`Update NPM #${props.dataUser?.npm}`}
                <div className="flex gap-5 text-sm mt-5">
                    <button className="font-bold bg-black text-white p-2">Detail
                        User
                    </button>
                </div>
            </DialogTitle>

            <DialogContent>
                {props.isLoading == true ?
                    <div className="flex justify-center items-center mt-10"><ClipLoader color={'blue'}/></div> : <>
                        <TableUpdateRegisterData dataUser={props.dataUser} setNewDataUser={setNewData}/>
                    </>
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} autoFocus>
                    Tutup
                </Button>
                <Button onClick={handleSubmit} autoFocus>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogUpdateRegisterData;