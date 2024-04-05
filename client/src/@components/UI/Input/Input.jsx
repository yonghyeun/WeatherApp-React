import moduleCss from './Input.module.css';

import useTheme from '../../../hooks/useTheme';

const Input = ({ placeHolder, onChange, className }) => {
  const { theme } = useTheme();

  return (
    <input
      style={{ ...theme.Default }}
      type='text'
      placeholder={placeHolder}
      onChange={onChange}
      className={className || moduleCss.input}
    />
  );
};

export default Input;
