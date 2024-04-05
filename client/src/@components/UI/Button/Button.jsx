import moduleCss from './Button.module.css';

const Button = ({ onClick, className, item }) => {
  return (
    <button className={className || moduleCss.button} onClick={onClick}>
      {item}
    </button>
  );
};

export default Button;
