import { Label, Percentage } from './StatisticsListItem.styled';
import PropTypes from 'prop-types';

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
