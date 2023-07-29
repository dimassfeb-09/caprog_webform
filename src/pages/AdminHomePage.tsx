import {Logout, Visibility} from "@mui/icons-material";
import {useEffect, useState} from "react";
import getRegisterData from "../repository/getRegisterData.ts";
import DialogDetailUser from "../components/DialogDetailUser.tsx";
import getDocumentData from "../repository/getDocumentData.ts";
import {getAuth} from "firebase/auth";
import firebaseApp from "../db/FirebaseClient.ts";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import DialogConfirmDeleteData from "../components/DialogConfirmDeleteData.tsx";

const AdminHomePage = () => {

    const [registerDatas, setRegisterDatas] = useState<RegisterData[]>();
    const [registerData, setRegisterData] = useState<RegisterData>();
    const [document, setDocument] = useState<DocumentData>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDataDialogOpen, setIsDeleteDataDialogOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);


    const handleGetRegisterData = async () => {
        try {
            const result = await getRegisterData();
            setRegisterDatas(result);
        } catch (e) {
            console.log(e);
        }
    }

    const handleGetDocumentData = async (userID: number) => {
        try {
            const result = await getDocumentData(userID);
            setDocument(result);
        } catch (e) {
            throw e;
        }
    }

    const handleDeleteOpenDialog = (value: RegisterData) => {
        setIsDeleteDataDialogOpen(!isDeleteDataDialogOpen);
        setRegisterData(value);
    }

    const handleOpenDialog = (value: RegisterData) => {
        setLoading(true);
        handleGetDocumentData(value.id).then(() => value);
        setIsDialogOpen(!isDialogOpen);
        setRegisterData(value);
        setTimeout(() => setLoading(false), 500)
    }

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success("Berhasil keluar");
            navigate('/admin/login');
        } catch (e) {

        }
    }

    useEffect(() => {

        if (auth.currentUser == null) {
            navigate('/admin/login');
        }

        setLoading(false);

        handleGetRegisterData();

    }, [navigate]);


    return (
        <>
            <nav
                className="sticky top-0 z-50 flex items-center h-14 bg-gray-700 text-gray-200 text-white justify-evenly">
                <div>Admin Page</div>
                <button
                    className="flex justify-center items-center gap-3 border-b border-b-transparent hover:text-blue-500"
                    onClick={handleLogout}>
                    <Logout/> Keluar
                </button>
            </nav>

            <div className="text-xl font-medium px-5 pt-5">Data Pendaftar</div>

            <div className="relative overflow-x-auto mx-5">
                <table className="w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            NPM
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jurusan
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        registerDatas?.map((value, _) => {
                            return <>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {value.npm}
                                    </th>
                                    <td className="px-6 py-4">
                                        {value.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {value.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {value.major}
                                    </td>
                                    <td className="px-6 py-4 flex gap-3 justify-center items-center">
                                        <button className="text-white" onClick={() => handleOpenDialog(value)}>
                                            <Visibility/></button>
                                        <button className="bg-blue-500 text-white px-[1em] py-1">Edit</button>
                                        <button className="bg-red-500 text-white px-[1em] py-1"
                                                onClick={() => handleDeleteOpenDialog(value)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                    </tbody>
                </table>
                <DialogDetailUser open={isDialogOpen} onClose={() => setIsDialogOpen(false)} dataUser={registerData}
                                  documentType={document} isLoading={loading}/>
                <DialogConfirmDeleteData open={isDeleteDataDialogOpen} onClose={() => setIsDeleteDataDialogOpen(false)}
                                         dataUser={registerData} registerDatas={registerDatas}
                                         setRegisterDatas={setRegisterDatas}/>
            </div>
            <ToastContainer/>
        </>
    );
};


export default AdminHomePage;