import useLocation from '../../../../../hooks/useLocation';
import Typography from '../../../Typography/Typography';

const LocationTitle = () => {
  const { addressName } = useLocation();

  return <Typography.MainTitle>{addressName}</Typography.MainTitle>;
};

export default LocationTitle;
