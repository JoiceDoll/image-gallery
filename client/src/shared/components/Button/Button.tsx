interface IProps {
  text: string;
}

const Button = (props: IProps) => {
  const { text } = props;
  return (
    <button
      type="submit"
      className=" text-white p-2 rounded w-[100%] bg-custom-blue-color hover:bg-custom-hover-blue-color"
    >
      {text}
    </button>
  );
};

export default Button;
