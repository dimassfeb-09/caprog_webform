import {getStorage, ref, uploadBytesResumable} from "firebase/storage";
import firebaseApp from "../db/FirebaseClient.ts";

interface UploadFileDocument {
    npm: string;
    krs: File | null;
    photo: File | null;
    ktm: File | null;
    ktp: File | null;
    dns: File | null;
    sertifikat: File | null;
    cv: File | null;
}

const postUploadFileDocument = (data: UploadFileDocument, folderName: string) => {
    const storage = getStorage(firebaseApp);
    const promises = [];

    if (data.krs != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/krs.pdf`), data.krs));
    }

    if (data.photo != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/photo.png`), data.photo));
    }

    if (data.ktm != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/ktm.png`), data.ktm));
    }

    if (data.ktp != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/ktp.png`), data.ktp));
    }

    if (data.dns != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/dns.pdf`), data.dns));
    }

    if (data.sertifikat != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/sertifikat.pdf`), data.sertifikat));
    }

    if (data.cv != null) {
        promises.push(uploadBytesResumable(ref(storage, `${folderName}/cv.pdf`), data.cv));
    }

    Promise.all(promises)
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error(error);
        });

}

export default postUploadFileDocument;