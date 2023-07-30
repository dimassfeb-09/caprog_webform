import {Logout, Search, Visibility} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import getRegisterData from "../repository/getRegisterData.ts";
import DialogDetailRegisterData from "../components/DialogDetailRegisterData.tsx";
import getDocumentData from "../repository/getDocumentData.ts";
import {getAuth} from "firebase/auth";
import firebaseApp from "../db/FirebaseClient.ts";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import DialogConfirmDeleteData from "../components/DialogConfirmDeleteData.tsx";
import DialogUpdateRegisterData from "../components/DialogUpdateRegisterData.tsx";

const AdminHomePage = () => {

    const [filter, setFilter] = useState<RegisterData[] | null>(null);
    const [registerDatas, setRegisterDatas] = useState<RegisterData[]>();
    const [registerData, setRegisterData] = useState<RegisterData>();
    const [document, setDocument] = useState<DocumentData>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);


    const handleGetRegisterData = async () => {
        try {
            const result = await getRegisterData();
            setRegisterDatas(result);
        } catch (e) {
            throw e;
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

    const handleOpenDialogDelete = (value: RegisterData) => {
        setIsDeleteDialogOpen(!isDeleteDialogOpen);
        setRegisterData(value);
    }

    const handleOpenDialog = (value: RegisterData) => {
        setLoading(true);
        handleGetDocumentData(value.id).then(() => value);
        setIsDialogOpen(!isDialogOpen);
        setRegisterData(value);
        setTimeout(() => setLoading(false), 500)
    }

    const handleOpenDialogUpdate = (value: RegisterData) => {
        setLoading(true);
        setRegisterData(value);
        setIsUpdateDialogOpen(!isUpdateDialogOpen);
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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        const filterData = registerDatas?.filter(value =>
            value.id == Number(keyword) ||
            value.major.toLowerCase() == keyword ||
            value.npm == keyword ||
            value.name.toLowerCase() == keyword ||
            value.email.toLowerCase() == keyword);
        if (keyword != "") {
            setFilter(filterData!);
        } else {
            setFilter(null);
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
                className="sticky top-0 z-50 flex items-center h-14 bg-gradient-to-r from-[#b4d4fa] to-[#dec7fc] text-black font-bold justify-between px-5">
                <div>Admin Page</div>
                <button onClick={handleLogout}><Logout/></button>
            </nav>

            <div className="text-xl font-medium px-5 pt-5">Data Pendaftar</div>

            <div className="flex flex-col gap-3 px-5 pt-5 w-full sm:w-1/2">
                <label htmlFor="">Filter</label>
                <div className="border text-sm h-10 flex gap-2 items-center pl-2">
                    <Search/>
                    <input type="text" className="focus:outline-none bg-transparent w-full"
                           onChange={handleSearchChange}
                           placeholder="Cari berdasarkan ID, npm, nama, email, atau jurusan."
                    />
                </div>
            </div>


            <div className="relative overflow-x-auto mx-5">
                <table className="w-full mt-5 text-sm text-left border">
                    <thead
                        className="text-xs uppercase border">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
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
                        filter != null ? filter?.map((value, _) => {
                            return <>
                                <tr className="bg-white border-b">
                                    <th scope="row"
                                        className="px-6 py-4 font-bold whitespace-nowrap">
                                        {value.id}
                                    </th>
                                    <th scope="row"
                                        className="px-6 py-4 font-bold whitespace-nowrap">
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
                                        <button onClick={() => handleOpenDialog(value)}>
                                            <Visibility/></button>
                                        <button className="bg-blue-500 text-white px-[1em] py-1"
                                                onClick={() => handleOpenDialogUpdate(value)}>Edit
                                        </button>
                                        <button className="bg-red-500 text-white px-[1em] py-1"
                                                onClick={() => handleOpenDialogDelete(value)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            </>
                        }) : registerDatas?.map((value, _) => {
                            return <>
                                <tr className="bg-white border-b">
                                    <th scope="row"
                                        className="px-6 py-4 font-bold whitespace-nowrap">
                                        {value.id}
                                    </th>
                                    <th scope="row"
                                        className="px-6 py-4 font-bold whitespace-nowrap">
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
                                        <button onClick={() => handleOpenDialog(value)}>
                                            <Visibility/></button>
                                        <button className="bg-blue-500 text-white px-[1em] py-1"
                                                onClick={() => handleOpenDialogUpdate(value)}>Edit
                                        </button>
                                        <button className="bg-red-500 text-white px-[1em] py-1"
                                                onClick={() => handleOpenDialogDelete(value)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                    </tbody>
                </table>
                <DialogDetailRegisterData open={isDialogOpen} onClose={() => setIsDialogOpen(false)}
                                          dataUser={registerData}
                                          documentType={document} isLoading={loading}/>
                <DialogConfirmDeleteData open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}
                                         dataUser={registerData} registerDatas={registerDatas}
                                         setRegisterDatas={setRegisterDatas}/>
                <DialogUpdateRegisterData open={isUpdateDialogOpen} onClose={() => setIsUpdateDialogOpen(false)}
                                          isLoading={loading}
                                          setNewRegisterDatas={setRegisterDatas}
                                          registerDatas={registerDatas}
                                          dataUser={registerData
                                          }
                />
            </div>
            <ToastContainer/>
        </>
    );
};


export default AdminHomePage;