import useWeatherState from '../../../../hooks/useWeatherState';

const InfoCard = ({ date, time, infoName }) => {
  const { infoName } = useWeatherState(date, time);
};
