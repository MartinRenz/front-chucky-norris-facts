import { FunctionComponent } from 'react';

interface QuoteAreaProps {
  quote: string
  color: string
}

const QuoteArea: FunctionComponent<QuoteAreaProps> = ({ quote, color }) => {
  return (
    <blockquote className={`${color} border-l-4 text-gray-800 p-4`}>
      {quote}
    </blockquote>
  );
}

export default QuoteArea;