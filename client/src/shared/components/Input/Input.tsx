import { InputHTMLAttributes } from "react";
import { Field, ErrorMessage } from "formik";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
}

const Input = (props: IProps) => {
  const { name, type, label } = props;
  const data = [{ name: name, type: type, label: label }];

  return (
    <>
      {data.map((result, index) => (
        <div key={index} className="flex flex-col my-1">
          <label htmlFor={result.label} className="text-white block mb-1">
            {result.label}
          </label>
          <Field
            name={result.name}
            type={result.type}
            className="w-full bg-inherit p-2 border border-white text-white"
          />
          <ErrorMessage
            name={result.name}
            component="div"
            className="error text-red-500"
          />
        </div>
      ))}
    </>
  );
};

export default Input;
