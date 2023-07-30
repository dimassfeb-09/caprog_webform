import supabase from "../db/DatabaseClient.ts";

const getRegisterDataByKeyword = async (searchQuery: string) => {
    try {
        const {data, error} = await supabase
            .from('registers')
            .select('*')
            .or(`name.eq.${searchQuery},email.eq.${searchQuery},npm.eq.${searchQuery}`)

        if (error != null) {
            throw error;
        }

        return data;
    } catch (e) {
        throw e;
    }
}

export default getRegisterDataByKeyword;