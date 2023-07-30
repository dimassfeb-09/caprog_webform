import {OpenInNew} from "@mui/icons-material";

const TableDocumentRegisterData = (documentData?: DocumentData) => {

    const documentUser = (key?: string, fileName?: string) => {
        return <tr className="border-b">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {key}
            </th>
            <td className="px-6 py-4">
                <a href={`${import.meta.env.VITE_URL_FIREBASE_STORAGE}/${documentData?.folder_name}%2F${fileName}?alt=media`}
                   target="_blank" className="text-blue-500">Lihat di sini <OpenInNew/></a>
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
                {documentUser("CV", documentData?.cv)}
                {documentUser("DNS", documentData?.dns)}
                {documentUser("KRS", documentData?.krs)}
                {documentUser("KTM", documentData?.ktm)}
                {documentUser("KTP", documentData?.ktp)}
                {documentUser("Foto", documentData?.photo)}
                {documentUser("Sertifikat", documentData?.sertifikat)}
                </tbody>
            </table>
        </div>
    );
};

export default TableDocumentRegisterData;