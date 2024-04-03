import { useState, useEffect } from 'react';

import Theme from '../assets/style/Theme';

/**
 * useFirstTheme 은 첫 렌더링 시 ThemeProvider 에게 기본 테마 값을 지정해주는 커스텀 훅
 * 만약 로컬 스토리지에 저장된 값이 없다면 로컬 스토리지에 값을 추가하고 light theme 로 설정
 * @const {String} thmeStatus - light , dark 중 하나의 값을 의미
 * @returns {Object} - themeStatus 에 따른 테마 팔레트를 반환
 */
const useFirstTheme = () => {
  const [themeStatus, setTheme] = useState('light');
  const theme = Theme[themeStatus];

  useEffect(() => {
    const prevTheme = window.localStorage.getItem('themeStatus');
    setTheme(prevTheme || 'light');
    if (!prevTheme) window.localStorage.setItem('themeStatus', 'light');
  }, []);

  return { theme, setTheme };
};

export default useFirstTheme;
