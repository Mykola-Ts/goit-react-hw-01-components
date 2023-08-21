import PropTypes from 'prop-types';
import { Label } from './StatisticsListItem.styled';
import { Percentage } from './StatisticsListItem.styled';

export const StatisticsListItem = ({ label, percentage }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
