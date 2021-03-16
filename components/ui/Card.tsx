import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`p-4 space-y-2 bg-white bg-opacity-80 rounded border-4 border-white border-opacity-30 shadow-md dark:bg-black dark:bg-opacity-80 blur-1 ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
