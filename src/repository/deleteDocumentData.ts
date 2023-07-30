import {SupabaseClient} from "@supabase/supabase-js";

const deleteDocumentData = async (supabase: SupabaseClient, userID?: number) => {
    try {
        await supabase.from("documents").delete().eq("user_id", userID);
    } catch (e) {
        throw e;
    }
}

export default deleteDocumentData;