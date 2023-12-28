"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {
  interface IValues {
    username: string;
    email: string;
    password: string;
  }

  const data = [
    { name: "username", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
  ];

  const handleSubmit = (values: IValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Informe um nome de usuário"),
    email: Yup.string()
      .email("Formato de e-mail inválido")
      .required("Informe o seu e-mail"),
    password: Yup.string().required("Informe a sua senha"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <div className=" w-screen flex flex-col justify-center align-middle px-[30%] py-[2%]">
      <h1 className="text-[1.4rem] text-white text-center p-[5%]">
        Registre-se
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {data.map((result) => (
            <div key={result.name} className="mb-4">
              <label htmlFor={result.name} className="text-white block mb-1">
                {result.name.charAt(0).toUpperCase() + result.name.slice(1)}
              </label>
              <Field
                name={result.name}
                type={result.type}
                className="w-full bg-inherit p-2 border border-white text-white"
              />
              <ErrorMessage
                name={result.name}
                component="div"
                className="error text-red-500 mt-1"
              />
            </div>
          ))}
          <button
            type="submit"
            className=" text-white p-2 rounded w-[100%] bg-custom-blue-color hover:bg-custom-hover-blue-color"
          >
            Registrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}
