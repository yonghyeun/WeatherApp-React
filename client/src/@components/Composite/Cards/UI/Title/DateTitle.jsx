import moduleTheme from './Title.module.css';

import useTime from '../../../../../hooks/useTime';
import Typography from '../../../Typography/Typography';
const DateTitle = ({ extraText }) => {
  const { year, month, day, time } = useTime();
  // TODO searchDate , time 부분 전역 상태로 변경하기
  return (
    <Typography.SubTitle>
      {year}년{month}월{day}일 {''}
      {time}시 {extraText}
    </Typography.SubTitle>
  );
};

export default DateTitle;
