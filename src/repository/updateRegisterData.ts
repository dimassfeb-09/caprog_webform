import supabase from "../db/DatabaseClient.ts";

const updateRegisterData = async (userID: number, datas: RegisterData) => {
    try {
        const {data, error} = await supabase.from("registers").update({
            name: datas.name,
            npm: datas.npm,
            major: datas.major,
            gender: datas.gender,
            birth_place: datas.birth_place,
            birth_date: datas.birth_date,
            address: datas.address,
            phone: datas.phone,
            email: datas.email,
            apply_position: datas.apply_position,
            ipk: datas.ipk,
        }).eq("id", userID).select();


        if (error != null) {
            throw Error(error.message);
        }

        return data[0];
    } catch (e) {
        throw e;
    }
};

export default updateRegisterData;