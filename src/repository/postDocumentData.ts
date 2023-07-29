import supabase from "../db/DatabaseClient";

interface DocumentData {
    userID: number,
    cv: string,
    krs: string,
    photo: string,
    ktm: string,
    ktp: string,
    dns: string,
    sertifikat: string,
}

const postDocumentData = async (data: DocumentData) => {
    try {
        const {error} = await supabase.from("documents").insert({
            user_id: data.userID,
            krs: data.krs,
            photo: data.photo,
            ktm: data.ktm,
            ktp: data.ktp,
            dns: data.dns,
            sertifikat: data.sertifikat,
            cv: data.cv,
        });
        if (error != null) {
            throw Error(error.message);
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default postDocumentData;