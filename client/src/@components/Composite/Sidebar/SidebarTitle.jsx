import style from './Sidebar.module.css';
import Title from '../../UI/Title/Title';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';

const SidebarTitle = ({ className }) => {
  return (
    <Title className={className || style.sidebarTitle}>
      <RiDashboardFill />
      <Link to='/'>TDWeather</Link>
    </Title>
  );
};

export default SidebarTitle;
