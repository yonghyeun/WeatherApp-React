import React from 'react';
import moduleStyle from './Typography.module.css'; // Ensure the path is correct

const Typography = ({ children }) => {
  if (!children) {
    throw new Error('Typography 컴포넌트는 혼자 사용될 수 없습니다.');
  }
  return <span>{children}</span>;
};

Typography.MainTitle = ({ children }) => {
  return <h1 className={moduleStyle.mainTitle}>{children}</h1>;
};

Typography.SubTitle = ({ children }) => {
  return <h2 className={moduleStyle.subTitle}>{children}</h2>;
};

Typography.MainText = ({ children }) => {
  return <p className={moduleStyle.mainText}>{children}</p>;
};

Typography.SubText = ({ children }) => {
  return <p className={moduleStyle.subText}>{children}</p>;
};

Typography.TinyText = ({ children }) => {
  return <p>{children}</p>;
};

Typography.Label = ({ children }) => {
  return <p className={moduleStyle.label}>{children}</p>;
};

export default Typography;
