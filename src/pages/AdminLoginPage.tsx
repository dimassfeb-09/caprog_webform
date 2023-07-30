import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import firebaseApp from "../db/FirebaseClient.ts";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import {ChangeHistoryOutlined} from "@mui/icons-material";

const AdminLoginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setIsUserAuthenticated(true);
            } else {
                setIsUserAuthenticated(false);
            }

            setTimeout(() => {
                setLoading(false);
                if (isUserAuthenticated) {
                    return navigate('/admin/home');
                }
            }, 300)

        });
    }, [navigate, loading, isUserAuthenticated]);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                if (userCredential.user != null) {
                    navigate('/admin/home');
                }
                toast.success("Berhasil masuk.");
            })
            .catch((error) => {
                if (error.code == "auth/user-not-found") {
                    toast.error("Pengguna tidak ditemukan.");
                } else if (error.code == "auth/wrong-password") {
                    toast.error("Kata sandi salah.");
                } else if (error.code == "auth/invalid-email") {
                    toast.error("Email tidak valid.");
                } else {
                    toast.error(error.message);
                }
            })
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    if (loading) {
        return LoadingSpinner();
    }

    return (
        <div className="h-screen w-full flex flex-col sm:flex-row  justify-center items-center">
            <div
                className="hidden sm:flex sm:px-5 sm:text-3xl md:px-5 justify-center items-center w-1/2 h-screen bg-gradient-to-r from-[#b4d4fa] to-[#dec7fc]">
                <div className="md:w-min  md:h-min bg-white/40 backdrop-blur-3xl p-10">
                    <div
                        className="text-md md:text-4xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                        <ChangeHistoryOutlined className="text-black"/> Digital platform to
                        manage
                        your <span className="text-black">organization's registration</span>
                    </div>
                </div>
            </div>
            <div
                className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#b4d4fa] to-[#dec7fc] sm:bg-gradient-to-r sm:from-white sm:to-white">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">Welcome Back!</div>
                <div className="bg-white mx-5 w-[90%] p-5 m-5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="">Email</label>
                            <input type="text" className="border p-2" value={email} onChange={handleChangeEmail}
                                   required={true}/>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label htmlFor="">Password</label>
                            <input type="password" className="border p-2" value={password}
                                   onChange={handleChangePassword} required={true}/>
                        </div>

                        <button className="bg-black p-2 text-white">Masuk</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AdminLoginPage;