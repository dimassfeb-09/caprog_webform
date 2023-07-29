import supabase from "../db/DatabaseClient";

const getRegisterData = async () => {
    try {
        const {data, error} = await supabase.from("registers").select('*');
        if (error != null) {
            throw Error(error.message);
        }
        const registerData: RegisterData[] = data;
        return registerData;
    } catch (e) {
        console.log(e);
    }
};

export default getRegisterData;