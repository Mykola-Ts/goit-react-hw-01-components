import { ListItem, Label, Quantity } from './ProfileStatsItem.styled';
import PropTypes from 'prop-types';

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
