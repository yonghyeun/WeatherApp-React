import moduleTheme from './Title.module.css';

import useLocation from '../../../../../hooks/useLocation';
import Title from '../../../../UI/Title/Title';

const LocationTitle = () => {
  const location = useLocation();

  return (
    <Title Tag='h1' className={moduleTheme.location}>
      {location}
    </Title>
  );
};

export default LocationTitle;
