import moduleCss from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { BsBrightnessAltLow } from 'react-icons/bs';
import Typography from '../Typography/Typography';

const SidebarTitle = () => {
  return (
    <Typography.MainTitle className={moduleCss.sidebarTitle}>
      <BsBrightnessAltLow />
      <NavLink to='/'>오늘날씨</NavLink>
    </Typography.MainTitle>
  );
};

export default SidebarTitle;
