import { FunctionComponent } from 'react';

interface ButtonProps {
  title: string
  onClick: () => void
}

const Button: FunctionComponent<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="bg-amber-950 text-white py-3 px-6 rounded" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;