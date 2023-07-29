import supabase from "../db/DatabaseClient.ts";

const getDocumentData = async (userID: number) => {
    try {
        const result = await supabase.from("documents").select("*").eq('user_id', userID);
        const document: DocumentData = result.data?.[0];
        return document;
    } catch (e) {
        throw e;
    }
}

export default getDocumentData;