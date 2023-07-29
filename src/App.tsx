import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage.tsx";
import AdminHomePage from "./pages/AdminHomePage.tsx";
import NotFound404 from "./pages/404.tsx";

function App() {


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/admin/login" element={<AdminLoginPage/>}/>
                        <Route path="/admin/home" element={<AdminHomePage/>}/>
                        <Route path="*" element={<NotFound404/>}/>
                    </Routes>
                </BrowserRouter>

            </LocalizationProvider>
        </>
    );
}

export default App;
