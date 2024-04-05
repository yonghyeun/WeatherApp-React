// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import moduleCss from './Wrapper.module.css';
import useTheme from '../../../hooks/useTheme.jsx';
const Parent = ({ ratio, children, style, height, className }) => {
  const { theme } = useTheme();
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{
        ...theme.Default,
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
