import useTheme from '../../../hooks/useTheme';

const ShareButton = () => {
  const theme = useTheme();

  const className =
    theme === 'dark' ? 'btn btn-outline-light' : 'btn btn-outline-dark';

  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('현재 주소가 복사되었습니다 !');
    });
  };

  return (
    <button type='button' className={className} onClick={handleShareClick}>
      Share
    </button>
  );
};

export default ShareButton;
