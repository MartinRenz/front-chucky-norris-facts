import { FunctionComponent } from 'react';

interface ButtonProps {
  theme?: string
}

const Button: FunctionComponent<ButtonProps> = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  );
}

export default Button;