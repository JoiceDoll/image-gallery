"use client";
import { Formik, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Input } from "@/shared/components";

export default function Home() {
  const handleSubmit = (values: any) => {
    console.log("submit");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Informe o seu nome de usuário"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-row ">
        <h1 className=" text-white absolute my-[8%] mx-[15%] text-6xl">
          IMAGE <br />
          GALLERY
        </h1>
        <div className=" md:w-[80%] w-[25%] lg:w-[25%] bg-custom-blue-color lg:h-[35rem]"></div>
        <div className="md:w-full w-[70%] lg:w-[70%] flex">
          <div className="w-[50%] mx-[25%] my-[10%] h-[50%] ">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col justify-around">
                <Input name={"email"} type={"text"} label={"Username"} />
                <Input name={"password"} type={"password"} label={"Senha"} />
                <button
                  type="submit"
                  className="bg-custom-blue-color w-[25%] sm:w-[20%] hover:bg-custom-hover-green"
                  onSubmit={handleSubmit}
                >
                  Procurar
                </button>
                <Link href="/register">
                  <p className="text-custom-blue-color text-center my-[20%] cursor-pointer hover:text-white">
                    Registrar-se
                  </p>
                </Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 right-0 lg:w-[50%] text-end text-[1.2rem] p-[2%]">
        <h2 className="text-white">
          Crie sua
          <span className="text-custom-blue-color font-bold"> GALERIA </span> na
          <span className="text-custom-blue-color font-bold"> NUVEM</span>
        </h2>
      </div>
    </>
  );
}
