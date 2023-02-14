import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";
export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  return datos
}
const NuevoCliente = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="m4-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>{" "}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className={
              "mt-5 w-full p-3 bg-blue-800 uppercase font-bold text-white text-lg text-center "
            }
            value={"Agregar Cliente"}
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
