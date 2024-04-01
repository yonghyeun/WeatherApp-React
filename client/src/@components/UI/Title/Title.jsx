const Title = ({ text, className, icon, Tag = 'h1' }) => {
  if (Tag.slice(Tag.length - 1) > 6)
    throw new Error('Tag는 h1 ~ h6 까지만 가능합니다');

  return (
    <Tag className={className}>
      {icon}
      {text}
    </Tag>
  );
};

export default Title;
