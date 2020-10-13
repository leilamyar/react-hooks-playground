import React from 'react';

const BoilingVerdict = (props) => {
  console.log(props.celsius)
  if (props.celsius === '') {
    return <p>Enter a value.</p>;  
  }
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;  
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict;