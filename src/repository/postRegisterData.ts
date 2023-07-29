import supabase from "../db/DatabaseClient";

interface RegisterData  {
    name: string;
    npm: string;
    major: string;
    gender: string;
    birth_place: string;
    birth_date: Date;
    address:string;
    phone: string;
    email: string;
    apply_position: string;
    ipk: number;
}

const postRegisterData = async (datas: RegisterData)  => {
    try {
        const { data, error } = await supabase.from("registers").insert({
            name: datas.name,
            npm: datas.npm,
            major: datas.major,
            gender: datas.gender,
            birth_place: datas.birth_place,
            birth_date: datas.birth_date.toISOString(),
            address:datas.address,
            phone: datas.phone,
            email: datas.email,
            apply_position: datas.apply_position,
            ipk: datas.ipk,
        }).select();


        if (error != null) {
            throw Error(error.message);
        }

        return data[0].id;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default  postRegisterData;