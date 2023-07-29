import {ClipLoader} from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center">
            <ClipLoader color={'blue'}/>
        </div>
    );
};

export default LoadingSpinner;