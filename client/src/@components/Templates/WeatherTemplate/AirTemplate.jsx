import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
import AirInfoCard from '../Cards/AirInfoCard/AirInfoCard';
import { getCurrentTime } from '../../../utils/DateUtils';

const airKeyArr = ['pm10', 'pm25', 'o3', 'co', 'no2', 'so2'];

const AirTemplate = () => {
  const { stringDate, stringTime } = getCurrentTime();

  return (
    <section>
      <FlexRow>
        <FlexColumn width='100%' padding='8px 16px'>
          {/* TODO DateTitle 말고 currentTime 쓰기 */}
          <FlexRow justifyContent='space-between'>
            {airKeyArr.map((name) => (
              <AirInfoCard name={name} key={name} />
            ))}
          </FlexRow>
          <FlexRow justifyContent='flex-end'>
            <p>
              {stringDate} {stringTime} 기준
            </p>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default AirTemplate;
