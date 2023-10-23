import { useEffect, useState } from "react";
import { useQueryClient } from '@tanstack/react-query'
import { updateTransaction } from "../../../../queries/exitCar";
import { ErrorMessage } from "../../../../components/error-message";

export const ExitCarModal = ({ open, handleClose }: any) => {
    const queryClient = useQueryClient()

    const formatTimestamp = (timestamp: any) => {
        if (!timestamp) return '';
    
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };

    const initialFormData = {
        plate: "",
      };
    
      const [formData, setFormData] = useState(initialFormData);
        const [data, setData] = useState<any>()

      const resetForm = () => {
        setFormData(initialFormData);
      }

      const handleCancel = () => {
        resetForm()
        handleClose()
        setData({})
      }

      const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData, 'sadasd')

        // @ts-ignore
        updateTransaction(formData.plate).then((dataResult) => {
            queryClient.invalidateQueries({ queryKey: ['dashboardData'] }).then(() => {
                setData(dataResult)
            })
        }).catch((e)=> {
           setData(e)
        })
      }

      useEffect(() => {
        setData({})
      }, [])
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      }

    return (
        <div
        className={`
        flex
        bg-black bg-opacity-60
        items-center
        justify-center
        fixed inset-0 z-10 p-8 text-white 
          ${open ? "block" : "hidden"}` }
      >
        <section className=" p-4 bg-gray-50">
            {data?.value ? (
                 <div className="w-full max-w-lg">
                 <div className="flex flex-wrap p-2 gap-2 -mx-3 mb-6">
                   <div className="w-full   bg-gray-200  md:w-1/1 px-3 mb-6 md:mb-0">
                     <p className="block
                     uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Hora de Entrada:
                     </p>
                     <p className="text-lg 
                     text-gray-900
                     ">{formatTimestamp(data?.entryTime)}</p>
                   </div>
                   <div className="w-full  bg-gray-200  md:w-1/1 px-3 mb-6 md:mb-0">
                     <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Hora de Saída:
                     </p>
                     <p className="text-lg
                     text-gray-900
                     ">{formatTimestamp(data?.exitTime)}</p>
                   </div>
                   <div className="w-full  bg-gray-200  px-3">
                     <p className="block 
                     uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Valor Pago:
                     </p>
                     <p className="text-lg
                     text-blue-500 
                     ">{data?.value}</p>
                   </div>
                   <div className="flex flex-end justify-end w-full mt-2">
                   <button
            onClick={handleCancel}
            type="button"
            className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Obrigado
            </button>
                  </div> 
                 </div>
               </div>
            ) : (
        <form className="w-full max-w-lg" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Placa do Veículo
            </label>
            
            <input
              name="plate"
              value={formData.plate}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="digite a placa do Veículo"
            />
             {data?.message && (
              <ErrorMessage message={data?.response.data.error} className="mb-3" />
            )}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
          onClick={handleCancel}
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
            Cancelar</button>
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
            Finalizar
            </button>
        </div>
      </form>
            )}

        </section>
    </div>
    );
  };