import moduleCss from './Input.module.css';

import useTheme from '../../../hooks/useTheme';

import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    <input
      style={{ ...theme.Default }}
      ref={ref}
      type='text'
      {...props}
      className={props.className || moduleCss.input}
    />
  );
});

export default Input;
