import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Nav></Nav>
        <HomePage></HomePage>
      </LocalizationProvider>
    </>
  );
}

export default App;
