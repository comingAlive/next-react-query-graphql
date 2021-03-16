type Props = {
  name: string;
  icon?: JSX.Element;
  className?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
};

const Button = ({ name, icon, className, type, isLoading }: Props) => {
  return (
    <button
      className={`flex py-2 px-4 space-x-4 text-black bg-white ${className}`}
      type={type}
    >
      {icon}
      <span>{isLoading ? "Loading" : name}</span>
    </button>
  );
};
export default Button;
