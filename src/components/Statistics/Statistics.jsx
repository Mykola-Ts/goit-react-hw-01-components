import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import PropTypes from 'prop-types';
import { Title } from './Statistics.styled';
import { Section } from './Statistics.styled';

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
