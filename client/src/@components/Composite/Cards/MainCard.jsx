import Card from './Card';

const MainCard = ({ flexGrow }) => {
  return (
    <Card flexGrow={flexGrow}>
      <Card.LocationTitle />
      <Card.DateTitle />
      <Card.ChangeBar />
      <Card.WeatherIcon />
    </Card>
  );
};

export default MainCard;
