import { StatisticsListItem } from 'components/StatisticsListItem/StatisticsListItem';
import { List, ListItem } from './StatisticsList.styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({ data }) => {
  const labels = [];

  for (let i = 0; i < data.length; i += 1) {
    if (!!~labels.indexOf(data[i].label)) {
      const id = labels.indexOf(data[i].label);

      data[id].percentage += data[i].percentage;

      data.splice(i, 1);
    } else {
      labels.push(data[i].label);
    }
  }

  return (
    <List>
      {data.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id}>
            <StatisticsListItem label={label} percentage={percentage} />
          </ListItem>
        );
      })}
    </List>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.array.isRequired,
};
