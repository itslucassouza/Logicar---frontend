import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/userContext";
import { signin } from "../../../queries/SignIn";
import { useEffect, useState } from 'react'; // Importe o useState para gerenciar o estado
import { ErrorMessage } from "../../../components/error-message";

export function Login() {
  const navigate = useNavigate()
  const [isAvailable, setIsAvaileble] = useState(false)
  const [signinData, setSigninData] = useState({ // Corrija a inicialização do estado
    nome: "",
    password: ""
  });

  const { login, logout } = useUser();

  useEffect(() => {
    logout()
  }, [])


  const handleSigning = () => {
    const format = {
      ...signinData,
      password: parseInt(signinData.password)
    }

    setIsAvaileble(true)

    // @ts-ignore
    signin(format).then((data) => {
      login(data.nome)
      navigate('/dashboard')
      setIsAvaileble(false)
    })
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSigninData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <main>
      <section className="absolute w-full h-full bg-[#0A0D14]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Bem-vindo de volta
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>faça login com suas credenciais</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Nome
                      </label>
                      <input
                        type="email"
                        name="nome"
                        value={signinData.nome}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        value={signinData.password}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style={{ transition: "all .15s ease" }}
                      />
                      {isAvailable && (
                        <ErrorMessage message="Aguardando Inicio da Api, isso pode demorar um pouco.." />
                      )}
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                          style={{ transition: "all .15s ease" }}
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Lembrar-me
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={handleSigning}
                        disabled={isAvailable}
                      >
                        Entrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
