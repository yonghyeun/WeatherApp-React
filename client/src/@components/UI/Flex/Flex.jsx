import moduleStyle from './Flex.module.css';

const FlexColumn = ({ children, width, gap = '16px' }) => {
  return (
    <section style={{ width, gap }} className={moduleStyle.flexColumn}>
      {children}
    </section>
  );
};

const FlexRow = ({ children, width, gap = '16px' }) => {
  return (
    <section style={{ width, gap }} className={moduleStyle.flexRow}>
      {children}
    </section>
  );
};

export { FlexColumn, FlexRow };
