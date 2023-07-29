import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import firebaseApp from "../db/FirebaseClient.ts";
import LoadingSpinner from "../components/LoadingSpinner.tsx";

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
                    toast.success("Berhasil masuk.");
                    navigate('/admin/home');
                }
            })
            .catch((error) => {
                if (error.code == "auth/user-not-found") {
                    toast.error("Pengguna tidak ditemukan.");
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
        <div
            className="h-screen w-full flex justify-center items-center bg-slate-600">
            <div className="flex flex-col gap-5 w-full h-1/2 mx-5 sm:w-3/4 lg:w-1/2 rounded-md bg-white mx-5 p-5">
                <div className="text-2xl font-bold mb-5">Login</div>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="p-2 border" value={email}
                               onChange={handleChangeEmail}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="p-2 border" value={password}
                               onChange={handleChangePassword}/>
                    </div>
                    <button className="px-[1.5em] py-[0.5em] bg-gray-500 text-white">Masuk</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AdminLoginPage;