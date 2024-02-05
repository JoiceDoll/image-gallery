"use client";
import { Input, Button } from "@/shared/components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Register() {
  interface IValues {
    username: string;
    email: string;
    password: string;
  }

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
        <Form className=" h-[50vh] flex justify-between flex-col">
          <Input name={"username"} type={"text"} label={"Username"} />
          <Input name={"email"} type={"email"} label={"E-mail"} />
          <Input name={"password"} type={"password"} label={"Senha"} />
          <Button text={"Registrar-se"} />
        </Form>
      </Formik>
    </div>
  );
}
