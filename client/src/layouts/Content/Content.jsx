import style from './Content.module.css';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentMain from './ContentMain/ContentMain';
import ContentFooter from './ContentFooter/ContentFooter';

// TODO SEO 태그 section 으로 할건지 확인하기

const Content = () => {
  return (
    <section className={style.Content}>
      <ContentHeader />
      <ContentMain />
      <ContentFooter />
    </section>
  );
};

export default Content;
