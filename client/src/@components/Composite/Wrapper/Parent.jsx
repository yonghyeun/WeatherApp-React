// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import module from './Wrapper.module.css';

const Parent = ({ ratio, children, style, height }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'row', height: height, ...style }}
      className={module.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Parent;
