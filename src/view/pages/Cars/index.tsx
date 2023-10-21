import { useState } from 'react'
import { useCarsData } from "../../../queries/useCarsData";
import { Modal } from "./components/Modal";



export function Cars() {
    const [isOpen, setIsOpen] = useState<any>(false);
    const { data } = useCarsData()

    const handleUpdateShowModal = () => setIsOpen(!isOpen)

    return (
        <>
            <Modal open={isOpen} handleClose={handleUpdateShowModal} />
        <div className="p-8 h-full bg-[#0A0D14]">
            <div className="mb-8 flex justify-between text-white">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-whitemd:text-5xl lg:text-6xl dark:text-white">
                Carros Cadastrados
            </h2>
            <button
                className="bg-blue-500 mb-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => handleUpdateShowModal()}
                >
                Cadastrar novo
            </button>

           
            </div>
            <div className=" overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Placa
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any) => (
                        <tr key={item.plate} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.conductorName}
                            </th>
                            <td className="px-6 py-4">
                            {item.color}
                            </td>
                            <td className="px-6 py-4">
                            {item.plate.toUpperCase()}
                            </td>
                            <td className={`px-6 py-4 ${item.status === "active" ? 'text-green-500' : 'text-red-500'}`}>
                                {item.status === "active" ? "Ativo" : "Inativo"}
                            </td>
                        </tr>
                        ))}
                   
                    </tbody>
                </table>
            </div>

        </div>
        </>

    )
}