import moduleCss from './Input.module.css';

import useTheme from '../../../hooks/useTheme';

import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const { placeHolder, className } = props;
  return (
    <input
      style={{ ...theme.Default }}
      ref={ref}
      type='text'
      placeholder={placeHolder}
      className={className || moduleCss.input}
    />
  );
});

export default Input;
