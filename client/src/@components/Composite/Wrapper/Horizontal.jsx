// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import module from './Wrapper.module.css';

const Horizontal = ({ ratio, children, style, height, className }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'row', height: height, ...style }}
      className={className || module.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Horizontal;
