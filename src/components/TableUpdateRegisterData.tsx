import React, {useEffect, useState} from "react";
import DetailUpdateRegister from "./DetailUpdateRegister";
import {MenuItem, Select} from "@mui/material";

interface UpdateRegisterProps {
    dataUser?: RegisterData;
    setNewDataUser: React.Dispatch<React.SetStateAction<RegisterData | null>>;
}


const TableUpdateRegisterData = (props: UpdateRegisterProps) => {

    const dataUser = props.dataUser;

    const [ID, setID] = useState<number>(dataUser?.id!);
    const [npm, setNPM] = useState<string>(dataUser?.npm!);
    const [name, setName] = useState<string>(dataUser?.name!);
    const [phone, setPhone] = useState<string>(dataUser?.phone!);
    const [email, setEmail] = useState<string>(dataUser?.email!);
    const [major, setMajor] = useState<string>(dataUser?.major!);
    const [gender, setGender] = useState<string>(dataUser?.gender!);
    const [birthPlace, setBirthPlace] = useState<string>(dataUser?.birth_place!);
    const [birthDate, setBirthDate] = useState<string>(dataUser?.birth_date!);
    const [address, setAddress] = useState<string>(dataUser?.address!);
    const [dns, setDNS] = useState<number>(dataUser?.ipk!);
    const [applyPosition, setApplyPosition] = useState<string>(dataUser?.apply_position!);

    useEffect(() => {
        props.setNewDataUser(
            {
                address: address,
                apply_position: applyPosition,
                birth_date: birthDate,
                birth_place: birthPlace,
                email: email,
                gender: gender,
                id: ID,
                ipk: dns,
                major: major,
                name: name,
                npm: npm,
                phone: phone,
                update_at: Date.now().toString(),
                created_at: ''
            }
        )
    }, [ID, npm, name, phone, email, major, gender, birthPlace, birthDate, address, dns, applyPosition]);

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left border">
                <thead
                    className="text-xs text-gray-700 uppercase border">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Data
                    </th>
                </tr>
                </thead>
                <tbody>
                <DetailUpdateRegister
                    title="ID"
                    value={ID}
                    onChange={(event) => setID(Number(event.target.value))}
                    disabled={true}
                />
                <DetailUpdateRegister
                    title="NPM"
                    value={npm}
                    onChange={(event) => setNPM(event.target.value)}
                />
                <DetailUpdateRegister
                    title="Nama"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <DetailUpdateRegister
                    title="No HP"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
                <DetailUpdateRegister
                    title="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <DetailUpdateRegister
                    title="Jurusan"
                    value={major}
                    onChange={(event) => setMajor(event.target.value)}
                />

                <tr className="border-b">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Jenis Kelamin
                    </th>
                    <td className="px-6 py-4">
                        <Select
                            defaultValue="Select"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            sx={{
                                height: '40px',
                            }}
                            fullWidth
                        >
                            <MenuItem value={"Select"} disabled>
                                Pilih Jenis Kelamin
                            </MenuItem>
                            <MenuItem value={"Men"}>Laki-Laki</MenuItem>
                            <MenuItem value={"Woman"}>Perempuan</MenuItem>
                        </Select>
                    </td>
                </tr>


                <DetailUpdateRegister
                    title="Tempat Lahir"
                    value={birthPlace}
                    onChange={(event) => setBirthPlace(event.target.value)}
                />
                <DetailUpdateRegister
                    title="Tanggal Lahir"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                />
                <DetailUpdateRegister
                    title="Alamat"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <DetailUpdateRegister
                    title="IPK"
                    value={dns}
                    onChange={(event) => setDNS(Number(event.target.value))}
                />

                <tr className="border-b">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Posisi Daftar
                    </th>
                    <td className="px-6 py-4">
                        <Select
                            defaultValue="Select"
                            value={applyPosition}
                            onChange={(event) => setApplyPosition(event.target.value)}
                            sx={{
                                height: '40px',
                            }}
                            fullWidth
                        >
                            <MenuItem value={"Select"} disabled>
                                Pilih Posisi Daftar
                            </MenuItem>
                            <MenuItem value={"Asisten Lab"}>Asisten Lab</MenuItem>
                            <MenuItem value={"Programmer"}>Programmer</MenuItem>
                        </Select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableUpdateRegisterData;