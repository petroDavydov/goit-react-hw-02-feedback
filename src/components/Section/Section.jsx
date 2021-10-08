import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section(props) {
  const { title = '', children } = props;
  return (
    <section className={s.section}>
      {title && (
        <h2 className={s.titleSection}>
          {title}
          {children}
        </h2>
      )}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
