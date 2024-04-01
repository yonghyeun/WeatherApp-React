import style from './ContentHeader.module.css';

import Form from '../../../@components/UI/Form/Form';
import Input from '../../../@components/UI/Input/Input';
import Button from '../../../@components/UI/Button/Button';

// TODO 내부에 컴포넌트들 집어넣기
const ContentHeader = () => {
  return (
    <header className={style.contentHeader}>
      <Form>
        <Input />
        <Button item='click me !' />
      </Form>
    </header>
  );
};

export default ContentHeader;
