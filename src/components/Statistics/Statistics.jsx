import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Title, Section } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatisticsList data={data} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
