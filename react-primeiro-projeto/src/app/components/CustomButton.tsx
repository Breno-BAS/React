type Props = {
    label: string;
    aoClicar: () => void;
}


export const CustomButton = ({ label, aoClicar }: Props) => {
    return (
        <button onClick={aoClicar} className="p-3 rounded-md text-white bg-blue-700">{label}</button>
    )
}