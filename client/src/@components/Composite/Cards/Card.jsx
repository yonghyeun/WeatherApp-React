import moduleTheme from './Card.module.css';

import LocationTitle from './UI/Title/LocationTitle';
import DateTitle from './UI/Title/DateTitle';
import ChangeBar from './UI/ChangeBar/ChangeBar';
import WeatherIcon from './UI/WeatherIcon/WeatherIcon';
import InfoCard from './InfoCard/InfoCard';
import SubCard from './SubCard/SubCard';
const Card = ({ children, flexGrow }) => {
  // TODO 테마 넣어줘야 하나 ?
  if (!children)
    throw new Error('카드 컴포넌트는 하위 컴포넌트 없이 사용 될 수 없습니다.');
  return (
    <section style={{ flexGrow }} className={moduleTheme.card}>
      {children}
    </section>
  );
};

Card.LocationTitle = LocationTitle;
Card.DateTitle = DateTitle;
Card.ChangeBar = ChangeBar;
Card.WeatherIcon = WeatherIcon;
Card.Info = InfoCard;
Card.SubCard = SubCard;
export default Card;
