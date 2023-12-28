"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function Home() {
  const data = [
    { name: "username", type: "text" },
    { name: "password", type: "password" },
  ];

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
                {data.map((result, index) => (
                  <div key={index} className="flex flex-col my-1">
                    <Field
                      name={result.name}
                      type={result.type}
                      className="w-full bg-inherit border border-white h-[2.3rem] p-5 m align-middle text-white placeholder-white "
                    />
                    <ErrorMessage
                      name={result.name}
                      component="div"
                      className="error text-red-500"
                    />
                  </div>
                ))}
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
