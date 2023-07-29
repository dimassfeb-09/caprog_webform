import {useNavigate} from "react-router-dom";

const NotFound404 = () => {

    const navigate = useNavigate();

    return (
        <div
            className="h-screen w-full flex flex-col gap-14 items-center justify-center bg-black text-white">
            <div className="text-4xl font-semibold">404 - Page Not Found</div>
            <button className="border border-white hover:bg-white hover:text-black p-3"
                    onClick={() => navigate('/')}>Kembali ke Utama
            </button>
        </div>
    );
};

export default NotFound404;