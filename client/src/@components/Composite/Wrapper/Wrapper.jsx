import Horizontal from './Horizontal';
import Vertical from './Vertical';
import Parent from './Parent';
const Wrapper = () => {
  throw new Error(
    'Wrapper 는 Parent ,Vertical , Horizontal 중에서 골라야 합니다.',
  );
};

Wrapper.Parent = Parent;
Wrapper.Horizontal = Horizontal;
Wrapper.Vertical = Vertical;

export default Wrapper;
