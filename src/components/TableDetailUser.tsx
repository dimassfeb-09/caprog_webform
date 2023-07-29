const TableDetailUser = (dataUser?: RegisterData) => {

    const detailUser = (key: string, value?: string | number) => {
        return <tr className="border-b">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {key}
            </th>
            <td className="px-6 py-4">
                {value}
            </td>
        </tr>
    }

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
                {detailUser("ID", dataUser?.id)}
                {detailUser("NPM", dataUser?.npm)}
                {detailUser("NAMA", dataUser?.name)}
                {detailUser("No HP", dataUser?.phone)}
                {detailUser("Email", dataUser?.email)}
                {detailUser("Jurusan", dataUser?.major)}
                {detailUser("Jenis Kelamin", dataUser?.gender)}
                {detailUser("Tempat Lahir", dataUser?.birth_place)}
                {detailUser("Tanggal Lahir", dataUser?.birth_date)}
                {detailUser("Alamat", dataUser?.address)}
                {detailUser("IPK", dataUser?.ipk)}
                {detailUser("Posisi Daftar", dataUser?.apply_position)}
                </tbody>
            </table>
        </div>
    );
};

export default TableDetailUser;