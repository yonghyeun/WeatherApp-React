import moduleCss from './Form.module.css';

const Form = ({ children, onSubmit, className }) => {
  // TODO useCallback 을 쓸까 ? 공부하고 나서 쓰자
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form className={className || moduleCss.form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
