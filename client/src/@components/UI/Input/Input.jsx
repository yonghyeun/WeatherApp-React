import style from './Input.module.css';

const Input = ({ placeHolder, onChange, className }) => {
  return (
    <input
      type='text'
      placeholder={placeHolder}
      onChange={onChange}
      className={className || style.input}
    />
  );
};

export default Input;
