// import React, { useState } from 'react';


function Button() {
    const [expression, setExpression] = useState('');

    const handleClick = (value) => {
      setExpression((prev) => prev + value);
    };
  
    const handleClear = () => {
      setExpression('');
    };
  
    const handleEvaluate = () => {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Error');
      }
    };

  return (
    <>
     
      <div className="buttons">
        <button type='button' className="button" onClick={() => handleClick('7')}>7</button>
        <button type='button' className="button" onClick={() => handleClick('8')}>8</button>
        <button type='button' className="button" onClick={() => handleClick('9')}>9</button>
        <button type='button' className="button" onClick={() => handleClick('/')}>/</button>

        <button type='button' className="button" onClick={() => handleClick('4')}>4</button>
        <button type='button' className="button" onClick={() => handleClick('5')}>5</button>
        <button type='button' className="button" onClick={() => handleClick('6')}>6</button>
        <button type='button' className="button" onClick={() => handleClick('*')}>*</button>

        <button type='button' className="button" onClick={() => handleClick('1')}>1</button>
        <button type='button' className="button" onClick={() => handleClick('2')}>2</button>
        <button type='button' className="button" onClick={() => handleClick('3')}>3</button>
        <button type='button' className="button" onClick={() => handleClick('-')}>-</button>

        <button type='button' className="button" onClick={() => handleClick('0')}>0</button>
        <button type='button' className="button" onClick={handleClear}>C</button>
        <button type='button' className="button" onClick={handleEvaluate}>=</button>
        <button type='button' className="button" onClick={() => handleClick('+')}>+</button>
      </div>
      
    </>
  );
}

export default Button;
