// import moduleCss
// import Component
// import CustomHooks
import useDispatchTheme from '../../../hooks/useDispatchTheme';
import useTheme from '../../../hooks/useTheme';

const ThemeButton = () => {
  const handleTheme = useDispatchTheme();
  const theme = useTheme();

  if (theme === 'dark') {
    return (
      <button
        type='button'
        className='btn btn-outline-light'
        onClick={handleTheme}
      >
        Dark
      </button>
    );
  }
  return (
    <button
      type='button'
      className='btn btn-outline-dark'
      onClick={handleTheme}
    >
      Light
    </button>
  );
};

export default ThemeButton;
