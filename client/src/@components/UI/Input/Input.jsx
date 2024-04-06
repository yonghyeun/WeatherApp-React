import moduleCss from './Input.module.css';

import useTheme from '../../../hooks/useTheme';

const Input = ({ placeHolder, className }) => {
  const { theme } = useTheme();

  return (
    <input
      style={{ ...theme.Default }}
      type='text'
      placeholder={placeHolder}
      className={className || moduleCss.input}
    />
  );
};

export default Input;
