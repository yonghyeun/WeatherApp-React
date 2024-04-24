import { FlexRow, FlexColumn } from '../../UI/Flex/Flex';
import AirInfoCard from '../Cards/AirInfoCard/AirInfoCard';
import { getCurrentTime } from '../../../utils/DateUtils';
import Typography from '../../Composite/Typography/Typography';
const airKeyArr = ['pm10', 'pm25', 'o3', 'co', 'no2', 'so2'];

const AirTemplate = () => {
  const { stringDate, stringTime } = getCurrentTime();

  return (
    <section>
      <FlexRow>
        <FlexColumn width='100%' padding='0px'>
          <FlexRow justifyContent='space-around'>
            {airKeyArr.map((name) => (
              <AirInfoCard name={name} key={name} />
            ))}
          </FlexRow>
          <FlexRow justifyContent='flex-end'>
            <Typography.TinyText>
              {stringDate} {stringTime} 기준
            </Typography.TinyText>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </section>
  );
};

export default AirTemplate;
