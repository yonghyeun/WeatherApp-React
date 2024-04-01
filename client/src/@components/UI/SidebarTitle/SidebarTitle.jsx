import Title from '../Title/Title';
import style from './SideBarTitle.module.css';
import { RiDashboardFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

// TODO props 를 넘겨주는 방식에 대해 재고하기
// TODO 킹받게 ICON 하고 text 사이즈 정렬 안맞는거 수정하기
const SidebarTitle = () => {
  return (
    <>
      <Title
        className={style.sideBarTitle}
        text={<NavLink to='/'>TDweather</NavLink>}
        icon={<RiDashboardFill />}
      ></Title>
    </>
  );
};

export default SidebarTitle;
