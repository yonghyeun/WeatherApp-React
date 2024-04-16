import moduleTheme from './Title.module.css';

import { getCurrentTime } from '../../../../../utils/DateUtils';
import Title from '../../../../UI/Title/Title';

const DateTitle = () => {
  const { searchDate, time } = getCurrentTime();
  // TODO searchDate , time 부분 전역 상태로 변경하기
  return (
    <Title Tag='h2' className={moduleTheme.date}>
      {searchDate}
      {time}
    </Title>
  );
};

export default DateTitle;
