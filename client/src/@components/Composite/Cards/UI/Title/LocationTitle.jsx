import moduleTheme from './Title.module.css';

import useLocation from '../../../../../hooks/useLocation';
import Typography from '../../../Typography/Typography';

const LocationTitle = () => {
  const location = useLocation();

  return <Typography.MainTitle>{location}</Typography.MainTitle>;
};

export default LocationTitle;
