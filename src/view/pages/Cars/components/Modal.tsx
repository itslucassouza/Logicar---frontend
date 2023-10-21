import { useEffect, useState } from "react";
import { useQueryClient } from '@tanstack/react-query'
import { createCar } from "../../../../queries/useCreateCar";
import { ErrorMessage } from "../../../../components/error-message";

export const Modal = ({ open, handleClose }: any) => {
    const queryClient = useQueryClient()
    const [data, setData] = useState<any>()
    const initialFormData = {
        conductorName: "",
        color: "",
        plate: ""
      };
    
      const [formData, setFormData] = useState(initialFormData);
      
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
        const format = {
            ...formData,
            parkingId: "dceb2337-42e0-4a69-bc92-d18e392191a2",
        }

        createCar(format).then(() => {
            queryClient.invalidateQueries({ queryKey: ['carData'] }).then(() => {
                handleCancel()
            })
        }).catch((e)=> {
           setData(e)
        })
      }
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      }

      useEffect(() => {
        setData({})
      }, [])
    
     

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
        <form className="w-full max-w-lg" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Nome
            </label>
            <input
              name="conductorName"
              value={formData.conductorName}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Nome"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Cor
            </label>
            <input
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Cor"
            />
           
          </div>
         
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name">
              Placa
            </label>
            <input
              name="plate"
              value={formData.plate}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Placa"
            />
          </div>
          <div className="w-full flex flex-center justify-center mt-5">
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
            Salvar</button>
        </div>
      </form>

        </section>
    </div>
    );
  };