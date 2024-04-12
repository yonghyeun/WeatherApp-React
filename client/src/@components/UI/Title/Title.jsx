const Title = ({ children, className, Tag = 'h1' }) => {
  const sizeOfHeading = Tag.slice(Tag.length - 1);

  return <Tag className={className}>{children}</Tag>;
};

export default Title;
