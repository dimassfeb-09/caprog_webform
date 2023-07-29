import {getStorage, ref, uploadBytesResumable} from "firebase/storage";
import firebaseApp from "../db/FirebaseClient.ts";

interface UploadFileDocument  {
    npm: string;
    krs: File | null;
    photo: File | null;
    ktm: File | null;
    ktp: File | null;
    dns: File | null;
    sertifikat: File | null;
    cv: File | null;
}

const postUploadFileDocument = (data: UploadFileDocument) => {
    const storage = getStorage(firebaseApp);
    const promises = [];

    const npm = data.npm;

    if (data.krs != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_krs.pdf`), data.krs));
    }

    if (data.photo != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_photo.png`), data.photo));
    }

    if (data.ktm != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_ktm.png`), data.ktm));
    }

    if (data.ktp != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_ktp.png`), data.ktp));
    }

    if (data.dns != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_dns.pdf`), data.dns));
    }

    if (data.sertifikat != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_sertifikat.pdf`), data.sertifikat));
    }

    if (data.cv != null) {
        promises.push(uploadBytesResumable(ref(storage, `${npm}/${npm}_cv.pdf`), data.cv));
    }

    Promise.all(promises)
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error(error);
        });

}

export  default  postUploadFileDocument;