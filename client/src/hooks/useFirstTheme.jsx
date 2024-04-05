import { useState, useEffect } from 'react';

import Theme from '../assets/style/Theme';

/**
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
