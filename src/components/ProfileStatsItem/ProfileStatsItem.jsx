import PropTypes from 'prop-types';
import { ListItem } from './ProfileStatsItem.styled';
import { Label } from './ProfileStatsItem.styled';
import { Quantity } from './ProfileStatsItem.styled';

export const ProfileStatsItem = ({ title, quantity }) => {
  return (
    <ListItem>
      <Label>{title}</Label>
      <Quantity>{quantity}</Quantity>
    </ListItem>
  );
};

ProfileStatsItem.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
