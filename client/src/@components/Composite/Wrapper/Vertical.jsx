// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import moduleCss from './Wrapper.module.css';
// import customHooks
import useTheme from '../../../hooks/useTheme.jsx';
const Vertical = ({ ratio, children, style, className }) => {
  const { theme } = useTheme();
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ ...theme.Default, flexDirection: 'column', ...style }}
      className={className || moduleCss.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Vertical;
