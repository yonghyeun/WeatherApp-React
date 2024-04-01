import Title from '../Title/Title';
import style from './SideBarTitle.module.css';
import { RiDashboardFill } from 'react-icons/ri';

// TODO props 를 넘겨주는 방식에 대해 재고하기
const SidebarTitle = () => {
  return (
    <>
      <Title
        className={style.sideBarTitle}
        text='TDweather'
        icon={<RiDashboardFill />}
      ></Title>
    </>
  );
};

export default SidebarTitle;
