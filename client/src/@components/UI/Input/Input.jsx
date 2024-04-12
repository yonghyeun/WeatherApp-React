import moduleCss from './Input.module.css';

import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type='text'
      {...props}
      className={props.className || moduleCss.input}
    />
  );
});

export default Input;
