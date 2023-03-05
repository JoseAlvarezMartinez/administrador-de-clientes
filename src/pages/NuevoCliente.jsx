import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { agregarCliente } from "../data/Clientes";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const errores = [];
  const email = formData.get("email");
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El correo no es valido");
  }
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  if (Object.values(errores).length > 0) {
    return errores;
  }
  await agregarCliente(datos)
  return redirect("/")
}
const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();
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
        {errores?.length
          ? errores.map((errorInfo, index) => (
              <Error key={index}>{errorInfo}</Error>
            ))
          : null}
        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className={
              "mt-5 w-full p-3 bg-blue-800 uppercase font-bold text-white text-lg text-center cursor-pointer"
            }
            value={"Agregar Cliente"}
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
