import { StatisticsListItem } from 'components/StatisticsListItem/StatisticsListItem';
import PropTypes from 'prop-types';
import { List } from './StatisticsList.styled';
import { ListItem } from './StatisticsList.styled';

export const StatisticsList = ({ data }) => {
const arrLabels = [];
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
