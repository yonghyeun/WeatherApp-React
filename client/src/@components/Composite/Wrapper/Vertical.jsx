// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import module from './Wrapper.module.css';

const Vertical = ({ ratio, children, style }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'column', ...style }}
      className={module.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Vertical;
