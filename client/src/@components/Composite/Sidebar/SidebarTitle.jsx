import style from './Sidebar.module.css';
import Title from '../../UI/Title/Title';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';

const SidebarTitle = ({ className }) => {
  return (
    <Title className={className || style.sidebarTitle}>
      <RiDashboardFill />
      <NavLink to='/'>TDWeather</NavLink>
    </Title>
  );
};

export default SidebarTitle;
