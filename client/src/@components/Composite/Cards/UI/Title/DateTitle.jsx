import moduleTheme from './Title.module.css';

import useTime from '../../../../../hooks/useTime';

const DateTitle = () => {
  const { year, month, day, time } = useTime();
  // TODO searchDate , time 부분 전역 상태로 변경하기
  return (
    <h2 className={moduleTheme.date}>
      {year}년{month}월{day}일 {''}
      {time}시
    </h2>
  );
};

export default DateTitle;
