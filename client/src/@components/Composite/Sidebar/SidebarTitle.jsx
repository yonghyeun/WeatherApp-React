import moduleCss from './Sidebar.module.css';
import Title from '../../UI/Title/Title';
import { Link } from 'react-router-dom';
import { BsBrightnessAltLow } from 'react-icons/bs';

const SidebarTitle = ({ className }) => {
  return (
    <Title className={className || moduleCss.sidebarTitle}>
      <BsBrightnessAltLow />
      <Link to='/'>오늘날씨</Link>
    </Title>
  );
};

export default SidebarTitle;
