import {ChangeEventHandler} from "react";

interface detailUpdateProps {
    title: string;
    value: any;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const DetailUpdateRegister = (props: detailUpdateProps) => {
    return (
        <tr className="border-b">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {props.title}
            </th>
            <td className="px-6 py-4">
                <input type="text" className="w-full h-10 border px-2"
                       value={props.value}
                       onChange={props.onChange}
                       disabled={props.disabled}
                />
            </td>
        </tr>
    );
}

export default DetailUpdateRegister;