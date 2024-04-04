import style from './Content.module.css';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentMain from './ContentMain/ContentMain';
import ContentFooter from './ContentFooter/ContentFooter';

const ContentLayout = () => {
  return (
    <section className={style.Content}>
      <ContentHeader />
      <ContentMain />
      <ContentFooter />
    </section>
  );
};

export default ContentLayout;
