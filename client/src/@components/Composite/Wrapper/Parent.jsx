// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import moduleCss from './Wrapper.module.css';
const Parent = ({ ratio, children, style, height, className }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{
        flexDirection: 'row',
        height: height,
        ...style,
      }}
      className={className || moduleCss.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Parent;
