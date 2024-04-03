import module from './Information.module.css';
import { getCurrentTime } from '../../../utils/DateUtils';
const Information = () => {
  // TODO 현재 사용중인 지역 정보 , 발표 시각 구하기
  const location = '서울특별시 도봉구 도봉1동';
  const anounceTime = '16시';

  const { year, month, date, time } = getCurrentTime();

  return (
    <section className={module.information}>
      <p>기상청에서 제공하는 {location}의 기상 자료입니다.</p>
      <p>제공되는 자료는 {anounceTime} 기준으로 제공되었습니다.</p>
      <p>
        현재 시각 :
        <i>
          {year}년 {month}월 {date}일 {time}
        </i>
      </p>
    </section>
  );
};

export default Information;
