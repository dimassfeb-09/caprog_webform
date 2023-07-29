import {SupabaseClient} from "@supabase/supabase-js";

const deleteRegisterData = async (supabase: SupabaseClient, userID?: number) => {
    try {
        await supabase.from("registers").delete().eq("id", userID);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export default deleteRegisterData;