// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import style from './CardWrapper.module.css';

const Vertical = ({ ratio, children }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section style={{ flexDirection: 'column' }} className={style.cardWrapper}>
      {flexChildren}
    </section>
  );
};

export default Vertical;
