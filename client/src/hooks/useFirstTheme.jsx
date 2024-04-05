import { useState, useEffect } from 'react';

import Theme from '../assets/style/Theme';

/**
 * ? 굳이 themeStatus 까지 나눠서 상태를 정의해야 하나 ? 그냥 직접적으로 theme 를 바꿔주면 안되나 ?
 * useFirstTheme 은 첫 렌더링 시 ThemeProvider 에게 기본 테마 값을 지정해주는 커스텀 훅
 * 만약 로컬 스토리지에 저장된 값이 없다면 로컬 스토리지에 값을 추가하고 Light theme 로 설정
 * @const {String} thmeStatus - Light , Dark 중 하나의 값을 의미
 * @returns {Object} - themeStatus 에 따른 테마 팔레트를 반환
 */
const useFirstTheme = () => {
  const [themeStatus, setThemeStatus] = useState('Light');
  const theme = Theme[themeStatus];

  useEffect(() => {
    const prevTheme = window.localStorage.getItem('themeStatus');
    setThemeStatus(prevTheme || 'Light');
    if (!prevTheme) window.localStorage.setItem('themeStatus', 'Light');
  }, []);

  return { theme, setThemeStatus, themeStatus };
};

export default useFirstTheme;
