import useTheme from '../../../hooks/useTheme';

const Title = ({ children, className, Tag = 'h1' }) => {
  const { theme } = useTheme();
  const sizeOfHeading = Tag.slice(Tag.length - 1);

  return (
    <Tag
      style={{ ...theme.Default, ...theme[`Title${sizeOfHeading}`] }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Title;
