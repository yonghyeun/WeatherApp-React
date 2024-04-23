import useTheme from '../../../hooks/useTheme';

const Loading = () => {
  const theme = useTheme();

  if (theme === 'dark') {
    return <div className='spinner-border text-light' role='status'></div>;
  }

  return <div className='spinner-border text-dark' role='status'></div>;
};

export default Loading;
