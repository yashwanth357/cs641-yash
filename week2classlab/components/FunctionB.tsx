import React, { useState } from 'react';


interface FunctionalComponentProps
{
    initialValue: string;
}
const FunctionB = ( props : FunctionalComponentProps) => {
  const [text, setText] = useState(props.initialValue);


  const handleClick = () =>{
  setText(text + '!');
  }
  

  return (
    <div>
      <p>Text: {text}</p>
      <button onClick={handleClick}>Updatet</button>

    </div>
  );
};

export default FunctionB;