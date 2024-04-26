import React from 'react';
import moduleStyle from './Typography.module.css'; // Ensure the path is correct

const Typography = ({ children }) => {
  if (!children) {
    throw new Error('Typography 컴포넌트는 혼자 사용될 수 없습니다.');
  }
  return <span>{children}</span>;
};

Typography.MainTitle = ({ children, className, ...props }) => {
  return (
    <h1 style={{ ...props }} className={className || moduleStyle.mainTitle}>
      {children}
    </h1>
  );
};

Typography.SubTitle = ({ children, ...props }) => {
  return (
    <h2 style={{ ...props }} className={moduleStyle.subTitle}>
      {children}
    </h2>
  );
};

Typography.MainText = ({ children, ...props }) => {
  return (
    <p style={{ ...props }} className={moduleStyle.mainText}>
      {children}
    </p>
  );
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
