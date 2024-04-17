import moduleTheme from './Card.module.css';

import LocationTitle from './UI/Title/LocationTitle';
import DateTitle from './UI/Title/DateTitle';
import ChangeBar from './UI/ChangeBar/ChangeBar';

const Card = ({ children }) => {
  // TODO 테마 넣어줘야 하나 ?
  if (!children)
    throw new Error('카드 컴포넌트는 하위 컴포넌트 없이 사용 될 수 없습니다.');
  return <section className={moduleTheme.card}>{children}</section>;
};

Card.LocationTitle = LocationTitle;
Card.DateTitle = DateTitle;
Card.ChangeBar = ChangeBar;

export default Card;