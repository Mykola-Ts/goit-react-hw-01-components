import { StatisticsListItem } from 'components/StatisticsListItem/StatisticsListItem';
import { List, ListItem } from './StatisticsList.styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => (
        <ListItem key={id}>
          <StatisticsListItem label={label} percentage={percentage} />
        </ListItem>
      ))}
    </List>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.array.isRequired,
};
