import moduleStyle from './Template.module.css';
import Typography from '../../Composite/Typography/Typography';
import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
import AirInfoCard from '../Cards/AirInfoCard/AirInfoCard';
import { getCurrentTime } from '../../../utils/DateUtils';
import useLocation from '../../../hooks/useLocation';

const airKeyArr = ['pm10', 'pm25', 'o3', 'co', 'no2', 'so2'];

const AirTemplate = () => {
  const { stringDate, stringTime } = getCurrentTime();
  const location = useLocation();
  return (
    <section className={moduleStyle.template}>
      <FlexRow>
        <FlexColumn width='100%' padding='8px 16px'>
          {/* TODO DateTitle 말고 currentTime 쓰기 */}
          <Typography.SubTitle>
            {stringDate} {stringTime} {location} 미세먼지 정보
          </Typography.SubTitle>
          <FlexRow justifyContent='space-between'>
            {airKeyArr.map((name) => (
              <AirInfoCard name={name} key={name} />
            ))}
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default AirTemplate;
