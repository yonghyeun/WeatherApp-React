// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import module from './CardWrapper.module.css';

const Vertical = ({ ratio, children, style }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'column', ...style }}
      className={module.cardWrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Vertical;
