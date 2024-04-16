const Title = ({ children, className, Tag = 'h1' }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Title;
