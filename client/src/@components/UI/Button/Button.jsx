import moduleCss from './Button.module.css';

import useTheme from '../../../hooks/useTheme';

const Button = ({ onClick, className, item }) => {
  const { theme } = useTheme();

  return (
    <button
      style={{ ...theme.Default }}
      className={className || moduleCss.button}
      onClick={onClick}
    >
      {item}
    </button>
  );
};

export default Button;
