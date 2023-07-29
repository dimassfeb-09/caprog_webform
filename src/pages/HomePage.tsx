import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {useEffect, useState} from "react";
import {Button, MobileStepper} from "@mui/material";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DaftarStep from "../components/DaftarStep";
import BiodataStep from "../components/BiodataStep";
import BerkasStep from "../components/BerkasStep";
import postUploadFileDocument from "../repository/postUploadFileDocument.ts";
import postRegisterData from "../repository/postRegisterData.ts";
import SuccessRegistered from "../components/SuccessRegistered.tsx";
import postDocumentData from "../repository/postDocumentData.ts";
import Nav from "../components/Nav.tsx";

const HomePage = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const [npm, setNpm] = useState("");
    const [location, setLocation] = useState("");
    const [major, setMajor] = useState("");

    const [nama, setNama] = useState("");
    const [kelas, setKelas] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState<Date | undefined>();
    const [tempatLahir, setTempatLahir] = useState("");
    const [alamat, setAlamat] = useState("");
    const [noPhone, setNoPhone] = useState("");
    const [email, setEmail] = useState("");
    const [positionApply, setPositionApply] = useState("");
    const [ipk, setIpk] = useState<null | number>(0);

    const [cv, setCV] = useState<File | null>(null);
    const [krs, setKRS] = useState<File | null>(null);
    const [pasFoto, setPasFoto] = useState<File | null>(null);
    const [ktm, setKTM] = useState<File | null>(null);
    const [ktp, setKTP] = useState<File | null>(null);
    const [dns, setDNS] = useState<File | null>(null);
    const [sertifikat, setSertifikat] = useState<File | null>(null);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const validation = () => {

        if (npm == "") {
            throw new Error("NPM harus diisi.");
        } else if (location == "") {
            throw new Error("Lokasi kampus harus diisi.");
        } else if (major == "") {
            throw new Error("Jurusan harus diisi.");
        } else if (nama == "") {
            throw new Error("Nama harus diisi.");
        } else if (kelas == "") {
            throw new Error("Kelas harus diisi.");
        } else if (jenisKelamin == "") {
            throw new Error("Jenis Kelamin harus diisi.");
        } else if (tempatLahir == "") {
            throw new Error("Tempat Lahir harus diisi.");
        } else if (tanggalLahir == undefined) {
            throw new Error("Tanggal Lahir harus diisi.");
        } else if (alamat == "") {
            throw new Error("Alamat harus diisi.");
        } else if (noPhone == "") {
            throw new Error("No HP harus diisi.");
        } else if (email == "") {
            throw new Error("Email harus diisi.");
        } else if (positionApply == "") {
            throw new Error("Posisi daftar harus diisi.");
        } else if (ipk == 0 || ipk == null) {
            throw new Error("IPK harus diisi.");
        } else if (cv == null) {
            throw new Error("Harap unggah CV.");
        } else if (krs == null) {
            throw new Error("Harap unggah KRS.");
        } else if (pasFoto == null) {
            throw new Error("Harap unggah Pas Foto.");
        } else if (ktm == null) {
            throw new Error("Harap unggah KTM.");
        } else if (ktp == null) {
            throw new Error("Harap unggah KTP.");
        } else if (dns == null) {
            throw new Error("Harap unggah DNS.");
        }
    };

    const handleUploadDocument = () => {
        postUploadFileDocument({
            cv: cv,
            dns: dns,
            ktm: ktm,
            ktp: ktp,
            npm: npm,
            photo: pasFoto,
            sertifikat: sertifikat,
            krs: krs
        });

    }

    const handlePostRegister = async () => {
        try {
            const id: number = await postRegisterData({
                major: major,
                gender: jenisKelamin,
                npm: npm,
                birth_place: tempatLahir,
                address: alamat,
                birth_date: tanggalLahir!,
                phone: noPhone,
                apply_position: positionApply,
                ipk: ipk ?? 0,
                email: email,
                name: nama,
            });
            return id;
        } catch (e) {
            throw e;
        }
    }

    const handlePostDocuments = async (id: number) => {
        try {
            await postDocumentData({
                photo: `${npm}_photo.png`,
                dns: `${npm}_dns.pdf`,
                ktp: `${npm}_ktp.png`,
                krs: `${npm}_krs.pdf`,
                sertifikat: `${npm}_sertifikat.pdf`,
                userID: id,
                ktm: `${npm}_ktm.png`,
                cv: `${npm}_cv.pdf`,
            });
        } catch (e) {
            throw e;
        }
    }


    const handleSubmit = async () => {
        try {
            setIsSubmitClicked(true);

            // validation input
            validation();

            // post registers and documents database to database
            handlePostRegister()
                .then((id) => handlePostDocuments(id)
                    .catch(error => {
                        throw error;
                    }))
                .catch(error => {
                    throw error;
                });

            // upload to firebase storage
            handleUploadDocument();

            toast.success('Berhasil unggah, harap tunggu informasi selanjutnya');
            setActiveStep(3);
        } catch (e) {
            setIsSubmitClicked(false);
            return toast.error(String(e), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleFileChangeCV = (file: File) => {
        setCV(file);
    };
    const handleFileChangeKRS = (file: File) => {
        setKRS(file);
    };
    const handleFileChangePasFoto = (file: File) => {
        setPasFoto(file);
    };
    const handleFileChangeKTM = (file: File) => {
        setKTM(file);
    };
    const handleFileChangeKTP = (file: File) => {
        setKTP(file);
    };
    const handleFileChangeDNS = (file: File) => {
        setDNS(file);
    };

    const handleFileChangeeSertifikat = (file: File) => {
        setSertifikat(file);
    };

    const step = () => {
        switch (activeStep) {
            case 0:
                return (
                    <DaftarStep
                        major={major}
                        location={location}
                        npm={npm}
                        setLocation={setLocation}
                        setNpm={setNpm}
                        setMajor={setMajor}
                    />
                );
            case 1:
                return (
                    <BiodataStep
                        kelas={kelas}
                        nama={nama}
                        jenisKelamin={jenisKelamin}
                        tempatLahir={tempatLahir}
                        tanggalLahir={tanggalLahir}
                        alamat={alamat}
                        phone={noPhone}
                        email={email}
                        positionApply={positionApply}
                        ipk={ipk}
                        setTempatLahir={setTempatLahir}
                        setTanggalLahir={setTanggalLahir}
                        setNama={setNama}
                        setKelas={setKelas}
                        setJenisKelamin={setJenisKelamin}
                        setAlamat={setAlamat}
                        setPhone={setNoPhone}
                        setEmail={setEmail}
                        setPositionApply={setPositionApply}
                        setIpk={setIpk}
                    />
                );
            case 2:
                return (
                    <BerkasStep
                        cv={cv?.name ? cv.name : null}
                        dns={dns?.name ? dns.name : null}
                        krs={krs?.name ? krs.name : null}
                        ktp={ktp?.name ? ktp.name : null}
                        ktm={ktm?.name ? ktm.name : null}
                        pasFoto={pasFoto?.name ? pasFoto.name : null}
                        sertifikat={sertifikat?.name ? sertifikat.name : null}
                        handleFileChangeCV={handleFileChangeCV}
                        handleFileChangeDNS={handleFileChangeDNS}
                        handleFileChangeKRS={handleFileChangeKRS}
                        handleFileChangeKTM={handleFileChangeKTM}
                        handleFileChangeKTP={handleFileChangeKTP}
                        handleFileChangePasFoto={handleFileChangePasFoto}
                        handleFileChangeSertifikat={handleFileChangeeSertifikat}
                    />
                );
            case 3:
                return <SuccessRegistered/>;
            default:
                return <div></div>;
        }
    };

    useEffect(() => {
    }, []);

    return (
        <>
            <Nav></Nav>
            <div className="flex flex-col justify-center items-center mx-6 md:mx-20 lg:mx-36 xl:mx-72">
                {step()}
                <MobileStepper
                    className="w-full mt-10"
                    variant="dots"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        maxWidth: 400,
                        flexGrow: 1,
                        backgroundColor: "white",
                    }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={activeStep === 2 ? handleSubmit : handleNext}
                            disabled={activeStep === 3 || isSubmitClicked ? true : false}
                        >
                            {activeStep === 2 ? isSubmitClicked ? 'Loading...' : "Submit" : "Next"}
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft/>
                            ) : (
                                <KeyboardArrowRight/>
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0 || activeStep === 3}>
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight/>
                            ) : (
                                <KeyboardArrowLeft/>
                            )}
                            Back
                        </Button>
                    }
                />
                <ToastContainer/>
            </div>
        </>
    );
};

export default HomePage;
