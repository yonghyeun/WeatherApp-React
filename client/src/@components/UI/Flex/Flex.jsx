import moduleStyle from './Flex.module.css';
import React from 'react';
const FlexColumn = ({ children, width, flexGrow = [1], gap = '16px' }) => {
  if (flexGrow.reduce((pre, cur) => pre + cur) !== 1) {
    throw new Error('flexGrow 의 합은 항상 1이여야 합니다');
  }
  return (
    <section style={{ width, gap }} className={moduleStyle.flexColumn}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { flexGrow: flexGrow[index] });
      })}
    </section>
  );
};

const FlexRow = ({ children, width, flexGrow = [1], gap = '2%' }) => {
  if (flexGrow.reduce((pre, cur) => pre + cur) !== 1) {
    throw new Error('flexGrow 의 합은 항상 1이여야 합니다');
  }

  return (
    <section style={{ width, gap }} className={moduleStyle.flexRow}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { flexGrow: flexGrow[index] });
      })}
    </section>
  );
};

export { FlexColumn, FlexRow };
