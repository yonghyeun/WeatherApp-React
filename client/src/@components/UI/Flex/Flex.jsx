import moduleStyle from './Flex.module.css';
import React from 'react';

const FlexColumn = ({ children, flexRatio = [], ...props }) => {
  return (
    <section style={{ ...props }} className={moduleStyle.flexColumn}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          flexBasis: `${flexRatio[index] * 100}%`,
        });
      })}
    </section>
  );
};

const FlexRow = ({ children, flexRatio = [], ...props }) => {
  return (
    <section style={{ ...props }} className={moduleStyle.flexRow}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          flexBasis: `${flexRatio[index] * 100}%`,
        });
      })}
    </section>
  );
};

export { FlexColumn, FlexRow };
