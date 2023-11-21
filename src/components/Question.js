import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function Question(props) {
  const [displayText, setDisplayText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      setIsButtonActive(false);
      setDisplayText('');
    } else {
      setIsButtonActive(true);
      setDisplayText(props.answer);
    }
  };
 

  return (
    <button
      type="button"
      className={`answer_wrapper ${isButtonActive ? 'active' : ''}`}
      onClick={handleButtonClick}
    >
      <p className="question">
       {props.question}
        <span className={`chevron ${isButtonActive ? 'active' : ''}`}>
          {isButtonActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </p>
      <p className="answer">{displayText}</p>
    </button>
  );
}
