import Horizontal from './Horizontal';
import Vertical from './Vertical';

const CardWrapper = () => {
  throw new Error('CardWrapper 는 Vertical , Horizontal 중에서 골라야 합니다.');
};

CardWrapper.Horizontal = Horizontal;
CardWrapper.Vertical = Vertical;

export default CardWrapper;
