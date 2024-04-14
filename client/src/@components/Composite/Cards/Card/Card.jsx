// TODO CSS 속성 추가하기
const Card = ({ children }) => {
  return <section>{children}</section>;
};

Card.MainTitle = ({ title }) => <h1>{title}</h1>;
Card.SubTitle = ({ title }) => <h2>{title}</h2>;
Card.Text = ({ text, fontSize }) => (
  <p style={{ fontSize: { fontSize } }}>{text}</p>
);
Card.TextStrong = ({ text, fontSize, fontWeight = 500 }) => (
  <p style={{ fontSize: { fontSize }, fontWeight: { fontWeight } }}>{text}</p>
);
Card.Icon = ({ src, alt, width }) => <img src={src} alt={alt} width={width} />;
