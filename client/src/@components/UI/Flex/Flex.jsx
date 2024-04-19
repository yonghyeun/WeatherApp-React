import moduleStyle from './Flex.module.css';
import React from 'react';

const FlexColumn = ({ children, flexRatio = [1], ...props }) => {
  return (
    <section style={{ ...props }} className={moduleStyle.flexColumn}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { flexGrow: flexRatio[index] });
      })}
    </section>
  );
};

const FlexRow = ({ children, flexRatio = [1], ...props }) => {
  return (
    <section style={{ ...props }} className={moduleStyle.flexRow}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { flexGrow: flexRatio[index] });
      })}
    </section>
  );
};

export { FlexColumn, FlexRow };
