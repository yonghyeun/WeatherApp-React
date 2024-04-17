import moduleStyle from './Flex.module.css';

const FlexColumn = ({ children, width }) => {
  return (
    <section style={{ width }} className={moduleStyle.flexColumn}>
      {children}
    </section>
  );
};

const FlexRow = ({ children, width }) => {
  return (
    <section style={{ width }} className={moduleStyle.flexRow}>
      {children}
    </section>
  );
};

export { FlexColumn, FlexRow };
